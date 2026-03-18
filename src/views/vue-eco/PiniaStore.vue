<template>
  <QAQuestion title="Pinia 状态管理" :questions="questions">
    <template #description>
      <p>本题考察 Vue3 官方推荐状态管理库 Pinia 的使用和原理。</p>
    </template>
  </QAQuestion>
</template>

<script setup lang="ts">
import QAQuestion from '@/components/QAQuestion.vue'

const questions = [
  {
    q: 'Pinia 相比 Vuex 有什么优势？为什么 Vue3 推荐 Pinia？',
    a: `
      <ul>
        <li><strong>去除 mutations</strong>：直接修改 state 或用 actions，更简洁</li>
        <li><strong>完整 TS 支持</strong>：类型推导开箱即用</li>
        <li><strong>模块化设计</strong>：每个 store 独立，无需嵌套模块</li>
        <li><strong>体积更小</strong>：约 1KB（Vuex 约 10KB）</li>
        <li><strong>支持组合式 API</strong>：defineStore 可用 setup 函数风格</li>
        <li><strong>DevTools 支持</strong>：时间旅行、编辑</li>
      </ul>
    `,
  },
  {
    q: 'Pinia 的两种定义方式有什么区别？',
    a: `
      <p><strong>选项式（Options）：</strong></p>
      <pre>defineStore('counter', {
  state: () => ({ count: 0 }),
  getters: { double: (state) => state.count * 2 },
  actions: { increment() { this.count++ } }
})</pre>
      <p><strong>组合式（Setup）：</strong></p>
      <pre>defineStore('counter', () => {
  const count = ref(0)
  const double = computed(() => count.value * 2)
  function increment() { count.value++ }
  return { count, double, increment }
})</pre>
      <p>组合式更灵活，可使用 composables，推荐使用。</p>
    `,
  },
  {
    q: 'Pinia 的 state 是响应式的吗？如何持久化？',
    a: `
      <p><strong>响应式</strong>：Pinia state 基于 Vue3 reactive，天然响应式。</p>
      <p><strong>持久化方案</strong>：</p>
      <ul>
        <li><code>pinia-plugin-persistedstate</code> 插件：自动同步到 localStorage</li>
        <li>手动：在 actions 中读写 localStorage</li>
        <li>$subscribe 监听变化后存储</li>
      </ul>
    `,
  },
]
</script>
