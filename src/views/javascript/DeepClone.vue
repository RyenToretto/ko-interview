<template>
  <QuestionCard title="深拷贝实现" type="code">
    <template #description>
      <p>请手动实现一个 <code>deepClone</code> 函数，要求：</p>
      <ul>
        <li>支持基本类型、对象、数组</li>
        <li>支持 Date、RegExp 等特殊对象</li>
        <li>处理循环引用（加分项）</li>
      </ul>
    </template>

    <el-card shadow="never">
      <template #header><strong>测试面板</strong></template>
      <el-button type="primary" @click="runTest">运行测试</el-button>
      <div style="margin-top: 16px">
        <el-descriptions :column="1" border>
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
      </div>
    </el-card>
  </QuestionCard>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import QuestionCard from '@/components/QuestionCard.vue'

// TODO: 实现 deepClone 函数
// 要求支持：基本类型、普通对象、数组、Date、RegExp
// 加分：处理循环引用
function deepClone<T>(obj: T, _map = new WeakMap()): T {
  // 请实现
  void _map
  return obj
}

interface TestResult {
  label: string
  pass: boolean
  detail: string
}

const testResults = ref<TestResult[]>([])

function runTest() {
  const results: TestResult[] = []

  // 测试1: 基本对象
  const obj1 = { a: 1, b: 'hello', c: true }
  const cloned1 = deepClone(obj1)
  results.push({
    label: '基本对象拷贝',
    pass: JSON.stringify(cloned1) === JSON.stringify(obj1) && cloned1 !== obj1,
    detail: `原: ${JSON.stringify(obj1)} → 拷贝: ${JSON.stringify(cloned1)}`,
  })

  // 测试2: 嵌套对象
  const obj2 = { a: { b: { c: 1 } }, d: [1, 2, 3] }
  const cloned2 = deepClone(obj2)
  cloned2.a.b.c = 999
  results.push({
    label: '嵌套对象（修改拷贝不影响原对象）',
    pass: obj2.a.b.c === 1,
    detail: `修改拷贝后原值: ${obj2.a.b.c}（应为 1）`,
  })

  // 测试3: 数组拷贝
  const arr = [1, [2, 3], { a: 4 }]
  const clonedArr = deepClone(arr)
  results.push({
    label: '数组拷贝',
    pass: JSON.stringify(clonedArr) === JSON.stringify(arr) && clonedArr !== arr,
    detail: `原: ${JSON.stringify(arr)} → 拷贝: ${JSON.stringify(clonedArr)}`,
  })

  // 测试4: Date 对象
  const date = new Date('2024-01-01')
  const clonedDate = deepClone(date)
  results.push({
    label: 'Date 对象拷贝',
    pass: clonedDate instanceof Date && clonedDate.getTime() === date.getTime() && clonedDate !== date,
    detail: `原: ${date.toISOString()} → 拷贝: ${clonedDate instanceof Date ? clonedDate.toISOString() : String(clonedDate)}`,
  })

  // 测试5: 循环引用
  const circular: any = { a: 1 }
  circular.self = circular
  try {
    const clonedCircular = deepClone(circular)
    results.push({
      label: '循环引用处理',
      pass: clonedCircular.self === clonedCircular && clonedCircular !== circular,
      detail: '成功处理循环引用',
    })
  } catch {
    results.push({
      label: '循环引用处理',
      pass: false,
      detail: '抛出异常，未处理循环引用',
    })
  }

  testResults.value = results
}
</script>
