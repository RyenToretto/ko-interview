<template>
  <QAQuestion
    title="移动端适配"
    :questions="questions"
  >
    <template #description>
      <p>本题考察移动端适配的核心方案和常见问题。</p>
    </template>
  </QAQuestion>
</template>

<script setup lang="ts">
import QAQuestion from '@/components/QAQuestion.vue'

const questions = [
  {
    q: 'viewport meta 标签的作用是什么？各属性含义？',
    a: `
      <pre>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"&gt;</pre>
      <ul>
        <li><code>width=device-width</code>：视口宽度等于设备宽度</li>
        <li><code>initial-scale=1.0</code>：初始缩放比例 1:1</li>
        <li><code>maximum-scale=1.0</code>：最大缩放比例</li>
        <li><code>user-scalable=no</code>：禁止用户手动缩放</li>
      </ul>
      <p>不设置时，移动端浏览器默认视口宽度为 980px，页面会被缩小显示。</p>
    `,
  },
  {
    q: '常见的移动端适配方案有哪些？',
    a: `
      <p><strong>1. rem 方案（flexible）</strong></p>
      <ul>
        <li>根据屏幕宽度动态设置 <code>html</code> 的 <code>font-size</code></li>
        <li>所有尺寸用 rem 单位（相对于根 font-size）</li>
        <li>配合 postcss-pxtorem 自动转换</li>
      </ul>
      <p><strong>2. vw/vh 方案</strong></p>
      <ul>
        <li>直接使用 vw 单位（1vw = 视口宽度的 1%）</li>
        <li>配合 postcss-px-to-viewport 自动转换</li>
        <li>更简单，不需要 JS 计算根 font-size</li>
      </ul>
      <p><strong>3. 响应式方案（media query）</strong></p>
      <ul>
        <li>根据不同断点编写不同样式</li>
        <li>适合 PC 和移动端共用一套代码</li>
      </ul>
    `,
  },
  {
    q: '移动端 1px 边框问题是什么？如何解决？',
    a: `
      <p><strong>问题</strong>：在 Retina 屏（2x/3x）上，CSS 的 1px 实际渲染为 2px/3px 物理像素，看起来比设计稿粗。</p>
      <p><strong>解决方案：</strong></p>
      <ul>
        <li><strong>transform: scale(0.5)</strong>：伪元素画边框，然后缩放 0.5</li>
        <li><strong>box-shadow</strong>：<code>box-shadow: 0 0 0 0.5px #ccc</code></li>
        <li><strong>viewport 缩放</strong>：根据 dpr 动态设置 <code>initial-scale=1/dpr</code></li>
        <li><strong>border-image</strong>：使用 SVG 或渐变实现</li>
      </ul>
    `,
  },
  {
    q: '什么是设备像素比（DPR）？如何获取？',
    a: `
      <p><strong>DPR = 物理像素 / 逻辑像素（CSS 像素）</strong></p>
      <ul>
        <li>iPhone 6/7/8：DPR = 2（750 物理 / 375 逻辑）</li>
        <li>iPhone 6/7/8 Plus：DPR = 3</li>
        <li>普通电脑屏幕：DPR = 1</li>
      </ul>
      <p><strong>获取方式：</strong></p>
      <pre>window.devicePixelRatio  // JS 获取
@media (-webkit-min-device-pixel-ratio: 2) {}  // CSS 媒体查询</pre>
    `,
  },
]
</script>
