<h2 id="news">News</h2>
<div class="news-list">
{% for item in site.data.news.main %}
  <div class="news-item">
    <span class="news-date">{{ item.date }}</span>
    <span class="news-desc">{{ item.text }}</span>
  </div>
{% endfor %}
</div>
