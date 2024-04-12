---
layout: page
title: teaching
permalink: /teaching/
---


<h1 align="center">MLA - Machine Learning For Artists - Course</h1>

|Year |Title  |
|---|---| ---|---|
{% for my_post in site.categories.mla -%}
{% if my_post.title -%}
| {{ my_post.date | date: "%Y" }} |[{{ my_post.title }}]({{ my_post.url }}) | 
{% endif %}
{%- endfor -%}
|

<h1 align="center">Analyses</h1>


|Year |Title  |
|---|---| ---|---|
{% for my_post in site.categories.analysis -%}
{% if my_post.title -%}
| {{ my_post.date | date: "%Y" }} |[{{ my_post.title }}]({{ my_post.url }}) | 
{% endif %}
{%- endfor -%}
|

<h1 align="center">Max Tutoring</h1>
Excerpts from my tutoring experience in the Conservatory G.Verdi of Turin.

|Year |Title  |
|---|---| ---|---|
{% for my_post in site.categories.teaching -%}
{% if my_post.title -%}
| {{ my_post.date | date: "%Y" }} |[{{ my_post.title }}]({{ my_post.url }}) | 
{% endif %}
{%- endfor -%}
|

<h1 align="center">Computational Creativity - (coming up)</h1>


|Year |Title  |
|---|---| ---|---|
{% for my_post in site.categories.computational_creativity -%}
{% if my_post.title -%}
| {{ my_post.date | date: "%Y" }} |[{{ my_post.title }}]({{ my_post.url }}) | 
{% endif %}
{%- endfor -%}
|