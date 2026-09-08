<h2 id="work-experience">Work Experience</h2>
<div class="entry-list">
{% for item in site.data.experience.main %}
  <div class="entry-item">
    <div class="entry-title">{{ item.title }}</div>
    <div class="entry-meta">{{ item.meta }}</div>
    <div class="entry-sub">{{ item.sub }}</div>
  </div>
{% endfor %}
</div>
