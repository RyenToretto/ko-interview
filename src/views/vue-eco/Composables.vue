<template>
  <QuestionCard title="Composables 自定义 Hook" type="code">
    <template #description>
      <p>请实现一个 <code>useCounter</code> 组合函数并使用它，理解 Vue3 逻辑复用模式。</p>
    </template>

    <el-card shadow="never">
      <template #header><strong>任务: 使用 useCounter</strong></template>
      <p>计数: <el-tag size="large" type="primary">{{ count }}</el-tag></p>
      <el-space style="margin-top: 12px">
        <el-button type="primary" @click="increment">+1</el-button>
        <el-button type="danger" @click="decrement">-1</el-button>
        <el-button @click="reset">重置</el-button>
      </el-space>
    </el-card>

    <el-divider>在线练习区</el-divider>
    <CodeRunner title="Composables 在线练习" :initial-code="playgroundCode" />
  </QuestionCard>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import QuestionCard from '@/components/QuestionCard.vue'
import CodeRunner from '@/components/CodeRunner.vue'

// TODO: 实现 useCounter composable
function useCounter(initial: number = 0) {
  const count = ref(initial)
  // 请实现 increment / decrement / reset
  function increment() { /* TODO */ }
  function decrement() { /* TODO */ }
  function reset() { /* TODO */ }
  return { count, increment, decrement, reset }
}

const { count, increment, decrement, reset } = useCounter(0)

const playgroundCode = `// Vue3 Composable 模式（纯 JS 演示）
function useCounter(initial = 0) {
  let count = initial
  return {
    get: () => count,
    increment: () => ++count,
    decrement: () => --count,
    reset: () => { count = initial; return count },
  }
}

const counter = useCounter(10)
console.log('初始:', counter.get())
counter.increment()
counter.increment()
console.log('+2 后:', counter.get())
counter.decrement()
console.log('-1 后:', counter.get())
counter.reset()
console.log('重置:', counter.get())
`
</script>
