---
layout: page
title: multimedia
permalink: /multimedia/
---







|Year |Title  |Work Description  | Media |
|---|---| ---|---|
{% for my_post in site.categories.multimedia -%}
{% if my_post.title -%}
| {{ my_post.date | date: "%Y" }} |[{{ my_post.title }}]({{ my_post.url }}) | {{ my_post.work }} | {{ my_post.media }}  |
{% endif %}
{%- endfor -%}

| 2023   | Rifrazioni        | Recording, Composition, Sound Design | SoundWalk |
| 2023      | Torino (1961; 8mm) | Composition, Sound Design (with Simone Gottardi e Marco Marasciuolo) | Short Film|
| 2022      | Muta | Composition, Sound Design | Theater|
| 2022   | Walk into the border   | Recording, Composition, Sound Design | SoundWalk |
| 2022   | 25 Aprile         | Recording, Composition, Sound Design | SoundWalk |
| 2021      | Eidos | Composition, Sound Design | Theater|
| 2021      | InLuogo | Composition, Sound Design, Cello Live Performance | Installation, Performance|
| 2019   | La Bora Sufia        | Recording, Composition, Sound Design | SoundWalk |