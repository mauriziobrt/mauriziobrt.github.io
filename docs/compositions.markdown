---
layout: page
title: works
permalink: /compositions/
---


<h1>Compositions</h1>

|Year |Title  |Work Description  | Media |
|---|---|---|---|
{% for my_post in site.categories.compositions -%}
{% if my_post.title -%}
| {{ my_post.date | date: "%Y" }} |{{ my_post.title }}  |[Click Here]({{ my_post.url }})  |
{% endif %}
{%- endfor -%}

