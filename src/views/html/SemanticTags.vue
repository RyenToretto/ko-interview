<template>
  <QAQuestion title="语义化标签与 HTML5 新特性" :questions="questions">
    <template #description>
      <p>本题考察对 HTML 语义化的理解以及 HTML5 新增特性。</p>
    </template>
  </QAQuestion>
</template>

<script setup lang="ts">
import QAQuestion from '@/components/QAQuestion.vue'

const questions = [
  {
    q: '什么是语义化标签？常见的语义化标签有哪些？',
    a: `
      <p><strong>语义化标签</strong>：用标签名本身表达内容的含义，而不是只用 div/span。</p>
      <p><strong>常见语义化标签：</strong></p>
      <table border="1" cellpadding="6" style="border-collapse: collapse; width: 100%">
        <tr><th>标签</th><th>含义</th></tr>
        <tr><td><code>&lt;header&gt;</code></td><td>页头 / 区块头部</td></tr>
        <tr><td><code>&lt;nav&gt;</code></td><td>导航区域</td></tr>
        <tr><td><code>&lt;main&gt;</code></td><td>页面主体内容（唯一）</td></tr>
        <tr><td><code>&lt;article&gt;</code></td><td>独立文章 / 内容块</td></tr>
        <tr><td><code>&lt;section&gt;</code></td><td>主题性分区</td></tr>
        <tr><td><code>&lt;aside&gt;</code></td><td>侧边栏 / 辅助信息</td></tr>
        <tr><td><code>&lt;footer&gt;</code></td><td>页脚 / 区块底部</td></tr>
        <tr><td><code>&lt;figure&gt; / &lt;figcaption&gt;</code></td><td>图表及其说明</td></tr>
        <tr><td><code>&lt;time&gt;</code></td><td>时间 / 日期</td></tr>
        <tr><td><code>&lt;mark&gt;</code></td><td>高亮文本</td></tr>
      </table>
    `,
  },
  {
    q: '为什么要使用语义化标签？有什么好处？',
    a: `
      <ul>
        <li><strong>可访问性（a11y）</strong>：屏幕阅读器能准确识别页面结构，帮助视障用户导航</li>
        <li><strong>SEO 友好</strong>：搜索引擎能更好地理解页面内容层级和主题</li>
        <li><strong>代码可读性</strong>：开发者一看标签就知道区域用途，比满屏 div 清晰</li>
        <li><strong>样式挂载</strong>：语义标签可作为 CSS 选择器，减少 class 使用</li>
        <li><strong>规范协作</strong>：团队成员对页面结构有统一认知</li>
      </ul>
    `,
  },
  {
    q: 'HTML5 新增了哪些重要特性？',
    a: `
      <p><strong>语义标签</strong>：header / nav / main / article / section / aside / footer</p>
      <p><strong>多媒体</strong>：&lt;audio&gt; / &lt;video&gt;（无需 Flash）</p>
      <p><strong>图形</strong>：&lt;canvas&gt;（2D 绘图）/ &lt;svg&gt;（矢量图）</p>
      <p><strong>表单增强</strong>：date / email / range / color / placeholder / required / pattern</p>
      <p><strong>存储</strong>：localStorage / sessionStorage / IndexedDB</p>
      <p><strong>通信</strong>：WebSocket / Server-Sent Events</p>
      <p><strong>多线程</strong>：Web Worker</p>
      <p><strong>离线</strong>：Service Worker / Cache API（取代 AppCache）</p>
      <p><strong>地理</strong>：Geolocation API</p>
      <p><strong>拖放</strong>：Drag and Drop API</p>
    `,
  },
]
</script>
