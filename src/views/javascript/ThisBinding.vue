<template>
  <QuestionCard title="this 指向" type="code">
    <template #description>
      <p>JavaScript 中 <code>this</code> 的指向由<strong>调用方式</strong>决定，而非定义位置。请分析以下场景中 <code>this</code> 的指向，并完成编码任务。</p>
      <p>优先级：new &gt; call/apply/bind &gt; 方法调用 &gt; 默认绑定；箭头函数继承外层 this。</p>
    </template>

    <el-card shadow="never">
      <template #header><strong>任务1: 分析 this 指向（输出预测）</strong></template>
      <p style="margin-bottom: 12px">请预测每个场景的输出结果，然后点击运行验证：</p>
      <el-button type="primary" @click="runScenarios">运行全部场景</el-button>
      <el-descriptions :column="1" border style="margin-top: 12px">
        <el-descriptions-item
          v-for="(s, i) in scenarios"
          :key="i"
          :label="'场景' + (i + 1) + ': ' + s.label"
        >
          <span v-if="s.result !== undefined">{{ s.result }}</span>
          <span v-else style="color: #909399">点击运行查看</span>
        </el-descriptions-item>
      </el-descriptions>
    </el-card>

    <el-card shadow="never">
      <template #header><strong>任务2: 手动实现 bind 函数</strong></template>
      <p style="margin-bottom: 12px">
        实现 <code>myBind</code>，使其行为与 <code>Function.prototype.bind</code> 一致
      </p>
      <el-button type="success" @click="testMyBind">测试 myBind</el-button>
      <p style="margin-top: 12px">{{ bindResult }}</p>
    </el-card>

    <el-card shadow="never">
      <template #header><strong>任务3: 修复 this 丢失问题</strong></template>
      <pre style="background: #f5f7fa; padding: 12px; border-radius: 6px; margin-bottom: 12px">const obj = {
  name: '张三',
  greet() {
    setTimeout(function() {
      console.log('Hello, ' + this.name)
    }, 100)
  }
}
obj.greet() // 输出 "Hello, undefined"</pre>
      <p>请修复 <code>fixedGreet</code> 使其正确输出 "Hello, 张三"</p>
      <el-button type="warning" @click="runFixedGreet">运行修复版本</el-button>
      <p style="margin-top: 12px">{{ greetResult }}</p>
    </el-card>
  </QuestionCard>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import QuestionCard from '@/components/QuestionCard.vue'

// ========== 任务1: this 指向分析 ==========
const scenarios = reactive([
  {
    label: '普通函数调用',
    code: '在非严格模式下，直接调用函数 foo()，this 指向？',
    result: undefined as string | undefined,
  },
  {
    label: '方法调用',
    code: 'obj.method() 中 this 指向？',
    result: undefined as string | undefined,
  },
  {
    label: '箭头函数',
    code: '箭头函数中的 this 指向？',
    result: undefined as string | undefined,
  },
  {
    label: 'call/apply 显式绑定',
    code: 'foo.call(obj) 中 this 指向？',
    result: undefined as string | undefined,
  },
  {
    label: 'new 构造调用',
    code: 'new Foo() 中 this 指向？',
    result: undefined as string | undefined,
  },
])

function runScenarios() {
  // 场景1: 普通函数
  const name1 = 'window上下文'
  function foo(this: any) { return this === window ? 'window (全局对象)' : String(this) }
  scenarios[0].result = `this → ${foo()}`

  // 场景2: 方法调用
  const obj2 = {
    name: '对象obj',
    getName(this: any) { return this.name },
  }
  scenarios[1].result = `this.name → "${obj2.getName()}"`

  // 场景3: 箭头函数
  const obj3 = {
    name: '对象obj',
    getName: () => name1,
  }
  scenarios[2].result = `箭头函数继承外层 this → "${obj3.getName()}" (不是 obj3)`

  // 场景4: call 显式绑定
  function greet(this: any) { return this.name }
  const target = { name: '显式绑定目标' }
  scenarios[3].result = `this.name → "${greet.call(target)}"`

  // 场景5: new 构造
  function Person(this: any, n: string) { this.name = n }
  const p = new (Person as any)('new创建的实例')
  scenarios[4].result = `this.name → "${p.name}" (新创建的实例)`
}

// ========== 任务2: 手写 bind ==========
// TODO: 实现 myBind 函数
// 要求：fn.myBind(context, ...args) 返回一个新函数
// 新函数调用时，this 指向 context，且支持预填参数
function myBind(fn: Function, context: any, ...preArgs: any[]) {
  // 请实现
  void fn
  void context
  void preArgs
  return (...args: any[]) => {
    return undefined
  }
}

const bindResult = ref('')

function testMyBind() {
  function greet(this: any, greeting: string, punctuation: string) {
    return `${greeting}, ${this.name}${punctuation}`
  }
  const person = { name: '李四' }
  const boundGreet = myBind(greet, person, 'Hello')
  const result = boundGreet('!')
  bindResult.value = `myBind 结果: ${result}（期望: "Hello, 李四!"）`
}

// ========== 任务3: 修复 this 丢失 ==========
const greetResult = ref('')

// TODO: 修复以下函数中 setTimeout 回调里的 this 丢失问题
// 提示：可以使用箭头函数、bind、或保存 this 引用
function fixedGreet(): Promise<string> {
  const obj = {
    name: '张三',
    greet() {
      return new Promise<string>((resolve) => {
        setTimeout(function (this: any) {
          resolve('Hello, ' + this.name)
        }, 100)
      })
    },
  }
  return obj.greet()
}

async function runFixedGreet() {
  greetResult.value = '执行中...'
  const result = await fixedGreet()
  greetResult.value = `输出: "${result}"（期望: "Hello, 张三"）`
}
</script>
