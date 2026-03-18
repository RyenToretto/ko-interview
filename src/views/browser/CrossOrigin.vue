<template>
  <QAQuestion
    title="跨域与同源策略"
    :questions="questions"
  >
    <template #description>
      <p>本题考察同源策略、跨域解决方案以及 CORS 的简单请求与预检请求。</p>
    </template>
  </QAQuestion>
</template>

<script setup lang="ts">
import QAQuestion from '@/components/QAQuestion.vue'

const questions = [
  {
    q: '什么是同源策略？同源的条件是什么？',
    a: `
      <p><strong>同源策略</strong>是浏览器的安全机制，限制一个源的文档或脚本如何与另一个源的资源交互。</p>
      <p><strong>同源条件：</strong>协议、域名、端口三者完全相同。</p>
      <pre>https://a.com:443/page  vs  https://a.com:443/api  → 同源
https://a.com        vs  http://a.com              → 不同源（协议不同）
https://a.com        vs  https://b.com             → 不同源（域名不同）
https://a.com:443    vs  https://a.com:8080        → 不同源（端口不同）</pre>
    `,
  },
  {
    q: '跨域有哪些解决方案？',
    a: `
      <ul>
        <li><strong>CORS：</strong>服务端设置 Access-Control-Allow-Origin 等响应头，允许跨域请求</li>
        <li><strong>JSONP：</strong>利用 script 标签无跨域限制，通过回调函数获取数据（仅 GET，已较少使用）</li>
        <li><strong>代理：</strong>同源服务器转发请求到目标服务器，前端只请求同源代理</li>
        <li><strong>postMessage：</strong>跨窗口通信，用于 iframe、worker 等</li>
        <li><strong>WebSocket：</strong>不受同源策略限制（但服务端需支持）</li>
      </ul>
    `,
  },
  {
    q: 'CORS 简单请求和预检请求有什么区别？',
    a: `
      <p><strong>简单请求：</strong>满足以下条件时，浏览器直接发送请求，不先发 OPTIONS：</p>
      <ul>
        <li>方法为 GET、HEAD、POST 之一</li>
        <li>请求头仅包含 Accept、Accept-Language、Content-Language、Content-Type（且值为 application/x-www-form-urlencoded、multipart/form-data、text/plain 之一）</li>
      </ul>
      <p><strong>预检请求（Preflight）：</strong>不满足简单请求时，浏览器先发 OPTIONS 请求，服务器返回允许的 origins、methods、headers 后，再发实际请求。</p>
      <pre>// 会触发预检：自定义头、Content-Type: application/json、PUT/DELETE 等
fetch('https://api.example.com/data', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ foo: 1 })
})</pre>
    `,
  },
]
</script>
