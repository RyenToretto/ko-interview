<template>
  <QAQuestion
    title="缓存策略"
    :questions="questions"
  >
    <template #description>
      <p>本题考察浏览器缓存、前端存储和 Service Worker 缓存策略。</p>
    </template>
  </QAQuestion>
</template>

<script setup lang="ts">
import QAQuestion from '@/components/QAQuestion.vue'

const questions = [
  {
    q: '浏览器缓存分为哪几类？强缓存和协商缓存的区别是什么？',
    a: `
      <p><strong>强缓存：</strong>不发请求，直接使用本地缓存。由 Expires 或 Cache-Control 控制。</p>
      <pre>Cache-Control: max-age=31536000  // 1 年内直接使用缓存
Expires: Wed, 21 Oct 2026 07:28:00 GMT  // 绝对时间，优先级低于 Cache-Control</pre>
      <p><strong>协商缓存：</strong>发请求，服务器判断是否用缓存。由 ETag/If-None-Match 或 Last-Modified/If-Modified-Since 控制。</p>
      <pre>// 响应头
ETag: "33a64df5"
Last-Modified: Wed, 21 Oct 2015 07:28:00 GMT

// 再次请求时带上
If-None-Match: "33a64df5"
If-Modified-Since: Wed, 21 Oct 2015 07:28:00 GMT
// 若未修改，返回 304，使用本地缓存</pre>
    `,
  },
  {
    q: 'localStorage、sessionStorage、IndexedDB、Cookie 有什么区别？',
    a: `
      <table border="1" cellpadding="8" style="border-collapse: collapse;">
        <tr><th>存储</th><th>容量</th><th>生命周期</th><th>同源</th><th>典型用途</th></tr>
        <tr><td>localStorage</td><td>约 5MB</td><td>持久，除非手动清除</td><td>同源</td><td>用户偏好、离线数据</td></tr>
        <tr><td>sessionStorage</td><td>约 5MB</td><td>标签页关闭即清除</td><td>同源</td><td>单页临时状态</td></tr>
        <tr><td>IndexedDB</td><td>通常 &gt;50MB</td><td>持久</td><td>同源</td><td>大量结构化数据、离线应用</td></tr>
        <tr><td>Cookie</td><td>约 4KB</td><td>可设过期时间</td><td>同源（可设 domain）</td><td>会话标识、Token</td></tr>
      </table>
      <p>Cookie 会随请求自动携带，其他需手动读写。IndexedDB 是异步 API，支持索引和事务。</p>
    `,
  },
  {
    q: 'Service Worker 缓存策略有哪些？',
    a: `
      <p><strong>常见策略：</strong></p>
      <ul>
        <li><strong>Cache First：</strong>先查缓存，有则返回，无则请求并缓存。适合静态资源</li>
        <li><strong>Network First：</strong>先请求网络，失败再用缓存。适合需要实时性的接口</li>
        <li><strong>Stale-While-Revalidate：</strong>先返回缓存（若有），同时后台请求更新缓存。平衡速度与新鲜度</li>
        <li><strong>Network Only：</strong>只用网络，不缓存。适合敏感数据</li>
        <li><strong>Cache Only：</strong>只用缓存，不请求。适合完全离线场景</li>
      </ul>
      <pre>// 示例：Cache First
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  )
})</pre>
    `,
  },
]
</script>
