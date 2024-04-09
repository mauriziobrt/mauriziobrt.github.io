---
layout: page
title: teaching
permalink: /teaching/
---


<h1 align="center">MLA - Machine Learning For Artists - Course</h1>

|Year |Title  |Work Description  | Media |
|---|---| ---|---|
{% for my_post in site.categories.mla -%}
{% if my_post.title -%}
| {{ my_post.date | date: "%Y" }} |[{{ my_post.title }}]({{ my_post.url }}) | {{ my_post.work }} | {{ my_post.media }}  |
{% endif %}
{%- endfor -%}
|

<h1 align="center">Analyses</h1>


|Year |Title  |Work Description  | Media |
|---|---| ---|---|
{% for my_post in site.categories.analysis -%}
{% if my_post.title -%}
| {{ my_post.date | date: "%Y" }} |[{{ my_post.title }}]({{ my_post.url }}) | {{ my_post.work }} | {{ my_post.media }}  |
{% endif %}
{%- endfor -%}
|

<h1 align="center">Max Tutoring</h1>

|Year |Title  |Work Description  | Media |
|---|---| ---|---|
{% for my_post in site.categories.analysis -%}
{% if my_post.title -%}
| {{ my_post.date | date: "%Y" }} |[{{ my_post.title }}]({{ my_post.url }}) | {{ my_post.work }} | {{ my_post.media }}  |
{% endif %}
{%- endfor -%}
|
