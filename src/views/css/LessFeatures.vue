<template>
  <QAQuestion
    title="Less 预处理器"
    :questions="questions"
  >
    <template #description>
      <p>本题考察对 Less CSS 预处理器核心特性的理解和实际使用经验。</p>
    </template>
  </QAQuestion>
</template>

<script setup lang="ts">
import QAQuestion from '@/components/QAQuestion.vue'

const questions = [
  {
    q: 'Less 有哪些核心特性？请举例说明。',
    a: `
      <p><strong>1. 变量</strong></p>
      <pre>@primary: #409eff;
@spacing: 16px;

.btn {
  color: @primary;
  padding: @spacing;
}</pre>
      <p><strong>2. 混合（Mixin）</strong></p>
      <pre>.border-radius(@r: 4px) {
  border-radius: @r;
}

.card {
  .border-radius(8px);
}</pre>
      <p><strong>3. 嵌套</strong></p>
      <pre>.nav {
  background: #fff;
  .nav-item {
    padding: 12px;
    &:hover { color: @primary; }
    &.active { font-weight: bold; }
  }
}</pre>
      <p><strong>4. 运算</strong></p>
      <pre>.container {
  width: 100% - 20px;
  font-size: @base-size * 1.5;
}</pre>
    `,
  },
  {
    q: 'Less 的 & 符号代表什么？在什么场景下使用？',
    a: `
      <p><code>&</code> 代表<strong>父选择器</strong>，在嵌套规则中引用上层选择器：</p>
      <pre>.btn {
  color: blue;
  &:hover { color: red; }       // 编译为 .btn:hover
  &.active { font-weight: bold; } // 编译为 .btn.active
  &-primary { background: blue; } // 编译为 .btn-primary（BEM 风格）
}</pre>
      <p><strong>注意</strong>：本项目 CSS 规范中<strong>禁止</strong>使用 <code>&-xxx</code> 拼接类名，只允许 <code>&:hover</code>、<code>&.active</code> 这种状态/伪类拼接。</p>
    `,
  },
  {
    q: 'Less 和原生 CSS 变量（Custom Properties）有什么区别？',
    a: `
      <table border="1" cellpadding="6" style="border-collapse: collapse; width: 100%">
        <tr><th>对比项</th><th>Less 变量</th><th>CSS 变量</th></tr>
        <tr><td>语法</td><td><code>@color: red</code></td><td><code>--color: red</code></td></tr>
        <tr><td>使用</td><td><code>color: @color</code></td><td><code>color: var(--color)</code></td></tr>
        <tr><td>作用域</td><td>编译时确定</td><td>运行时（可被 JS 修改）</td></tr>
        <tr><td>继承</td><td>不支持</td><td>支持 DOM 继承</td></tr>
        <tr><td>兼容性</td><td>需编译</td><td>原生支持（IE 除外）</td></tr>
        <tr><td>动态性</td><td>编译后为静态值</td><td>可用 JS 动态修改实现主题切换</td></tr>
      </table>
    `,
  },
  {
    q: 'Less 文件如何在 Vite 项目中使用？',
    a: `
      <p><strong>步骤：</strong></p>
      <ol>
        <li>安装 Less：<code>npm install less -D</code></li>
        <li>直接使用：<code>&lt;style lang="less" scoped&gt;</code></li>
        <li>Vite 内置支持 Less，无需额外配置</li>
      </ol>
      <p><strong>全局变量注入（可选）：</strong></p>
      <pre>// vite.config.ts
css: {
  preprocessorOptions: {
    less: {
      additionalData: '@import "./src/styles/variables.less";'
    }
  }
}</pre>
    `,
  },
]
</script>
