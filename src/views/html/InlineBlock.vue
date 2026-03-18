<template>
  <QAQuestion title="行内元素 vs 块级元素" :questions="questions">
    <template #description>
      <p>本题考察 HTML 元素的显示类型以及行内元素和块级元素的核心区别。</p>
    </template>

    <template #extra>
      <el-divider>在线演示区</el-divider>
      <CssRunner
        title="行内 vs 块级在线验证"
        :html="previewHtml"
        :initial-css="initialCss"
      />
    </template>
  </QAQuestion>
</template>

<script setup lang="ts">
import QAQuestion from '@/components/QAQuestion.vue'
import CssRunner from '@/components/CssRunner.vue'

const questions = [
  {
    q: '行内元素（inline）和块级元素（block）有什么区别？',
    a: `
      <table border="1" cellpadding="6" style="border-collapse: collapse; width: 100%">
        <tr><th>对比项</th><th>块级元素 (block)</th><th>行内元素 (inline)</th></tr>
        <tr><td>占据空间</td><td>独占一行</td><td>只占内容宽度，同行排列</td></tr>
        <tr><td>宽高</td><td>可设置 width / height</td><td><strong>不能</strong>设置 width / height</td></tr>
        <tr><td>margin / padding</td><td>四个方向都有效</td><td>水平有效，<strong>垂直无效</strong>（padding 视觉有效但不撑开行高）</td></tr>
        <tr><td>默认宽度</td><td>父容器 100%</td><td>内容宽度</td></tr>
        <tr><td>嵌套规则</td><td>可包含块级和行内</td><td>一般只包含行内（p 不能嵌套 div）</td></tr>
      </table>
    `,
  },
  {
    q: '常见的块级元素和行内元素分别有哪些？',
    a: `
      <p><strong>块级元素：</strong><code>div</code> <code>p</code> <code>h1~h6</code> <code>ul</code> <code>ol</code> <code>li</code> <code>table</code> <code>form</code> <code>header</code> <code>footer</code> <code>section</code> <code>article</code></p>
      <p><strong>行内元素：</strong><code>span</code> <code>a</code> <code>img</code> <code>input</code> <code>button</code> <code>em</code> <code>strong</code> <code>label</code> <code>br</code> <code>code</code></p>
      <p><strong>行内块（inline-block）：</strong><code>img</code> <code>input</code> <code>button</code> — 可同行排列，也能设置宽高</p>
    `,
  },
  {
    q: '如何将行内元素转换为块级元素？有哪些 display 值？',
    a: `
      <ul>
        <li><code>display: block</code> — 变为块级，独占一行</li>
        <li><code>display: inline-block</code> — 行内块，可设宽高又同行排列</li>
        <li><code>display: inline</code> — 变为行内元素</li>
        <li><code>display: flex</code> — 弹性容器（子元素自动变为 flex item）</li>
        <li><code>display: grid</code> — 网格容器</li>
        <li><code>display: none</code> — 隐藏且不占位</li>
        <li><code>visibility: hidden</code> — 隐藏但<strong>占位</strong></li>
      </ul>
    `,
  },
]

const previewHtml = `<div>
  <p class="block-demo">我是 p（块级）— 独占一行</p>
  <span class="inline-demo">我是 span（行内）</span>
  <span class="inline-demo">我也是 span</span>
  <span class="inline-demo set-wh">设了宽高的 span（无效）</span>
  <br><br>
  <span class="inline-block-demo">inline-block 1</span>
  <span class="inline-block-demo">inline-block 2</span>
</div>`

const initialCss = `.block-demo {
  background: #409eff;
  color: #fff;
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 4px;
}

.inline-demo {
  background: #67c23a;
  color: #fff;
  padding: 4px 8px;
  border-radius: 4px;
  margin: 4px;
}

.set-wh {
  width: 300px;   /* 无效！inline 不能设宽高 */
  height: 60px;   /* 无效！ */
  background: #f56c6c;
}

.inline-block-demo {
  display: inline-block;
  width: 150px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: #e6a23c;
  color: #fff;
  border-radius: 4px;
  margin: 4px;
}`
</script>
