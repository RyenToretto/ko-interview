<template>
  <QuestionCard title="泛型" type="code">
    <template #description>
      <p>请完成以下泛型相关的编程任务：</p>
      <ol>
        <li>实现一个泛型函数 <code>identity</code></li>
        <li>实现一个泛型约束函数 <code>getProperty</code></li>
        <li>实现一个简单的泛型数据容器类 <code>Storage</code></li>
      </ol>
    </template>

    <el-card shadow="never">
      <template #header><strong>任务区域</strong></template>
      <el-button type="primary" @click="runTests">运行测试</el-button>
      <el-descriptions :column="1" border style="margin-top: 16px">
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

    <el-divider>在线练习区（JS 运行时验证逻辑）</el-divider>
    <CodeRunner
      title="泛型逻辑在线验证"
      :initial-code="playgroundCode"
    />
  </QuestionCard>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import QuestionCard from '@/components/QuestionCard.vue'
import CodeRunner from '@/components/CodeRunner.vue'

const playgroundCode = `// identity 函数（泛型的 JS 等价）
function identity(value) { return value }
console.log('identity(42):', identity(42))
console.log('identity("hello"):', identity('hello'))

// getProperty（keyof 约束的 JS 等价）
function getProperty(obj, key) { return obj[key] }
const person = { name: '张三', age: 25 }
console.log('getProperty name:', getProperty(person, 'name'))
console.log('getProperty age:', getProperty(person, 'age'))

// TypedStorage（泛型类的 JS 等价）
class TypedStorage {
  constructor() { this.store = new Map() }
  set(key, value) { this.store.set(key, value) }
  get(key) { return this.store.get(key) }
  has(key) { return this.store.has(key) }
  remove(key) { return this.store.delete(key) }
  getAll() { return Object.fromEntries(this.store) }
}

const s = new TypedStorage()
s.set('a', 1)
s.set('b', 2)
console.log('get a:', s.get('a'))
console.log('has b:', s.has('b'))
s.remove('a')
console.log('after remove, has a:', s.has('a'))
console.log('getAll:', s.getAll())
`

// ========== 任务1: 泛型 identity 函数 ==========
// TODO: 实现 identity 函数，接收任意类型参数并返回相同类型
// 要求使用泛型 <T>，而不是 any
function identity<T>(value: T): T {
  // 请实现
  void value
  return undefined as any
}

// ========== 任务2: 泛型约束 getProperty ==========
// TODO: 实现 getProperty 函数
// 接收一个对象和一个键名，返回对应的值
// 使用 keyof 约束键名必须是对象的属性
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  // 请实现
  void obj
  void key
  return undefined as any
}

// ========== 任务3: 泛型容器 ==========
// TODO: 实现泛型类 TypedStorage<T>
// 方法：set(key, value)、get(key)、has(key)、remove(key)、getAll()
class TypedStorage<T> {
  private store = new Map<string, T>()

  set(key: string, value: T): void {
    // 请实现
    void key
    void value
  }

  get(key: string): T | undefined {
    // 请实现
    void key
    return undefined
  }

  has(key: string): boolean {
    // 请实现
    void key
    return false
  }

  remove(key: string): boolean {
    // 请实现
    void key
    return false
  }

  getAll(): Map<string, T> {
    // 请实现
    return new Map()
  }
}

interface TestResult {
  label: string
  pass: boolean
  detail: string
}

const testResults = ref<TestResult[]>([])

function runTests() {
  const results: TestResult[] = []

  // 测试 identity
  const num = identity(42)
  const str = identity('hello')
  results.push({
    label: 'identity(42)',
    pass: num === 42,
    detail: `返回: ${num}`,
  })
  results.push({
    label: 'identity("hello")',
    pass: str === 'hello',
    detail: `返回: ${str}`,
  })

  // 测试 getProperty
  const person = { name: '张三', age: 25, city: '北京' }
  const name = getProperty(person, 'name')
  const age = getProperty(person, 'age')
  results.push({
    label: 'getProperty(person, "name")',
    pass: name === '张三',
    detail: `返回: ${name}`,
  })
  results.push({
    label: 'getProperty(person, "age")',
    pass: age === 25,
    detail: `返回: ${age}`,
  })

  // 测试 TypedStorage
  const storage = new TypedStorage<number>()
  storage.set('a', 1)
  storage.set('b', 2)
  results.push({
    label: 'TypedStorage: set + get',
    pass: storage.get('a') === 1 && storage.get('b') === 2,
    detail: `get("a")=${storage.get('a')}, get("b")=${storage.get('b')}`,
  })
  results.push({
    label: 'TypedStorage: has',
    pass: storage.has('a') === true && storage.has('c') === false,
    detail: `has("a")=${storage.has('a')}, has("c")=${storage.has('c')}`,
  })
  storage.remove('a')
  results.push({
    label: 'TypedStorage: remove',
    pass: storage.has('a') === false,
    detail: `remove("a") 后 has("a")=${storage.has('a')}`,
  })

  testResults.value = results
}
</script>
