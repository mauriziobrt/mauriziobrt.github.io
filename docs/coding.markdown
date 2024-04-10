---
layout: page
title: coding
permalink: /coding/
---


![My image Name](display.png)


|Year |Title  | Software |
|---|---|
{% for my_post in site.categories.coding -%}
{% if my_post.title -%}
| {{ my_post.date | date: "%Y" }} |[{{ my_post.title }}]({{ my_post.url }})  | {{ my_post.software }} |
{% endif %}
{%- endfor -%}
|2023-2024| Training and classification notebooks | Python, PyTorch, Huggingface |
|2023| Computer Assisted Partial Tracking | Max Msp, Bach |
|2023| Probabilistic Concatenative Synthesizer | Supercollider, Flucoma |
|2023| Tagging and analysis of Sound Objects | Max Msp, Javascript |
|2023| Linking Reaper and Logic playback with Bach | Reaper, Logic Pro, Bach, Max Msp |
|2023| Microtonal Augmentation of Orchidea Dataset| Python |
|2023| Automatic String Harmonic object | Bach, Max Msp |
|2022| Texturklang | Bach, Max Msp |
|2021| Rhythm Acceleration | Bach, Max Msp |
|2021| DDSP~ | C++, PyTorch, Max Msp |






