---
layout: post
title:  "Probabilistic Concatenative Synthesizer"
date:   2022-07-09 12:11:54 +0200
categories: coding
software: Supercollider, Flucoma
---

![concat](/assets/images/concat_sc.png)


<h1>Sintesi concatenativa basata su gruppi di descrittori: concatenazione in base alla prossimità spaziale.</h1>


How

	s.options.hardwareBufferSize_(4096);




	~analysis = Button(w, Rect(20, 20, 380, 30))
.states_([
	["Analysis", Color.black, Color.grey]
])
.action_({
	(
		~indices = Buffer.new(s);
		FluidBufOnsetSlice.processBlocking(s,~src,threshold:~threshold_value,indices:~indices, minSliceLength: ~minDuration_value); // find slice points in src buffer
		~indices.loadToFloatArray(action:{
			arg fa;
			var features = Buffer(s);
			var stats = Buffer(s);
			var flat = Buffer(s);
			~ds = FluidDataSet(s);
			fa.doAdjacentPairs{ // take in turn, the start and stop point of every slice
				arg start, end, i;
				//FluidBufMFCC.processBlocking(s,~src,start,end-start,features:features); // doo the mfcc analysis
				switch (~select_descriptor,
					0, {FluidBufLoudness.processBlocking(s, ~src, start, end-start, numChans: 1, features:features);},
					1, {FluidBufPitch.processBlocking(s, ~src, start, end-start,numChans: 1, features:features);},
					2, {FluidBufMFCC.processBlocking(s,~src,start,end-start, numChans: 1, features:features);},
					3, {FluidBufSpectralShape.processBlocking(s,~src,start,end-start, numChans: 1, features:features);}
				);
				// FluidBufSpectralShape.processBlocking(s, ~src, start, end-start,features:features);
				FluidBufStats.processBlocking(s,features,stats:stats); // get the statistical summary of the mfcc analysis
				FluidBufFlatten.processBlocking(s,stats,startFrame:5,numFrames:1,destination:flat); // copy out the median mfcc values into a flattened buffer
				~ds.addPoint("slice-%".format(i),flat); // add those values to the dataset

			};
			~ds.print;
			~src.sampleRate.postln;
			~indices.loadToFloatArray(action: { arg array; a = array;});
			~indices_array = (a.asList) / ~src.sampleRate;
			~buffer_length = ~src.numFrames / ~src.sampleRate;
			//~numero_segmenti.string = ~indices_array.size;

			//~indexOsc = ~indices_array.round(0.1).sort.asString;

			// 3 // Fit the dataset into a 2d Dimensional Space

			~standardized = FluidDataSet(s);
			~reduced = FluidDataSet(s);
			~normalized = FluidDataSet(s);
			~standardizer  = FluidStandardize(s);
			~normalizer = FluidNormalize(s, 0.05, 0.95);
			~umap = FluidUMAP(s).numDimensions_(2).numNeighbours_(5).minDist_(0.2).iterations_(50).learnRate_(0.2);

			~standardizer.fitTransform(~ds,~standardized,action:{"Standardized".postln});
			~umap.fitTransform(~standardized,~reduced,action:{"Finished UMAP".postln});
			~normalizer.fitTransform(~reduced,~normalized,action:{"Normalized Output".postln});

			~normalized.dump{|x| ~normalizedDict = x["data"]};
			~normalizedIndices = ~indices_array.normalize;
			~normalizedIndices.postln;
			// "Analysis done".postln;
		}
		);
	);
});






	~damn = Button(w, Rect(20, 20, 380, 30))
.states_([
	["Start Sequence", Color.black, Color.white],
	["Stop Sequence", Color.white, Color.black],
])
.action_({|butt, size, position|
	if(butt.value == 0) { t.pause; "stopped".postln;};
	if(butt.value == 1) {
		~neighbour_state = 0;
		~freeze = 0;
		//"started".postln;
		position = 5;
		size = ~normalizedDict.size;
		~state = Array.series(size);
		~distanceList = List(size);
		~normalizedDistance = List(size);

		t = Task({
			inf.do({ arg i;
				var time;
				position.postln;
				time = ~indices_array[position] - (if(position > 0, {~indices_array[position-1]},{0}));
				if(time > 15.0, {time = 15.0}, {});
				time.postln;
				time.wait;
				if (position > 0, {
					if (~freeze !=0, {
						x.set(\t_trig,1,\start,~normalizedIndices[position-1],\end,~normalizedIndices[position],\loops,1, \rate, 1);
					}, {
						~normalizedDistance.clear;
						~distanceList.clear;
						~getDistance = (
							for(0,size - 1,{arg i;
								var ds1, ds2, x1, x2, y1, y2, return;
								ds1 = ~normalizedDict.at("slice-" ++ position);
								x1 = ds1[0];
								y1 = ds1[1];
								ds2 = ~normalizedDict.at("slice-" ++ i);
								x2 = ds2[0];
								y2 = ds2[1];
								return = ((x2 - x1).squared + (y2 - y1).squared).sqrt;
								return = 1 - return;
								~distanceList.add(return);
							});
						);
						~normalizeSum = for(0, size - 1, {arg i;
							//divide each number in your sample by the sum of all the numbers in your sample
							var norm;
							if (~distanceList[i] == 0, ~distanceList[i] == 1, ~distanceList[i] == ~distanceList[i]);
							norm = ~distanceList[i] / ~distanceList.sum;
							~normalizedDistance.add(norm);
						}
						);

						if(~neighbour_state == 1, {
							~normalizedDistance = 1 - ~normalizedDistance;
							//~normalizedDistance.postln;
						}, {
							~normalizedDistance = ~normalizedDistance;
						}
						);
						////////switch//////////

						position = ~state.wchoose(~normalizedDistance.asArray);

						x.set(\t_trig,1,\start,~normalizedIndices[position-1],\end,~normalizedIndices[position],\loops,1, \rate, 1);
				})},{
					position = ~state.wchoose(~normalizedDistance.asArray);
					x.set(\t_trig,1,\start,~normalizedIndices[position],\end,~normalizedIndices[position+1],\loops,1);
				});
				k.string = "Segmento attuale:" +  position;
				~waveform.timeCursorPosition = ~indices_array[position] * ~src.sampleRate;
				((~indices_array[position] * ~src.sampleRate).round).postln;
				~numero_segmenti.string = "Numero segmenti:" + ~indices_array.size;
				if (~random_cutoff_state > 0, {
					~cutoff_random = 15000.rand;
					x.set(\cutoff, ~cutoff_random);
				});
				if (~random_dwet_state > 0, {
					~dwet_random = 1.0.rand;
					x.set(\dry_wet, ~dwet_random);
				});
				if (~random_bitcrush_state > 0, {
					~bitcrush_random = 16.rand +8;
					x.set(\bits, ~bitcrush_random);
				})
			});

		}).play(AppClock);
	};

});
