---
title: Computer-Assisted Composition
project: Software Development
year: 2023
tags:
  - Max-msp
  - Bach
img: /Computer-Assisted Composition - Workspace.png
subtitle: Workspace
---
As a research assistant at Lund University for Fernando Garnero. I developed a Workspace for Computer Assisted Composition using Max MSP, Bach and Orchidea.

The interface consists of 4 main blocks:
- Partial Tracking
- Score
- Quantization
- Auto Orchestration

The Partial Tracking allows for the automatic transcription of audio files into proportional notation.

The Roll allows to write music in proportional notation while also applying samples to the notes and controlling playback parameters. The roll results can be exported to Reaper. If provided a Dataset (like Orchidea) there’s also a script that auto-applies the correct note (with consideration of microtonality) to each instrument. If used with Reaper the roll playback is synced with it.

The Quantization part allows the user to take the Roll results and export it to a quantized Score.

The Auto Orchestration part uses Orchidea for the automatic orchestration of any given sound, when provided a Dataset.

Practical example of its usage can be seen in Fernando's PhD thesis: [Mutations in the Composable: Compositional Practice as a Space of Experimentation, Tension, and Uncertainty - Lund University](https://portal.research.lu.se/en/publications/mutations-in-the-composable-compositional-practice-as-a-space-of-/)
