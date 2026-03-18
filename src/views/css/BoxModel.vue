<template>
  <QAQuestion
    title="盒模型与 BFC"
    :questions="questions"
  >
    <template #description>
      <p>本题考察对 CSS 盒模型和块级格式化上下文（BFC）的理解。</p>
    </template>
  </QAQuestion>
</template>

<script setup lang="ts">
import QAQuestion from '@/components/QAQuestion.vue'

const questions = [
  {
    q: '标准盒模型和 IE 盒模型有什么区别？box-sizing 有哪些值？',
    a: `
      <p><strong>标准盒模型（content-box）：</strong>width/height 只包含 content，总宽度 = width + padding + border + margin</p>
      <p><strong>IE 盒模型（border-box）：</strong>width/height 包含 content + padding + border，总宽度 = width + margin</p>
      <p><strong>box-sizing 取值：</strong></p>
      <ul>
        <li><code>content-box</code>（默认）：标准盒模型</li>
        <li><code>border-box</code>：IE 盒模型，实际开发中更常用</li>
      </ul>
    `,
  },
  {
    q: '什么是 BFC？如何触发 BFC？',
    a: `
      <p><strong>BFC（Block Formatting Context）</strong>是一个独立的渲染区域，内部元素的布局不会影响外部。</p>
      <p><strong>触发条件：</strong></p>
      <ul>
        <li>根元素 (html)</li>
        <li>float 不为 none</li>
        <li>position 为 absolute 或 fixed</li>
        <li>overflow 不为 visible（常用 overflow: hidden）</li>
        <li>display 为 inline-block、flex、grid、table-cell 等</li>
      </ul>
    `,
  },
  {
    q: 'BFC 有哪些应用场景？请举例说明。',
    a: `
      <p><strong>1. 清除浮动：</strong>父元素触发 BFC 后可以包含浮动子元素的高度</p>
      <p><strong>2. 防止 margin 重叠：</strong>同一 BFC 内相邻元素的 margin 会重叠，放在不同 BFC 可避免</p>
      <p><strong>3. 自适应多栏布局：</strong>BFC 区域不会与 float 元素重叠，可实现自适应布局</p>
    `,
  },
  {
    q: 'margin 塌陷（重叠）是什么？什么时候会发生？如何解决？',
    a: `
      <p><strong>现象：</strong>相邻块级元素的上下 margin 会合并为较大的那个值，而不是相加。</p>
      <p><strong>发生条件：</strong></p>
      <ul>
        <li>相邻兄弟元素之间</li>
        <li>父元素与第一个/最后一个子元素之间（无 border/padding 阻隔时）</li>
        <li>空块级元素自身的上下 margin</li>
      </ul>
      <p><strong>解决方案：</strong>给父元素加 overflow: hidden 触发 BFC、加 border/padding 隔开、使用 flex/grid 布局等</p>
    `,
  },
]
</script>
