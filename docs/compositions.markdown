---
layout: page
title: works
permalink: /works/
---







<h1 align="center">Compositions</h1>

|Year |Title  | Formation |
|---|---| ---|---|
{% for my_post in site.categories.compositions -%}
{% if my_post.title -%}
| {{ my_post.date | date: "%Y" }} |[{{ my_post.title }}]({{ my_post.url }}) | {{ my_post.formation }}  |
{% endif %}
{%- endfor -%}|

<h1 align="center">Multimedia</h1>

|Year |Title  |Work Description  | Media |
|---|---| ---|---|
{% for my_post in site.categories.multimedia -%}
{% if my_post.title -%}
| {{ my_post.date | date: "%Y" }} |[{{ my_post.title }}]({{ my_post.url }}) | {{ my_post.work }} | {{ my_post.media }}  |
{% endif %}
{%- endfor -%}|



