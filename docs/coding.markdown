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







