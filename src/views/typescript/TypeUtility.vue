<template>
  <QAQuestion
    title="类型体操基础"
    :questions="questions"
  >
    <template #description>
      <p>本题考察对 TypeScript 内置工具类型和高级类型的理解。</p>
    </template>
  </QAQuestion>
</template>

<script setup lang="ts">
import QAQuestion from '@/components/QAQuestion.vue'

const questions = [
  {
    q: '请说明以下 TypeScript 内置工具类型的作用：Partial、Required、Pick、Omit、Record',
    a: `
      <ul>
        <li><code>Partial&lt;T&gt;</code> — 将 T 的所有属性变为可选</li>
        <li><code>Required&lt;T&gt;</code> — 将 T 的所有属性变为必选</li>
        <li><code>Pick&lt;T, K&gt;</code> — 从 T 中挑选指定的属性 K 组成新类型</li>
        <li><code>Omit&lt;T, K&gt;</code> — 从 T 中排除指定的属性 K 组成新类型</li>
        <li><code>Record&lt;K, V&gt;</code> — 构造键为 K 类型、值为 V 类型的对象类型</li>
      </ul>
    `,
  },
  {
    q: '请解释 Readonly、ReturnType、Parameters 的用法和场景。',
    a: `
      <ul>
        <li><code>Readonly&lt;T&gt;</code> — 将 T 所有属性变为只读，适用于不可变数据、配置对象等</li>
        <li><code>ReturnType&lt;T&gt;</code> — 获取函数类型 T 的返回值类型。例如 <code>ReturnType&lt;typeof fn&gt;</code></li>
        <li><code>Parameters&lt;T&gt;</code> — 获取函数类型 T 的参数类型元组。例如 <code>Parameters&lt;typeof fn&gt;</code></li>
      </ul>
    `,
  },
  {
    q: 'interface 和 type 有什么区别？分别在什么场景下使用？',
    a: `
      <p><strong>相同点：</strong>都能定义对象类型、支持泛型、可以相互继承/交叉</p>
      <p><strong>不同点：</strong></p>
      <ul>
        <li><code>interface</code> 支持声明合并（同名自动合并），type 不行</li>
        <li><code>type</code> 可以定义联合类型、元组、字面量类型等，interface 不行</li>
        <li><code>type</code> 可以用 <code>=</code> 赋值，更灵活（type A = B | C）</li>
        <li><code>interface</code> 用 extends 继承，type 用 & 交叉</li>
      </ul>
      <p><strong>建议：</strong>定义对象结构优先用 interface，需要联合/交叉/别名等用 type</p>
    `,
  },
  {
    q: '什么是类型守卫（Type Guard）？有哪些实现方式？',
    a: `
      <p><strong>类型守卫</strong>是运行时检查，帮助 TS 收窄类型范围。</p>
      <p><strong>方式：</strong></p>
      <ul>
        <li><code>typeof</code> — 判断基本类型：typeof x === 'string'</li>
        <li><code>instanceof</code> — 判断实例类型：x instanceof Date</li>
        <li><code>in</code> — 判断属性是否存在：'name' in obj</li>
        <li>自定义守卫函数 — <code>function isString(x: any): x is string</code></li>
        <li>可辨识联合 — 通过 kind/type 等字面量字段区分（switch case）</li>
      </ul>
    `,
  },
  {
    q: '请解释 as const 的作用。给出一个使用场景。',
    a: `
      <p><code>as const</code> 将值断言为字面量类型（最窄类型），同时使对象所有属性变为 readonly。</p>
      <p><strong>示例：</strong></p>
      <pre>const colors = ['red', 'green', 'blue'] as const
// 类型: readonly ['red', 'green', 'blue']
// 而非: string[]

type Color = typeof colors[number]
// 类型: 'red' | 'green' | 'blue'</pre>
      <p><strong>常见场景：</strong>定义枚举常量、路由表配置、API 端点等需要字面量类型推导的地方。</p>
    `,
  },
]
</script>
