<template>
  <QuestionCard title="迭代器与 for...of / for...in" type="code">
    <template #description>
      <p>请理解 JavaScript 的迭代协议，掌握 <code>for...in</code> 与 <code>for...of</code> 的区别，并实现自定义迭代器。</p>
    </template>

    <el-card shadow="never">
      <template #header><strong>任务1: for...in vs for...of 区别</strong></template>
      <el-button type="primary" @click="runComparison">运行对比</el-button>
      <el-descriptions :column="1" border style="margin-top: 12px">
        <el-descriptions-item label="for...in 遍历数组">{{ forInArray }}</el-descriptions-item>
        <el-descriptions-item label="for...of 遍历数组">{{ forOfArray }}</el-descriptions-item>
        <el-descriptions-item label="for...in 遍历对象">{{ forInObject }}</el-descriptions-item>
        <el-descriptions-item label="for...of 遍历对象">{{ forOfObject }}</el-descriptions-item>
      </el-descriptions>
    </el-card>

    <el-card shadow="never">
      <template #header><strong>任务2: 实现自定义迭代器</strong></template>
      <p style="margin-bottom: 12px">
        实现一个 <code>range(start, end)</code> 函数，返回可迭代对象，支持 <code>for...of</code> 遍历
      </p>
      <el-button type="success" @click="testRange">测试 range(1, 5)</el-button>
      <p style="margin-top: 12px">{{ rangeResult }}</p>
    </el-card>

    <el-card shadow="never">
      <template #header><strong>任务3: 生成器函数 (Generator)</strong></template>
      <p style="margin-bottom: 12px">
        用生成器实现一个斐波那契数列迭代器
      </p>
      <el-button type="warning" @click="testFib">测试前 8 个斐波那契数</el-button>
      <p style="margin-top: 12px">{{ fibResult }}</p>
    </el-card>

    <el-divider>在线练习区</el-divider>
    <CodeRunner
      title="迭代器在线练习"
      :initial-code="playgroundCode"
    />
  </QuestionCard>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import QuestionCard from '@/components/QuestionCard.vue'
import CodeRunner from '@/components/CodeRunner.vue'

const forInArray = ref('')
const forOfArray = ref('')
const forInObject = ref('')
const forOfObject = ref('')

function runComparison() {
  const arr = ['a', 'b', 'c']
  const inResults: string[] = []
  for (const key in arr) inResults.push(`${key}(${typeof key})`)
  forInArray.value = `遍历的是索引(字符串): ${inResults.join(', ')}`

  const ofResults: string[] = []
  for (const val of arr) ofResults.push(val)
  forOfArray.value = `遍历的是值: ${ofResults.join(', ')}`

  const obj = { name: '张三', age: 25 }
  const objIn: string[] = []
  for (const key in obj) objIn.push(key)
  forInObject.value = `遍历的是键: ${objIn.join(', ')}`

  forOfObject.value = '报错！普通对象没有 [Symbol.iterator]，不可用 for...of'
}

// TODO: 实现 range 函数，返回可迭代对象
function range(start: number, end: number): Iterable<number> {
  // 请实现：返回一个包含 [Symbol.iterator] 方法的对象
  void start
  void end
  return {
    [Symbol.iterator]() {
      return { next() { return { done: true, value: undefined } } }
    },
  }
}

const rangeResult = ref('')

function testRange() {
  const nums: number[] = []
  for (const n of range(1, 5)) nums.push(n)
  rangeResult.value = `range(1, 5) = [${nums.join(', ')}]（期望: [1, 2, 3, 4, 5]）`
}

// TODO: 用生成器实现斐波那契数列
function* fibonacci(): Generator<number> {
  // 请实现
  void 0
}

const fibResult = ref('')

function testFib() {
  const nums: number[] = []
  const gen = fibonacci()
  for (let i = 0; i < 8; i++) {
    const r = gen.next()
    if (r.done) break
    nums.push(r.value)
  }
  fibResult.value = `前 8 个: [${nums.join(', ')}]（期望: [0, 1, 1, 2, 3, 5, 8, 13]）`
}

const playgroundCode = `// for...in vs for...of
const arr = ['a', 'b', 'c']

console.log('--- for...in（遍历键/索引）---')
for (const key in arr) console.log(key, typeof key)

console.log('--- for...of（遍历值）---')
for (const val of arr) console.log(val)

// 自定义迭代器
function range(start, end) {
  return {
    [Symbol.iterator]() {
      let current = start
      return {
        next() {
          if (current <= end) return { value: current++, done: false }
          return { done: true }
        }
      }
    }
  }
}

console.log('--- range(1, 5) ---')
for (const n of range(1, 5)) console.log(n)

// 生成器
function* fibonacci() {
  let a = 0, b = 1
  while (true) {
    yield a
    ;[a, b] = [b, a + b]
  }
}

console.log('--- fibonacci 前 8 个 ---')
const gen = fibonacci()
for (let i = 0; i < 8; i++) console.log(gen.next().value)
`
</script>
