<template>
  <QAQuestion
    title="CSS 选择器与优先级"
    :questions="questions"
  >
    <template #description>
      <p>本题考察对 CSS 选择器类型、优先级权重计算规则的理解。</p>
    </template>
  </QAQuestion>
</template>

<script setup lang="ts">
import QAQuestion from '@/components/QAQuestion.vue'

const questions = [
  {
    q: 'CSS 选择器有哪些？请列举常见的选择器类型。',
    a: `
      <p><strong>基础选择器：</strong>通配符(*)、元素选择器(div)、类选择器(.class)、ID 选择器(#id)、属性选择器([attr])</p>
      <p><strong>组合选择器：</strong>后代(A B)、子代(A > B)、相邻兄弟(A + B)、通用兄弟(A ~ B)</p>
      <p><strong>伪类：</strong>:hover、:focus、:nth-child()、:first-child、:not() 等</p>
      <p><strong>伪元素：</strong>::before、::after、::first-line、::placeholder 等</p>
    `,
  },
  {
    q: 'CSS 优先级是如何计算的？请从高到低排列。',
    a: `
      <p><strong>优先级从高到低：</strong></p>
      <ol>
        <li>!important（最高优先级，慎用）</li>
        <li>内联样式 style=""（权重 1000）</li>
        <li>ID 选择器 #id（权重 100）</li>
        <li>类选择器 .class / 属性选择器 [attr] / 伪类 :hover（权重 10）</li>
        <li>元素选择器 div / 伪元素 ::before（权重 1）</li>
        <li>通配符 * / 组合符 > + ~（权重 0）</li>
        <li>继承的样式（最低）</li>
      </ol>
      <p>多个选择器组合时，分别计算各层级数量然后逐级比较。</p>
    `,
  },
  {
    q: '以下两条规则，哪个颜色生效？为什么？<br/><code>#box .text { color: red; }</code><br/><code>.container .wrapper .text { color: blue; }</code>',
    a: `
      <p><strong>red 生效。</strong></p>
      <p>第一条：1 个 ID (100) + 1 个 class (10) = 110</p>
      <p>第二条：3 个 class (10×3) = 30</p>
      <p>110 > 30，所以 red 优先级更高。注意：即使第二条有更多选择器，ID 选择器的权重远高于 class。</p>
    `,
  },
  {
    q: '什么是样式继承？哪些属性可以继承，哪些不能？',
    a: `
      <p><strong>可继承：</strong>font-size、font-family、color、line-height、text-align、visibility 等文本相关属性</p>
      <p><strong>不可继承：</strong>width、height、margin、padding、border、background、display、position 等盒模型与布局属性</p>
      <p>可以通过 <code>inherit</code> 关键字强制继承，<code>initial</code> 恢复默认值。</p>
    `,
  },
]
</script>
