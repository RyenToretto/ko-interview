<template>
  <QAQuestion title="模块化 CommonJS vs ESM" :questions="questions">
    <template #description>
      <p>本题考察 JavaScript 模块化规范的核心区别及实际使用注意点。</p>
    </template>
  </QAQuestion>
</template>

<script setup lang="ts">
import QAQuestion from '@/components/QAQuestion.vue'

const questions = [
  {
    q: 'CommonJS 和 ES Module 的核心区别（同步/异步、值拷贝/引用、运行时/编译时）',
    a: `
      <table border="1" cellpadding="6" style="border-collapse: collapse; width: 100%">
        <tr><th>对比项</th><th>CommonJS</th><th>ES Module</th></tr>
        <tr><td>加载方式</td><td>同步加载</td><td>异步加载</td></tr>
        <tr><td>导出值</td><td>值拷贝（运行时拷贝）</td><td>引用（live binding）</td></tr>
        <tr><td>解析时机</td><td>运行时</td><td>编译时（静态）</td></tr>
        <tr><td>语法</td><td>require() / module.exports</td><td>import / export</td></tr>
        <tr><td>顶层 await</td><td>不支持</td><td>支持</td></tr>
        <tr><td>Tree Shaking</td><td>不支持</td><td>支持</td></tr>
      </table>
      <p><strong>值拷贝 vs 引用：</strong></p>
      <ul>
        <li><strong>CommonJS</strong>：导出的是值的拷贝，模块内部修改不会影响已导入的值</li>
        <li><strong>ESM</strong>：导出的是引用，导入方始终拿到的是模块内部的最新值</li>
      </ul>
    `,
  },
  {
    q: 'import 和 require 能混用吗？',
    a: `
      <p><strong>可以混用，但有条件：</strong></p>
      <ul>
        <li><strong>Node.js</strong>：在 <code>type: "module"</code> 的包中，不能使用 <code>require</code>；在 CommonJS 包中可以用 <code>import()</code> 动态导入 ESM</li>
        <li><strong>构建工具（Vite/Webpack）</strong>：会做转换，混用通常没问题，但建议统一使用 ESM</li>
      </ul>
      <p><strong>常见问题：</strong></p>
      <ul>
        <li>ESM 中 <code>require()</code> 会报错（除非构建工具做了 polyfill）</li>
        <li>CJS 中 <code>import</code> 必须在顶层，且是静态的；动态加载用 <code>import()</code></li>
        <li>混用可能导致循环依赖时行为不一致</li>
      </ul>
    `,
  },
  {
    q: 'package.json 中 type: "module" 的作用',
    a: `
      <p><strong>作用：</strong>将该包下的 <code>.js</code> 文件视为 ES Module 解析，而非默认的 CommonJS。</p>
      <p><strong>默认行为：</strong>Node.js 默认将 <code>.js</code> 当作 CommonJS；<code>.mjs</code> 强制 ESM，<code>.cjs</code> 强制 CJS。</p>
      <p><strong>设置 type: "module" 后：</strong></p>
      <ul>
        <li><code>.js</code> 文件使用 <code>import/export</code> 语法</li>
        <li>不能使用 <code>require</code>、<code>module.exports</code>、<code>__dirname</code>、<code>__filename</code></li>
        <li>可用 <code>import.meta.url</code> 替代 <code>__filename</code></li>
      </ul>
      <p><strong>混合使用：</strong>同一项目中，<code>.cjs</code> 仍按 CommonJS 解析，<code>.mjs</code> 按 ESM 解析。</p>
    `,
  },
]
</script>
