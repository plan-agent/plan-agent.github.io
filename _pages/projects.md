---
layout: page
title: Project
permalink: /projects/
description: A growing collection of your cool projects.
nav: true
nav_order: 3
display_categories: [work, fun]
horizontal: false
---

{% assign second_batch_projects = site.data.second_batch_projects %}

## 第二期项目

<div class="second-batch-projects mb-5">
  {% for project in second_batch_projects %}
    <div class="card mb-4">
      <div class="card-body">
        <h3 class="card-title">{{ project.title }}</h3>
        <p class="card-text">{{ project.description }}</p>
        <p class="card-text mb-0">
          <strong>学生：</strong>
          {% for student in project.students %}
            <a href="{{ '/projects/second-batch/students/' | relative_url }}#{{ student.slug }}">{{ student.name }}</a>
            {%- unless forloop.last -%}、{%- endunless -%}
          {% endfor %}
        </p>
      </div>
    </div>
  {% endfor %}
</div>

---

## 第一期项目

<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
