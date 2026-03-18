<template>
  <QAQuestion
    title="首屏加载优化"
    :questions="questions"
  >
    <template #description>
      <p>本题考察对首屏加载性能优化的理解，包括常见原因、优化手段和关键渲染路径。</p>
    </template>
  </QAQuestion>
</template>

<script setup lang="ts">
import QAQuestion from '@/components/QAQuestion.vue'

const questions = [
  {
    q: '首屏加载慢的常见原因有哪些？',
    a: `
      <p><strong>常见原因：</strong></p>
      <ul>
        <li><strong>资源体积大：</strong>JS/CSS 未压缩、未做 Tree Shaking、图片未优化</li>
        <li><strong>请求过多：</strong>未合并资源、未使用 CDN、未做 HTTP/2 多路复用</li>
        <li><strong>阻塞渲染：</strong>同步脚本阻塞 DOM 解析、CSS 阻塞首屏渲染</li>
        <li><strong>网络延迟：</strong>DNS 解析慢、TCP 连接慢、服务器响应慢</li>
        <li><strong>首屏依赖过重：</strong>首屏加载了非必要代码、未做代码分割</li>
      </ul>
    `,
  },
  {
    q: '首屏加载有哪些优化手段？',
    a: `
      <p><strong>主要优化手段：</strong></p>
      <ul>
        <li><strong>代码分割/懒加载：</strong>路由懒加载、组件懒加载、按需加载第三方库</li>
        <li><strong>CDN：</strong>静态资源走 CDN，减少源站压力、就近访问</li>
        <li><strong>SSR/预渲染：</strong>服务端渲染或预渲染，首屏直接返回 HTML</li>
        <li><strong>预加载：</strong>link rel="preload" 预加载关键资源、prefetch 预取后续资源</li>
        <li><strong>骨架屏：</strong>首屏展示骨架占位，提升感知速度</li>
        <li><strong>图片优化：</strong>WebP、懒加载、响应式图片、雪碧图、压缩</li>
        <li><strong>缓存：</strong>强缓存、协商缓存、Service Worker</li>
      </ul>
    `,
  },
  {
    q: '什么是关键渲染路径（Critical Rendering Path）？如何优化？',
    a: `
      <p><strong>关键渲染路径</strong>是浏览器将 HTML、CSS、JS 转换为屏幕像素的过程：</p>
      <ol>
        <li>DOM 构建（解析 HTML）</li>
        <li>CSSOM 构建（解析 CSS）</li>
        <li>渲染树（DOM + CSSOM）</li>
        <li>布局（Layout）</li>
        <li>绘制（Paint）</li>
        <li>合成（Composite）</li>
      </ol>
      <p><strong>优化思路：</strong></p>
      <pre>// 1. 关键 CSS 内联，非关键 CSS 异步加载
&lt;link rel="preload" href="critical.css" as="style"&gt;

// 2. JS 异步/延迟，避免阻塞 DOM 解析
&lt;script defer src="app.js"&gt;&lt;/script&gt;

// 3. 减少关键资源数量与体积
// 4. 缩短关键路径长度（减少依赖层级）</pre>
    `,
  },
]
</script>
