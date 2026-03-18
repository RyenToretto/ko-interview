<template>
  <QAQuestion
    title="Scss/Sass 预处理器"
    :questions="questions"
  >
    <template #description>
      <p>本题考察对 Scss（Sassy CSS）预处理器核心特性的理解。Scss 是 Sass 的超集语法（兼容 CSS）。</p>
    </template>
  </QAQuestion>
</template>

<script setup lang="ts">
import QAQuestion from '@/components/QAQuestion.vue'

const questions = [
  {
    q: 'Scss 有哪些核心特性？与 Less 有何区别？',
    a: `
      <p><strong>Scss 核心特性：</strong></p>
      <p><strong>1. 变量</strong>（用 <code>$</code> 而非 <code>@</code>）</p>
      <pre>$primary: #409eff;
$spacing: 16px;

.btn { color: $primary; padding: $spacing; }</pre>
      <p><strong>2. Mixin（支持 @include 调用）</strong></p>
      <pre>@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.box { @include flex-center; }</pre>
      <p><strong>3. 继承（@extend）</strong></p>
      <pre>.base-btn {
  padding: 8px 16px;
  border-radius: 4px;
}
.primary-btn {
  @extend .base-btn;
  background: $primary;
}</pre>
      <p><strong>4. 函数与控制流</strong></p>
      <pre>@function px2rem($px) {
  @return $px / 16 * 1rem;
}

.title { font-size: px2rem(24); }  // 1.5rem

@for $i from 1 through 3 {
  .col-#{$i} { width: 100% / 3 * $i; }
}</pre>
    `,
  },
  {
    q: 'Scss 和 Less 有什么区别？如何选择？',
    a: `
      <table border="1" cellpadding="6" style="border-collapse: collapse; width: 100%">
        <tr><th>对比项</th><th>Scss</th><th>Less</th></tr>
        <tr><td>变量</td><td><code>$var</code></td><td><code>@var</code></td></tr>
        <tr><td>Mixin</td><td><code>@mixin / @include</code></td><td><code>.mixin()</code></td></tr>
        <tr><td>继承</td><td><code>@extend</code></td><td>不支持（用 Mixin 替代）</td></tr>
        <tr><td>函数</td><td>支持自定义函数</td><td>有限支持</td></tr>
        <tr><td>控制流</td><td><code>@if/@for/@each/@while</code></td><td><code>when</code> 守卫</td></tr>
        <tr><td>编译</td><td>Dart Sass（推荐）</td><td>JS 实现</td></tr>
        <tr><td>生态</td><td>更大（Bootstrap 5 用 Scss）</td><td>较小（Ant Design 用 Less）</td></tr>
      </table>
      <p><strong>选择建议</strong>：新项目推荐 Scss（功能更强大、生态更大）；维护 Ant Design 项目则用 Less。</p>
    `,
  },
  {
    q: 'Scss 文件如何在 Vite 项目中使用？',
    a: `
      <ol>
        <li>安装：<code>npm install sass -D</code>（注意是 sass 不是 node-sass）</li>
        <li>使用：<code>&lt;style lang="scss" scoped&gt;</code></li>
        <li>Vite 内置支持，零配置</li>
      </ol>
      <p><strong>全局变量注入：</strong></p>
      <pre>// vite.config.ts
css: {
  preprocessorOptions: {
    scss: {
      additionalData: '@use "./src/styles/variables" as *;'
    }
  }
}</pre>
      <p><strong>注意</strong>：Dart Sass 推荐用 <code>@use</code> 替代已废弃的 <code>@import</code>。</p>
    `,
  },
  {
    q: 'Scss 中 @mixin 和 @extend 有什么区别？各自的适用场景？',
    a: `
      <p><strong>@mixin</strong>：将规则<strong>复制</strong>到每个调用处，支持参数</p>
      <ul>
        <li>编译后每个调用处有独立的 CSS 规则（体积较大）</li>
        <li>适合需要传参的场景（如响应式 mixin）</li>
      </ul>
      <p><strong>@extend</strong>：将选择器<strong>合并</strong>，共享同一组规则</p>
      <ul>
        <li>编译后生成 <code>.base, .child { ... }</code> 格式（体积更小）</li>
        <li>不支持参数</li>
        <li>在 @media 内使用有限制</li>
      </ul>
      <p><strong>建议</strong>：需要参数用 @mixin，纯样式复用用 @extend。</p>
    `,
  },
]
</script>
