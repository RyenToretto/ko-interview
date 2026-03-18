<template>
  <QAQuestion
    title="懒加载与虚拟滚动"
    :questions="questions"
  >
    <template #description>
      <p>本题考察图片懒加载、路由懒加载和长列表虚拟滚动的原理与实现思路。</p>
    </template>
  </QAQuestion>
</template>

<script setup lang="ts">
import QAQuestion from '@/components/QAQuestion.vue'

const questions = [
  {
    q: '图片懒加载的原理是什么？如何用 IntersectionObserver 实现？',
    a: `
      <p><strong>原理：</strong>图片进入视口时才加载，减少首屏请求数和带宽。</p>
      <p><strong>IntersectionObserver 实现：</strong></p>
      <pre>const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target
      img.src = img.dataset.src || img.src
      observer.unobserve(img)
    }
  })
})

document.querySelectorAll('img[data-src]').forEach(img => observer.observe(img))</pre>
      <p>相比 scroll 监听，IntersectionObserver 性能更好、无需节流、自动处理视口变化。</p>
    `,
  },
  {
    q: '路由懒加载如何实现？',
    a: `
      <p>使用 <strong>动态 import</strong>，将路由组件拆成独立 chunk，访问时再加载：</p>
      <pre>// Vue Router
{
  path: '/user',
  component: () => import('@/views/User.vue')
}

// 或带 webpack magic comment 命名 chunk
component: () => import(/* webpackChunkName: "user" */ '@/views/User.vue')</pre>
      <p>首屏只加载当前路由所需代码，其他路由按需加载，减小首屏 bundle 体积。</p>
    `,
  },
  {
    q: '长列表虚拟滚动的原理和实现思路是什么？',
    a: `
      <p><strong>原理：</strong>只渲染可视区域内的 DOM，通过占位撑开滚动高度，滚动时动态替换内容。</p>
      <p><strong>实现思路：</strong></p>
      <ol>
        <li><strong>计算可视区域：</strong>根据 scrollTop、容器高度、每项高度，算出当前应渲染的起止索引</li>
        <li><strong>渲染窗口：</strong>只渲染 [startIndex, endIndex] 范围内的项</li>
        <li><strong>占位：</strong>用 padding-top / padding-bottom 或空 div 撑开总高度，保证滚动条正确</li>
        <li><strong>缓冲：</strong>上下各多渲染几项，避免快速滚动时白屏</li>
      </ol>
      <pre>// 核心公式
const startIndex = Math.floor(scrollTop / itemHeight)
const endIndex = Math.min(startIndex + visibleCount + buffer, totalCount)
const offsetY = startIndex * itemHeight</pre>
    `,
  },
]
</script>
