<template>
  <QAQuestion title="meta 标签、src 与 href" :questions="questions">
    <template #description>
      <p>本题考察 HTML 中 meta 标签的作用以及 src 和 href 属性的区别。</p>
    </template>
  </QAQuestion>
</template>

<script setup lang="ts">
import QAQuestion from '@/components/QAQuestion.vue'

const questions = [
  {
    q: 'meta 标签的作用是什么？常见的 meta 标签有哪些？',
    a: `
      <p><code>&lt;meta&gt;</code> 提供<strong>文档元信息</strong>，不会直接显示在页面上，但对浏览器、搜索引擎、社交平台有重要影响。</p>
      <p><strong>常见 meta 标签：</strong></p>
      <pre>&lt;!-- 字符编码 --&gt;
&lt;meta charset="UTF-8"&gt;

&lt;!-- 视口（移动端适配必备）--&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;

&lt;!-- SEO 描述 --&gt;
&lt;meta name="description" content="网站描述"&gt;
&lt;meta name="keywords" content="关键词1,关键词2"&gt;

&lt;!-- 搜索引擎行为 --&gt;
&lt;meta name="robots" content="index,follow"&gt;

&lt;!-- HTTP 等价（缓存/跳转）--&gt;
&lt;meta http-equiv="Cache-Control" content="no-cache"&gt;
&lt;meta http-equiv="refresh" content="5;url=https://example.com"&gt;

&lt;!-- 社交平台（Open Graph）--&gt;
&lt;meta property="og:title" content="标题"&gt;
&lt;meta property="og:image" content="封面图URL"&gt;</pre>
    `,
  },
  {
    q: 'src 和 href 有什么区别？',
    a: `
      <table border="1" cellpadding="6" style="border-collapse: collapse; width: 100%">
        <tr><th>对比项</th><th>src</th><th>href</th></tr>
        <tr><td>含义</td><td>source（资源嵌入）</td><td>hypertext reference（超链接引用）</td></tr>
        <tr><td>作用</td><td>将外部资源<strong>嵌入</strong>到当前文档</td><td>建立当前文档与外部资源的<strong>关联</strong></td></tr>
        <tr><td>阻塞</td><td>会暂停 HTML 解析（如 script src）</td><td>不阻塞解析（如 link href 并行加载）</td></tr>
        <tr><td>替换</td><td>替换标签所在位置的内容</td><td>不替换，只建立引用关系</td></tr>
        <tr><td>典型标签</td><td><code>&lt;script src&gt;</code> <code>&lt;img src&gt;</code> <code>&lt;iframe src&gt;</code></td><td><code>&lt;link href&gt;</code> <code>&lt;a href&gt;</code></td></tr>
      </table>
      <p><strong>关键区别</strong>：<code>&lt;script src&gt;</code> 会阻塞 DOM 解析（除非加 async/defer），而 <code>&lt;link href&gt;</code> 加载 CSS 时 DOM 解析不暂停。</p>
    `,
  },
  {
    q: 'script 标签的 async 和 defer 有什么区别？',
    a: `
      <table border="1" cellpadding="6" style="border-collapse: collapse; width: 100%">
        <tr><th>属性</th><th>加载</th><th>执行时机</th><th>执行顺序</th></tr>
        <tr><td>无</td><td>阻塞 DOM 解析</td><td>立即执行</td><td>按顺序</td></tr>
        <tr><td>async</td><td>异步加载（不阻塞）</td><td>加载完<strong>立即</strong>执行</td><td>不保证顺序</td></tr>
        <tr><td>defer</td><td>异步加载（不阻塞）</td><td>DOM 解析完后、DOMContentLoaded 前</td><td>按顺序</td></tr>
      </table>
      <p><strong>推荐</strong>：业务脚本用 <code>defer</code>（保证顺序），独立脚本（如统计）用 <code>async</code>。</p>
    `,
  },
]
</script>
