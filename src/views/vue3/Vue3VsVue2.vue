<template>
  <QAQuestion
    title="Vue3 vs Vue2 区别"
    :questions="questions"
  >
    <template #description>
      <p>本题考察对 Vue3 相较于 Vue2 的核心改进和新特性的理解。这是 Vue 面试的<strong>开场必问题</strong>。</p>
    </template>
  </QAQuestion>
</template>

<script setup lang="ts">
import QAQuestion from '@/components/QAQuestion.vue'

const questions = [
  {
    q: 'Vue3 相比 Vue2 有哪些重大变化？请从 API、性能、架构三个维度说明。',
    a: `
      <p><strong>API 层面：</strong></p>
      <ul>
        <li>新增 Composition API（setup、ref、reactive、computed、watch 等）</li>
        <li>新增 &lt;script setup&gt; 语法糖，减少样板代码</li>
        <li>Fragment 支持（模板可以有多个根节点）</li>
        <li>Teleport 组件（将 DOM 渲染到指定位置）</li>
        <li>Suspense 组件（优雅处理异步组件加载）</li>
      </ul>
      <p><strong>性能层面：</strong></p>
      <ul>
        <li>响应式：Proxy 替代 Object.defineProperty，支持新增/删除属性、数组索引、Map/Set</li>
        <li>编译优化：静态提升、Patch Flags 标记动态节点、Block Tree</li>
        <li>Tree-shaking：按需引入，打包体积更小</li>
        <li>整体性能提升约 30-40%</li>
      </ul>
      <p><strong>架构层面：</strong></p>
      <ul>
        <li>TypeScript 原生支持（源码全部 TS 重写）</li>
        <li>模块化拆分（@vue/reactivity 可独立使用）</li>
        <li>自定义渲染器 API</li>
      </ul>
    `,
  },
  {
    q: 'Vue3 的响应式原理（Proxy）与 Vue2（Object.defineProperty）有什么区别？',
    a: `
      <table border="1" cellpadding="6" style="border-collapse: collapse; width: 100%">
        <tr><th>对比项</th><th>Vue2 (defineProperty)</th><th>Vue3 (Proxy)</th></tr>
        <tr><td>新增属性</td><td>无法检测，需要 Vue.set()</td><td>自动检测</td></tr>
        <tr><td>删除属性</td><td>无法检测，需要 Vue.delete()</td><td>自动检测</td></tr>
        <tr><td>数组索引</td><td>无法检测 arr[index] = val</td><td>自动检测</td></tr>
        <tr><td>数组长度</td><td>无法检测 arr.length = 0</td><td>自动检测</td></tr>
        <tr><td>Map/Set</td><td>不支持</td><td>支持</td></tr>
        <tr><td>性能</td><td>递归遍历所有属性（初始化开销大）</td><td>懒代理（访问时才递归）</td></tr>
        <tr><td>实现方式</td><td>逐个属性劫持</td><td>代理整个对象</td></tr>
      </table>
    `,
  },
  {
    q: 'Composition API 相比 Options API 有什么优势？',
    a: `
      <p><strong>核心优势：</strong></p>
      <ul>
        <li><strong>逻辑复用</strong>：通过 composable 函数（useXxx）复用逻辑，替代 Vue2 的 mixin（避免命名冲突和来源不清）</li>
        <li><strong>代码组织</strong>：按功能组织代码，而非按选项（data/methods/computed）分散</li>
        <li><strong>类型推导</strong>：天然支持 TypeScript，类型推导更准确</li>
        <li><strong>Tree-shaking</strong>：按需导入，未使用的 API 不会被打包</li>
      </ul>
    `,
  },
  {
    q: 'Vue3 移除或废弃了哪些 Vue2 的特性？',
    a: `
      <ul>
        <li><code>$on / $off / $once</code>（事件总线）— 推荐用 mitt 库或 provide/inject</li>
        <li><code>filters</code>（过滤器）— 推荐用 computed 或方法</li>
        <li><code>$children</code> — 推荐用 ref 访问子组件</li>
        <li><code>Vue.prototype</code> 挂载全局属性 — 改用 <code>app.config.globalProperties</code></li>
        <li><code>keyCode</code> 修饰符 — 改用按键名（如 <code>@keyup.enter</code>）</li>
        <li><code>beforeDestroy / destroyed</code> — 改为 <code>onBeforeUnmount / onUnmounted</code></li>
      </ul>
    `,
  },
]
</script>
