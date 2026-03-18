<template>
  <QAQuestion
    title="浏览器渲染流程"
    :questions="questions"
  >
    <template #description>
      <p>本题考察从输入 URL 到页面展示的完整过程，以及 DOM 树、渲染树、重排重绘等概念。</p>
    </template>
  </QAQuestion>
</template>

<script setup lang="ts">
import QAQuestion from '@/components/QAQuestion.vue'

const questions = [
  {
    q: '从输入 URL 到页面展示的完整过程是什么？',
    a: `
      <ol>
        <li><strong>DNS 解析：</strong>将域名解析为 IP 地址</li>
        <li><strong>建立 TCP 连接：</strong>三次握手</li>
        <li><strong>发送 HTTP 请求：</strong>请求行、请求头、请求体</li>
        <li><strong>服务器处理并返回响应</strong></li>
        <li><strong>浏览器解析：</strong>解析 HTML 构建 DOM 树，解析 CSS 构建 CSSOM 树</li>
        <li><strong>生成渲染树：</strong>DOM + CSSOM，排除 display:none 等不可见元素</li>
        <li><strong>布局（Layout）：</strong>计算元素的位置和大小</li>
        <li><strong>绘制（Paint）：</strong>将渲染树绘制成位图</li>
        <li><strong>合成（Composite）：</strong>将图层合成到屏幕</li>
      </ol>
    `,
  },
  {
    q: '请简述 DOM 树 → CSSOM → 渲染树 → 布局 → 绘制 → 合成的流程。',
    a: `
      <ul>
        <li><strong>DOM 树：</strong>解析 HTML，生成节点树，表示文档结构</li>
        <li><strong>CSSOM：</strong>解析 CSS，生成样式规则树，表示样式信息</li>
        <li><strong>渲染树：</strong>合并 DOM 和 CSSOM，只包含可见节点（排除 display:none、head 等）</li>
        <li><strong>布局：</strong>根据盒模型计算每个节点的几何信息（位置、尺寸）</li>
        <li><strong>绘制：</strong>将每个节点绘制成位图，涉及颜色、边框、阴影等</li>
        <li><strong>合成：</strong>将多个图层合成到最终画面，GPU 加速</li>
      </ul>
    `,
  },
  {
    q: '什么是重排（Reflow）和重绘（Repaint）？分别有哪些触发条件？',
    a: `
      <p><strong>重排（Reflow）：</strong>布局变化，需重新计算几何信息。成本高。</p>
      <p><strong>触发条件：</strong>添加/删除 DOM、元素尺寸/位置变化、窗口 resize、字体变化、获取 offsetTop/scrollTop 等布局信息</p>
      <p><strong>重绘（Repaint）：</strong>外观变化，不需重新布局，只需重新绘制。成本相对较低。</p>
      <p><strong>触发条件：</strong>颜色、背景、visibility、outline 等不影响布局的样式变化</p>
      <p><strong>优化：</strong>使用 transform、opacity 做动画（只触发合成，不触发重排重绘）；批量修改 DOM；避免逐项读取布局属性</p>
    `,
  },
]
</script>
