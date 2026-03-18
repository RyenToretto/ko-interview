<template>
  <QAQuestion title="Webpack vs Vite 构建原理" :questions="questions">
    <template #description>
      <p>本题考察前端构建工具的核心概念、原理及 Webpack 与 Vite 的差异。</p>
    </template>
  </QAQuestion>
</template>

<script setup lang="ts">
import QAQuestion from '@/components/QAQuestion.vue'

const questions = [
  {
    q: 'Webpack 的核心概念（entry/output/loader/plugin）和打包流程',
    a: `
      <p><strong>核心概念：</strong></p>
      <ul>
        <li><strong>entry</strong>：入口，指定打包的起点，Webpack 从入口开始递归解析依赖</li>
        <li><strong>output</strong>：出口，指定打包后文件的输出路径和命名规则</li>
        <li><strong>loader</strong>：转换器，将非 JS 文件（如 CSS、图片、TS）转换为 Webpack 能处理的模块</li>
        <li><strong>plugin</strong>：插件，在打包生命周期各阶段执行自定义逻辑（如压缩、提取 CSS、生成 HTML）</li>
      </ul>
      <p><strong>打包流程：</strong></p>
      <ol>
        <li>从 entry 出发，解析模块依赖，构建依赖图（Module Graph）</li>
        <li>对每个模块执行对应的 loader 进行转换</li>
        <li>根据依赖关系将模块打包成 chunk</li>
        <li>执行 plugin 钩子（如 optimize、emit）</li>
        <li>输出到 output 指定目录</li>
      </ol>
    `,
  },
  {
    q: 'Vite 为什么快？开发时用 ESM + esbuild，生产用 Rollup',
    a: `
      <p><strong>开发阶段：</strong></p>
      <ul>
        <li><strong>原生 ESM</strong>：不打包，浏览器直接按需请求模块，按需编译，冷启动极快</li>
        <li><strong>esbuild 预构建</strong>：将 CommonJS/UMD 转为 ESM，用 Go 编写的 esbuild 做依赖预构建，速度比 Webpack 快 10～100 倍</li>
        <li><strong>按需编译</strong>：只编译当前访问的页面，而不是整个项目</li>
      </ul>
      <p><strong>生产阶段：</strong></p>
      <ul>
        <li>使用 <strong>Rollup</strong> 打包，生成优化的静态资源</li>
        <li>Rollup 基于 ESM，Tree Shaking 效果好，输出更小</li>
      </ul>
      <p><strong>对比 Webpack：</strong>Webpack 开发时需全量打包才能启动，项目越大越慢；Vite 利用浏览器原生 ESM，启动几乎与项目大小无关。</p>
    `,
  },
  {
    q: 'HMR 热更新原理',
    a: `
      <p><strong>核心流程：</strong></p>
      <ol>
        <li><strong>建立连接</strong>：开发服务器与浏览器通过 WebSocket 建立长连接</li>
        <li><strong>监听文件变化</strong>：构建工具监听源码文件变更（如 chokidar）</li>
        <li><strong>编译变更模块</strong>：只重新编译变更的模块及其依赖链</li>
        <li><strong>推送更新</strong>：通过 WebSocket 将更新后的模块 hash 或代码推送给浏览器</li>
        <li><strong>客户端替换</strong>：浏览器用新模块替换旧模块，执行 HMR runtime 的 accept 回调，实现局部刷新</li>
      </ol>
      <p><strong>Vue/React 的 HMR：</strong>框架通过 <code>module.hot.accept</code> 注册热更新逻辑，组件状态可保留，只替换变更的组件树。</p>
    `,
  },
  {
    q: 'Tree Shaking 原理（ESM 静态分析）',
    a: `
      <p><strong>原理：</strong>利用 ES Module 的<strong>静态结构</strong>，在编译时分析 import/export，移除未被引用的代码（dead code）。</p>
      <p><strong>为什么 ESM 能 Tree Shaking：</strong></p>
      <ul>
        <li>ESM 的 import/export 在<strong>编译时</strong>确定，可静态分析依赖关系</li>
        <li>CommonJS 的 require 是<strong>运行时</strong>动态的，无法在编译时确定哪些代码会被使用</li>
      </ul>
      <p><strong>使用注意：</strong></p>
      <ul>
        <li>使用 <code>import { foo } from 'lib'</code> 而非 <code>import * as lib from 'lib'</code></li>
        <li>库需提供 ESM 构建，且 <code>package.json</code> 中 <code>sideEffects</code> 正确配置</li>
        <li>避免有副作用的代码（如立即执行的 IIFE）被误删</li>
      </ul>
    `,
  },
]
</script>
