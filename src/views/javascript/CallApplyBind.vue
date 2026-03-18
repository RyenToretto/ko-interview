<template>
  <QuestionCard title="手写 call / apply / bind" type="code">
    <template #description>
      <p>请手动实现 <code>Function.prototype</code> 上的三个方法：</p>
      <ul>
        <li><code>myCall</code>：改变 this 指向并立即执行</li>
        <li><code>myApply</code>：与 call 类似，但参数以数组形式传入</li>
        <li><code>myBind</code>：返回一个新函数，this 绑定到指定对象</li>
      </ul>
    </template>

    <el-card shadow="never">
      <template #header><strong>测试面板</strong></template>
      <el-button type="primary" @click="runTests">运行全部测试</el-button>
      <el-descriptions :column="1" border style="margin-top: 12px">
        <el-descriptions-item
          v-for="(t, i) in testResults"
          :key="i"
          :label="t.label"
        >
          <el-tag :type="t.pass ? 'success' : 'danger'">
            {{ t.pass ? '通过' : '未通过' }}
          </el-tag>
          <span style="margin-left: 8px">{{ t.detail }}</span>
        </el-descriptions-item>
      </el-descriptions>
    </el-card>
  </QuestionCard>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import QuestionCard from '@/components/QuestionCard.vue'

// TODO: 实现 myCall
// 原理：将函数作为目标对象的临时方法调用，然后删除
function myCall(fn: Function, context: any, ...args: any[]) {
  // 请实现
  void fn
  void context
  void args
  return undefined
}

// TODO: 实现 myApply
// 与 myCall 相同，区别是第二个参数是数组
function myApply(fn: Function, context: any, args: any[] = []) {
  // 请实现
  void fn
  void context
  void args
  return undefined
}

// TODO: 实现 myBind
// 返回新函数，支持预填参数（柯里化），支持 new 调用
function myBind(fn: Function, context: any, ...preArgs: any[]) {
  // 请实现
  void fn
  void context
  void preArgs
  return (...args: any[]) => undefined as any
}

interface TestResult {
  label: string
  pass: boolean
  detail: string
}

const testResults = ref<TestResult[]>([])

function runTests() {
  const results: TestResult[] = []

  function greet(this: any, greeting: string, punct: string) {
    return `${greeting}, ${this.name}${punct}`
  }
  const person = { name: '张三' }

  // 测试 myCall
  const callResult = myCall(greet, person, 'Hello', '!')
  results.push({
    label: 'myCall(greet, person, "Hello", "!")',
    pass: callResult === 'Hello, 张三!',
    detail: `返回: ${JSON.stringify(callResult)}（期望: "Hello, 张三!"）`,
  })

  // 测试 myApply
  const applyResult = myApply(greet, person, ['Hi', '~'])
  results.push({
    label: 'myApply(greet, person, ["Hi", "~"])',
    pass: applyResult === 'Hi, 张三~',
    detail: `返回: ${JSON.stringify(applyResult)}（期望: "Hi, 张三~"）`,
  })

  // 测试 myBind 基本绑定
  const bound = myBind(greet, person, '你好')
  const bindResult = bound('！')
  results.push({
    label: 'myBind(greet, person, "你好")("！")',
    pass: bindResult === '你好, 张三！',
    detail: `返回: ${JSON.stringify(bindResult)}（期望: "你好, 张三！"）`,
  })

  // 测试 myCall context 为 null
  function getName(this: any) { return this === window || this === globalThis ? 'global' : this?.name }
  const nullResult = myCall(getName, null)
  results.push({
    label: 'myCall(fn, null) — context 为 null 时',
    pass: nullResult === 'global',
    detail: `返回: ${JSON.stringify(nullResult)}`,
  })

  testResults.value = results
}
</script>
