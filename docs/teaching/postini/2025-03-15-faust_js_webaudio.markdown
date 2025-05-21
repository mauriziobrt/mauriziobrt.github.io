---
layout: post
title:  "How to use Faust in Javascript using WebAudio"
date:   2025-03-14 12:11:54 +0200
categories: teaching
software: Faust, Websocket, P5.js, Javascript
---

# Tutorial: How to use Faust in Javascript using WebAudio

<a href="https://github.com/mauriziobrt/p5-to-supercollider">Link to the git repo</a>

In this tutorial we are going to look at how to set up the interaction between Javascript and Supercollider by using websocket and OSC. In this tutorial I am going to use Mac OS, so not everything may apply to Windows.

## Setting up a local P5.js project

The first thing to do is setting up p5.js by following <a href="https://p5js.org/tutorials/setting-up-your-environment/">this tutorial.</a>

## Creating the websocket

Then you have to setup your 

Step 1

From terminal:

npm init -y
Step 2

From terminal:

node server.js
Step 3

Open the server page. Then launch supercollider and test if the communication is working. You should evaluate the blocks: (Ndef(\oscControlled, { var freq = \freq.kr(440); var amp = \amp.kr(0.5); var sig = SinOsc.ar(freq) * amp; sig ! 2 // stereo output });)

// Start playing the Ndef Ndef(\oscControlled).play;

// Create an OSC responder that will update the Ndef parameters ( OSCdef(\freqControl, {|msg, time, addr, recvPort| var freqValue = msg[1]; var ampValue = msg[2].linlin(0, 1600, 0, 1); // Set the frequency parameter of the Ndef Ndef(\oscControlled).set(\freq, freqValue, \amp, ampValue); Ndef(\player).set(\bufnum, ~buffers[msg[3]].bufnum); }, '/control'); )

## Configuring OSC in Supercollider

const express = require('express');
const WebSocket = require('ws');
const OSC = require('osc-js');
const http = require('http');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Serve static files
app.use(express.static('public'));

// Create OSC UDP client
const oscClient = new OSC({
  plugin: new OSC.DatagramPlugin({
    send: {
      port: 57120,      // SuperCollider's default OSC port
      host: 'localhost'
    }
  })
});

wss.on('connection', (ws) => {
  console.log('Client connected');
  
  ws.on('message', (message) => {
    try {
      const data = JSON.parse(message);
      // Convert number strings to actual numbers
      const args = data.args.map(arg => typeof arg === 'string' && !isNaN(arg) ? Number(arg) : arg);
      const oscMessage = new OSC.Message(data.address, ...args); // Spread the args array
      oscClient.send(oscMessage);
      console.log('Sent OSC message:', oscMessage);
    } catch (error) {
      console.error('Error processing message:', error);
    }
  });
});

const PORT = 7700;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  oscClient.open();
});