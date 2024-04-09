---
layout: page
title: teaching
permalink: /teaching/
---

{% for post in site.categories.teaching %}
<li>
                <a href="{{ post.url }}">{{ post.title }}: {{ post.date | date: "%b %d, %Y" }}</a>
</li>
{% endfor %}

