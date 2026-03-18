<template>
  <QuestionCard title="闭包与作用域" type="code">
    <template #description>
      <p>请完成以下闭包相关的编程任务：</p>
      <ol>
        <li>实现一个计数器工厂函数 <code>createCounter</code></li>
        <li>实现一个带缓存的函数 <code>memoize</code></li>
        <li>分析经典闭包陷阱并修复</li>
      </ol>
    </template>

    <el-card shadow="never">
      <template #header><strong>任务1: 计数器工厂</strong></template>
      <p style="margin-bottom: 12px">
        实现 <code>createCounter</code>，返回一个对象包含 <code>increment</code>、<code>decrement</code>、<code>getCount</code> 方法
      </p>
      <el-space>
        <el-button type="primary" @click="handleIncrement">+1</el-button>
        <el-button type="danger" @click="handleDecrement">-1</el-button>
        <el-tag size="large" type="info">当前计数: {{ count }}</el-tag>
      </el-space>
    </el-card>

    <el-card shadow="never">
      <template #header><strong>任务2: 函数缓存 (memoize)</strong></template>
      <p style="margin-bottom: 12px">
        实现 <code>memoize</code> 函数，缓存计算结果，相同参数直接返回缓存
      </p>
      <el-space wrap>
        <el-button @click="testMemoize(10)">计算 fibonacci(10)</el-button>
        <el-button @click="testMemoize(20)">计算 fibonacci(20)</el-button>
        <el-button @click="testMemoize(30)">计算 fibonacci(30)</el-button>
      </el-space>
      <p style="margin-top: 12px">{{ memoizeResult }}</p>
    </el-card>

    <el-card shadow="never">
      <template #header><strong>任务3: 经典闭包陷阱</strong></template>
      <p style="margin-bottom: 12px">
        下面的代码期望输出 0, 1, 2, 3, 4，但实际输出 5 个 5。请修复 <code>fixedClosureTrap</code> 函数。
      </p>
      <pre style="background: #f5f7fa; padding: 12px; border-radius: 6px; margin-bottom: 12px">// 有问题的版本
for (var i = 0; i &lt; 5; i++) {
  setTimeout(function() {
    console.log(i)  // 输出 5 个 5
  }, i * 100)
}</pre>
      <el-button type="success" @click="runFixedTrap">运行修复后的版本</el-button>
      <p style="margin-top: 12px">{{ trapResult }}</p>
    </el-card>
  </QuestionCard>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import QuestionCard from '@/components/QuestionCard.vue'

// ========== 任务1: 计数器工厂 ==========
// TODO: 实现 createCounter 函数
// 返回一个对象 { increment, decrement, getCount }
// increment: 计数+1，decrement: 计数-1，getCount: 返回当前计数
function createCounter(initial: number = 0) {
  // 请实现
  void initial
  return {
    increment: () => {},
    decrement: () => {},
    getCount: () => 0,
  }
}

const counter = createCounter(0)
const count = ref(counter.getCount())

function handleIncrement() {
  counter.increment()
  count.value = counter.getCount()
}

function handleDecrement() {
  counter.decrement()
  count.value = counter.getCount()
}

// ========== 任务2: 函数缓存 ==========
// TODO: 实现 memoize 函数
// 接收一个函数 fn，返回一个新函数
// 新函数会缓存 fn 的计算结果，相同参数直接返回缓存值
function memoize<T>(fn: (...args: any[]) => T): (...args: any[]) => T {
  // 请实现
  return fn
}

function fibonacci(n: number): number {
  if (n <= 1) return n
  return memoizedFib(n - 1) + memoizedFib(n - 2)
}

const memoizedFib = memoize(fibonacci)
const memoizeResult = ref('')

function testMemoize(n: number) {
  const start = performance.now()
  const result = memoizedFib(n)
  const time = (performance.now() - start).toFixed(2)
  memoizeResult.value = `fibonacci(${n}) = ${result}，耗时: ${time}ms`
}

// ========== 任务3: 修复闭包陷阱 ==========
// TODO: 修复 for 循环中的闭包问题，使其依次输出 0, 1, 2, 3, 4
const trapResult = ref('')

function fixedClosureTrap(): Promise<number[]> {
  return new Promise((resolve) => {
    const results: number[] = []

    // 请修复以下代码，使其正确输出 0, 1, 2, 3, 4
    for (var i = 0; i < 5; i++) {
      setTimeout(function () {
        results.push(i)
        if (results.length === 5) resolve(results)
      }, i * 100)
    }
  })
}

async function runFixedTrap() {
  trapResult.value = '执行中...'
  const results = await fixedClosureTrap()
  trapResult.value = `输出结果: [${results.join(', ')}]`
}
</script>
