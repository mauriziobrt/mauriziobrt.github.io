---
layout: page
title: teaching
permalink: /teaching/
---


<h1>MLA - Machine Learning For Artists - Course</h1>

|Year |Title  |Work Description  | Media |
|---|---| ---|---|
{% for my_post in site.categories.mla -%}
{% if my_post.title -%}
| {{ my_post.date | date: "%Y" }} |[{{ my_post.title }}]({{ my_post.url }}) | {{ my_post.work }} | {{ my_post.media }}  |
{% endif %}
{%- endfor -%}

