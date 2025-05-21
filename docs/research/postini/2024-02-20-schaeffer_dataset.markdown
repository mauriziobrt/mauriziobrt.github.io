---
layout: post
date:   2024-02-20 12:11:54 +0200
categories: research
title: "The SCHAEFFER dataset"
media: dataset
permalink: /research/schaeffer-dataset/
---

 <div class="container pt-5 mt-5 shadow p-5 mb-5 bg-white rounded">
    <div class="text-center">
      <h3>a Spectro-morphogical Corpus of Human-annotated Audio with Electroacoustic Features For Experimental Research.</h3>
      <p class="lead fw-bold">
        |<a href="https://drive.google.com/file/d/16YsPHV2GzR48htUisZC0oMxkwrx3S0bk/view?usp=sharing" class="btn border-white bg-white fw-bold">click for more info</a>|
        <!--<a href="https://ai.googleblog.com/2022/10/audiolm-language-modeling-approach-to.html" class="btn border-white bg-white fw-bold">blog post</a>|-->
      </p>
      <p class="lead fw-bold">
        |<a href="https://huggingface.co/datasets/dbschaeffer/schaeffer_thesis_corrected" class="btn border-white bg-white fw-bold">click to access the dataset</a>|
        <!--<a href="https://ai.googleblog.com/2022/10/audiolm-language-modeling-approach-to.html" class="btn border-white bg-white fw-bold">blog post</a>|-->
      </p>
    </div>
    <p>
      <b>Abstract.</b> 
      The SCHAEFFER dataset is a collection of manually annotated schaefferian sound-objects, created with the scope of training text-to-audio machine learning models and to research the automatic analysis of electroacoustic materials.
    
    </p>
    
  </div>

  <div class="container pt-5 mt-5 shadow p-5 mb-5 bg-white rounded">
    <h3>Labelling Examples</h3>
    <p class="mb-0">
      <br>
      Examples of audio files paired with their own descriptions and labels.
    </p>

   
    <div class="container pt-3">
      <h5>Sound Object Examples with caption and labels:</h5>

      <div class="table-responsive pt-3">
        <table class="table table-striped table-hover pt-2" id="librispeech-test-clean-table">
          <thead>
            <tr>
              <th>Sound Object</th>
              <th>Caption</th>
              <th>Labels</th>
              <th>User Labels</th>
            </tr>
          <tr>
            <td><audio controls="" controlslist="nodownload" class="px-1"> <source src="audio_samples/betoniera_20200804_145411_stereo.wav" type="audio/wav">Your browser does not support the audio element.</audio>
              Author:"Daniele Ghisi"
            </td>
            <td> Elaboration of several concrete sounds in a single texture like a continuous abstract construction environment but with birds chirping and some animals calling<!-- <audio controls="" controlslist="nodownload" class="px-1"> <source src="audio_samples/speech/1f385851-dc66-4da8-ac1b-8f5173f68649_prompt.wav" type="audio/wav">Your browser does not support the audio element.</audio>-->
            </td>
            <td>
              <ul>
                <li>Soundscape</li>
                <li>Noise</li>
                <li>Textural</li>
                <li>Composite or Stratified sound</li>
                <li>Very complex element</li>
                <li>Marked onset</li>
                <li>Flat sustain</li>
                <li>Flat ending</li>
                <li>No pulse</li>
                <li>Neutral</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>layering</li>
                <li>mass</li>
                <li>bird</li>
                <li>calls</li>
                <li>concrete</li>
                <li>construction</li>
              </ul>
            </td>
            </tr>
            <tr>
              <td><audio controls="" controlslist="nodownload" class="px-1"> <source src="audio_samples/blipblop3.wav" type="audio/wav">Your browser does not support the audio element.</audio>
              Author:"Luca Faraldi"
              </td>
              <td> series of glitchy distorted tones at varying density it sounds harsh as the high partials are very strong.<!-- <audio controls="" controlslist="nodownload" class="px-1"> <source src="audio_samples/speech/1f385851-dc66-4da8-ac1b-8f5173f68649_prompt.wav" type="audio/wav">Your browser does not support the audio element.</audio>-->
              </td>
              <td>
                <ul>
                  <li>Glitch</li>
                  <li>Synthesis</li>
                  <li>Crackle</li>
                  <li>Chirp</li>
                  <li>Percussive</li>
                  <li>Harmonic sound</li>
                  <li>Noisy sound</li>
                  <li>Relatively simple element</li>
                  <li>Sharp onset</li>
                  <li>Sharp ending"</li>
                  <li>Flat sustain</li>
                  <li>Irregular pulse train</li>
                  <li>Distortion</li>
                  <li>Neutral</li>
                </ul>
              </td>
              <td>
              </td>
              </tr>
              
                <tr>
            <td><audio controls="" controlslist="nodownload" class="px-1"> <source src="audio_samples/betoniera_20200804_181502_stereo.wav" type="audio/wav">Your browser does not support the audio element.</audio>
            Author:"Daniele Ghisi"
            </td>
            <td> A chaotic mixture of abstract electronic sounds drum hits percussion sounds voices singing all fading away in too short a time.<!-- <audio controls="" controlslist="nodownload" class="px-1"> <source src="audio_samples/speech/1f385851-dc66-4da8-ac1b-8f5173f68649_prompt.wav" type="audio/wav">Your browser does not support the audio element.</audio>-->
            </td>
            <td>
              <ul>
                <li>Vocal</li>
                <li>Instrumental</li>
                <li>Percussive</li>
                <li>Composite or Stratified sound</li>
                <li>Very complex element</li>
                <li>Flat onset</li>
                <li>Vacillating sustain</li>
                <li>Fade out</li>
                <li>Backward push</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>irregular sporadic pulses</li>
                <li>chaotic</li>
                <li>mixture</li>
                <li>medley</li>
              </ul>
            </td>
            </tr>
            <tr>
              <td><audio controls="" controlslist="nodownload" class="px-1"> <source src="audio_samples/trigg.mp3" type="audio/wav">Your browser does not support the audio element.</audio>
              Author:"Luca Faraldi"
              </td>
              <td> Pair of guitar harmonics spaced a fourth apart with swelling resonances.<!-- <audio controls="" controlslist="nodownload" class="px-1"> <source src="audio_samples/speech/1f385851-dc66-4da8-ac1b-8f5173f68649_prompt.wav" type="audio/wav">Your browser does not support the audio element.</audio>-->
              </td>
              <td>
                <ul>
                  <li>Drone</li>
                  <li>Stab</li>
                  <li>Textural</li>
                  <li>Instrumental</li>
                  <li>Percussive</li>
                  <li>Harmonic sound</li>
                  <li>Relatively simple element</li>
                  <li>Marked onset</li>
                  <li>Flat onset</li>
                  <li>Swelled onset</li>
                  <li>Decaying sustain</li>
                  <li>Fade out</li>
                  <li>Impulse</li>
                  <li>Resonators</li>
                  <li>Neutral</li>
                </ul>
              </td>
              <td>
              </td>
              </tr>
            </thead>
          <tbody></tbody>
        </table> 
      </div>
    </div>
  </div>

 <div class="container shadow p-5 mb-5 bg-white rounded">
    <div class="text-center">
      <h5>Copyright ©</h5>
      <p class="mb-0">
        <br>
        This dataset and each one of its audio files are released under a CC-by licence.
      </p>
    </div>
  </div>
