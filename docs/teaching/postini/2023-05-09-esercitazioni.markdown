---
layout: post
title:  "Max MSP exercises for students"
date:   2023-05-09 12:11:54 +0200
categories: teaching
software: GitHub
---
<h1>Max msp exercises</h1>

<div class="wrapper">
    <aside class="aside aside-2"><p style="letter-spacing: .1rem">Additive Synthesis</p></aside>
    <article class="main" style="font-family: MyCustomFont;">Operations on Sinusoids:
    <ol>
        <li>Add four sinusoids at frequencies corresponding to the first four harmonics of a fundamental frequency, which should be adjustable via a number box.</li>
        <li>Express the fundamental frequency in terms of a MIDI note.</li>
        <li>Assign each partial an amplitude inversely proportional to its harmonic index.</li>
        <li>Modulate the fundamental frequency using an LFO, with adjustable frequency and amplitude.</li>
        <li>Include an envelope generator that creates a rapid attack and a slow decay.</li>
    </ol> 
  </article>
</div>
<div class="wrapper">
    <aside class="aside aside-2"><p style="letter-spacing: .1rem">Samplers</p></aside>
    <article class="main" style="font-family: MyCustomFont;">Build a sampler:
    <ol>
           <li>Build a player with a randomizer that retriggers every time it is activated.</li>
        <li>Eliminate clicking sounds. Where do you think they originate?</li>
        <li>Ensure that playback does not exceed the segment's duration.</li>
        <li>Use tools like "combine" to make the data flow clearer and more organized.</li>
        <li>Utilize a polybuffer to change the sound played with each iteration.</li>
    </ol>
  </article>
</div>

<div class="wrapper">
    <aside class="aside aside-2"><p style="letter-spacing: .1rem">Samplers</p></aside>
    <article class="main" style="font-family: MyCustomFont;">Build a sampler:
    <h1>Poly Exercises</h1>
    <ol>
        <li>Create a simple polyphonic patch controlled with note input.</li>
        <li>Control the polyphonic patch with a MIDI keyboard. Refer to the help documentation to learn how.</li>
        <li>Integrate a mute function within the polyphonic patch.</li>
        <li>Control the polyphonic patch using target-specific commands.</li>
        <li>Incorporate Bach tools into the polyphonic patch.</li>
        <li>Choose a synthesis technique (additive, subtractive, or FM) and implement it within the polyphonic patch.</li>
        <li>Use Bach slots to control the polyphonic patch.</li>
        <li>Implement modulation using Bach slots.</li>
        <li>Focus on scaling modulation effectively for various parameters.</li>
        <li>Explore modulation between given frequencies or note ranges.</li>
    </ol>

    <h2>Bonus</h2>
    <ol>
        <li>Implement the Fibonacci series using only the following objects: <code>f</code>, <code>message</code>, <code>+</code>, <code>bang</code>, <code>unpack</code>, and <code>print</code>.</li>
        <li>What is aliasing? How can we address this issue?</li>
    </ol>

    <h2>Further Reading and Resources</h2>
    <ul>
        <li><a href="https://www.earlevel.com/main/2012/12/15/a-one-pole-filter/" target="_blank">A One-Pole Filter</a></li>
    </ul>
  </article>
</div>
<div class="wrapper">
    <aside class="aside aside-2"><p style="letter-spacing: .1rem">Samplers</p></aside>
    <article class="main" style="font-family: MyCustomFont;">Build a sampler:
    
    <h1>Filter and Synthesis Exercises</h1>
    <ol>
        <li>Build two basic FIR (Finite Impulse Response) filters.</li>
        <li>Create a basic IIR (Infinite Impulse Response) filter.</li>
        <li>Use a comb filter (<code>comb~</code>) to create a sound whose frequency is determined by the delay. Control the sound with a <code>kslider</code> object.</li>
        <li>Test the comb filter with harmonic and noisy sounds. What differences do you notice?</li>
        <li>Create a comb filter following the formula: <code>y<sub>t</sub> = a * x<sub>t</sub> + b * x<sub>(t−d)</sub> + c * y<sub>(t−d)</sub></code>.</li>
        <li>Subtractive Synthesis — Recreate a simple analog-style synth with:
            <ul>
                <li>Two anti-aliased oscillators</li>
                <li>A state-variable filter</li>
                <li>Separate amplitude and filter envelopes</li>
                <li>Vibrato control</li>
                <li>An LFO to control the filter</li>
            </ul>
        </li>
        <li>Given the biquadratic filter equation <code>y<sub>n</sub> = A * x<sub>n</sub> + B * x<sub>(n−1)</sub> + C * x<sub>(n−2)</sub> − D * y<sub>(n−1)</sub> − E * y<sub>(n−2)</sub></code>, recreate the filter using <code>filtergraph~</code> to control its coefficients. Compare the filtered signal with the one generated using <code>biquad~</code>, and use <code>plot~</code> with <code>windowed-fft~</code> to visualize the differences.</li>
        <li>Create a simple envelope follower.</li>
        <li>Use <code>cascade~</code> to create an equalizer.</li>
        <li>Control some parameters of the equalizer using the envelope follower.</li>
    </ol>

    <h2>Further Reading and Resources</h2>
    <ul>
        <li><a href="https://www.earlevel.com/main/2012/12/15/a-one-pole-filter/" target="_blank">A One-Pole Filter</a></li>
        <li><a href="https://cycling74.com/articles/filters-a-resource-guide-for-max-users/" target="_blank">Filters: A Resource Guide for Max Users</a></li>
        <li><a href="https://ccrma.stanford.edu/~jos/fp/One_Pole.html" target="_blank">One Pole Filters (CCRMA)</a></li>
        <li><a href="https://ccrma.stanford.edu/~jos/filters/" target="_blank">Filters Overview (CCRMA)</a></li>
        <li><a href="https://docs.cycling74.com/max8/tutorials/15_delaychapter06" target="_blank">Delay Tutorial (Max 8)</a></li>
        <li><a href="https://docs.cycling74.com/max8/tutorials/08_filterchapter02" target="_blank">Filter Tutorial 1 (Max 8)</a></li>
        <li><a href="https://cycling74.com/tutorials/demystifying-digital-filters-part-3" target="_blank">Demystifying Digital Filters: Part 3</a></li>
    </ul>
  </article>
</div>

<ol>
<h1>Sampler Exercises</h1>

    <h2>0.1 Monophonic Sampler</h2>
    <ol>
        <li>Build a simple sampler that plays a sound when a trigger is activated.</li>
        <li>Implement a system to alter the sampler's parameters in real-time (e.g., loop on/off, playback speed, etc.).</li>
        <li>Add pitch control for the sampler using a <code>kslider</code> object.  
            <strong>Bonus:</strong> Ensure that the played note matches the pitch of the triggered note.
        </li>
    </ol>

    <h2>0.2 Polyphonic Sampler</h2>
    <ol>
        <li>Use <code>poly~</code> (remember to create a separate patcher to embed in <code>poly~</code>) to make the sampler polyphonic.</li>
        <li>With <code>polybuffer~</code>, assign a different buffer to each voice of the sampler during playback.</li>
        <li>Control <code>poly~</code> parameters using <code>listfunnel</code> and <code>target</code>, with a <code>multislider</code> as the interface.</li>
    </ol>

    <h2>0.3 Bonus</h2>
    <ol>
        <li>Define RMS amplitude measurement: How would you implement it in Max MSP? How about peak amplitude measurement?</li>
    </ol>

<h1>FM Synthesis Exercises</h1>

    <h2>0.1 Monophonic FM Synthesis</h2>
    <ol>
        <li>Build an FM synthesizer in Max.</li>
        <li>Adjust the modulation index using an envelope.</li>
        <li>Modulate the modulator with an LFO, and control the intensity of this modulation with a dial.</li>
        <li>Create a control system for the note pitch using a <code>kslider</code> object.</li>
        <li>Adjust the synthesizer's amplitude using an envelope, implementing ADSR (Attack, Decay, Sustain, Release) controls via <code>function</code> and <code>line~</code>, and dials for user input.</li>
        <li>Add a low-pass filter with a slope of 24 dB/oct after the synthesis stage.</li>
        <li>Control the filter's envelope using dials simulating ADSR parameters.</li>
        <li>Include a control for the intensity of the filter envelope application.</li>
        <li>Control the synthesizer using <code>bach.roll</code> with <code>bach.playkeys</code>.</li>
        <li>Use slots to control various parameters (e.g., filter cutoff frequency, resonance).</li>
    </ol>

    <h2>0.2 Polyphonic FM Synthesis</h2>
    <ol>
        <li>Translate the monophonic FM synthesizer patch into <code>poly~</code>.</li>
        <li>Use mute messages within <code>poly~</code> to manage the activation and deactivation of voices.</li>
        <li>Control various synthesizer parameters externally, applying a unique modulation index envelope for each voice.</li>
        <li>Compose a polyphonic score in <code>bach.roll</code>, allowing each voice to have unique slot-based information (e.g., each note having a different filter cutoff frequency).</li>
    </ol>



