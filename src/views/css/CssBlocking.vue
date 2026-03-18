<template>
  <QAQuestion
    title="CSS 会阻塞渲染吗"
    :questions="questions"
  >
    <template #description>
      <p>本题考察对浏览器渲染流程中 CSS 加载与解析行为的理解。</p>
    </template>
  </QAQuestion>
</template>

<script setup lang="ts">
import QAQuestion from '@/components/QAQuestion.vue'

const questions = [
  {
    q: 'CSS 加载会阻塞 DOM 解析吗？会阻塞页面渲染吗？',
    a: `
      <p><strong>CSS 不会阻塞 DOM 解析，但会阻塞页面渲染。</strong></p>
      <ul>
        <li>DOM 解析和 CSSOM 构建是<strong>并行</strong>的，CSS 不阻塞 HTML 解析器</li>
        <li>但浏览器需要 CSSOM 完成后才能构建渲染树（Render Tree），所以<strong>CSS 阻塞渲染</strong></li>
        <li>这就是为什么 CSS 要放在 <code>&lt;head&gt;</code> 中 — 尽早加载，减少白屏时间</li>
      </ul>
    `,
  },
  {
    q: 'CSS 会阻塞 JS 执行吗？',
    a: `
      <p><strong>会。</strong>如果 CSS 在 JS 之前加载，JS 执行会等待 CSS 加载完成。</p>
      <p><strong>原因</strong>：JS 可能需要访问样式信息（如 <code>getComputedStyle</code>），浏览器必须确保 CSSOM 已就绪。</p>
      <p><strong>执行顺序</strong>：</p>
      <pre>1. HTML 解析遇到 &lt;link rel="stylesheet"&gt; → 开始加载 CSS（不阻塞 DOM 解析）
2. HTML 解析遇到 &lt;script&gt; → 暂停 DOM 解析
3. 等待 CSS 加载完成（如果有未完成的 CSS）
4. 执行 JS
5. 继续 DOM 解析</pre>
    `,
  },
  {
    q: '浏览器的渲染流程是怎样的？',
    a: `
      <ol>
        <li><strong>构建 DOM 树</strong>：解析 HTML → DOM Tree</li>
        <li><strong>构建 CSSOM 树</strong>：解析 CSS → CSSOM Tree</li>
        <li><strong>合并渲染树</strong>：DOM + CSSOM → Render Tree（不包含 display:none 的节点）</li>
        <li><strong>布局（Layout/Reflow）</strong>：计算每个节点的位置和大小</li>
        <li><strong>绘制（Paint）</strong>：将节点绘制到屏幕上</li>
        <li><strong>合成（Composite）</strong>：GPU 合成各层（transform/opacity 在此阶段处理）</li>
      </ol>
    `,
  },
  {
    q: '如何优化 CSS 加载性能？',
    a: `
      <ul>
        <li><strong>CSS 放 head</strong>：尽早加载，避免 FOUC（无样式内容闪烁）</li>
        <li><strong>内联关键 CSS</strong>：首屏关键样式内联到 HTML，减少请求</li>
        <li><strong>异步加载非关键 CSS</strong>：<code>media="print" onload="this.media='all'"</code></li>
        <li><strong>压缩合并</strong>：减小文件体积和请求数</li>
        <li><strong>使用 CDN</strong>：加速 CSS 文件传输</li>
        <li><strong>避免 @import</strong>：<code>@import</code> 会导致串行加载，用 <code>&lt;link&gt;</code> 替代</li>
      </ul>
    `,
  },
]
</script>
