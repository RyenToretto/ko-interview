<template>
  <QAQuestion
    title="前端安全 XSS/CSRF"
    :questions="questions"
  >
    <template #description>
      <p>本题考察 XSS、CSRF 等前端安全问题的原理与防御，以及点击劫持、SQL 注入等。</p>
    </template>
  </QAQuestion>
</template>

<script setup lang="ts">
import QAQuestion from '@/components/QAQuestion.vue'

const questions = [
  {
    q: 'XSS 攻击有哪些类型？如何防御？',
    a: `
      <p><strong>类型：</strong></p>
      <ul>
        <li><strong>存储型：</strong>恶意脚本存入数据库，每次渲染页面时执行（如评论、昵称）</li>
        <li><strong>反射型：</strong>恶意脚本通过 URL 参数传入，服务端反射回页面执行</li>
        <li><strong>DOM 型：</strong>纯前端，通过修改 DOM 执行恶意脚本，不经过服务端</li>
      </ul>
      <p><strong>防御：</strong></p>
      <ul>
        <li>对用户输入进行转义（HTML 实体编码）</li>
        <li>使用 CSP（Content-Security-Policy）限制脚本来源</li>
        <li>HttpOnly Cookie 防止脚本读取敏感 Cookie</li>
        <li>避免使用 innerHTML，使用 textContent 或安全库</li>
      </ul>
    `,
  },
  {
    q: 'CSRF 攻击原理是什么？如何防御？',
    a: `
      <p><strong>原理：</strong>攻击者诱导用户在已登录的站点上发起跨站请求，利用浏览器的 Cookie 自动携带，以用户身份执行操作。</p>
      <p><strong>防御：</strong></p>
      <ul>
        <li><strong>Token：</strong>请求中携带服务端下发的 CSRF Token，攻击者无法获取</li>
        <li><strong>SameSite Cookie：</strong>设置 SameSite=Strict 或 Lax，限制跨站请求携带 Cookie</li>
        <li><strong>Referer 校验：</strong>服务端校验 Referer 是否来自合法域名</li>
        <li><strong>双重 Cookie：</strong>Cookie 与请求体/头中的值双重校验</li>
      </ul>
    `,
  },
  {
    q: '点击劫持和 SQL 注入分别是什么？如何防御？',
    a: `
      <p><strong>点击劫持：</strong>用透明 iframe 覆盖在诱饵页面上，用户以为点击的是诱饵，实际点击的是隐藏的敏感操作（如关注、转账）。</p>
      <p>防御：X-Frame-Options: DENY 或 SAMEORIGIN；CSP 的 frame-ancestors</p>
      <p><strong>SQL 注入：</strong>在输入中注入 SQL 片段，改变查询逻辑。属于服务端问题，前端可做输入校验、参数化查询由后端实现。</p>
    `,
  },
]
</script>
