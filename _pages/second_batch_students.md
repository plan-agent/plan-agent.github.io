---
layout: page
title: 第二期学生信息
permalink: /projects/second-batch/students/
description: 第二届 Agent+OPC 双创营学生信息
nav: false
---

{% assign second_batch_projects = site.data.second_batch_projects %}

本页汇总第二届 Agent+OPC 双创营各项目学生信息，可从 [Project 页面]({{ '/projects/' | relative_url }}) 的学生姓名直接跳转到对应条目。

{% for project in second_batch_projects %}

## {{ project.title }}

{% for student in project.students %}

<div id="{{ student.slug }}" class="card mb-3">
  <div class="card-body">
    <h3 class="card-title">{{ student.name }}</h3>
    <p class="card-text"><strong>所属项目：</strong>{{ project.title }}</p>
    {% if student.bio and student.bio != '' %}
      <p class="card-text">{{ student.bio | newline_to_br }}</p>
    {% else %}
      <p class="card-text text-muted">暂无详细信息。</p>
    {% endif %}
    <p class="card-text"><a href="{{ '/projects/' | relative_url }}">返回 Project 页面</a></p>
  </div>
</div>

{% endfor %}

{% endfor %}
