<template>
  <QAQuestion
    title="闭包原理：为什么函数能记住变量"
    :questions="questions"
  >
    <template #description>
      <p>本题深入考察闭包的底层原理，不仅要知道"是什么"，更要理解"为什么"。</p>
    </template>

    <template #extra>
      <el-divider>在线验证区</el-divider>
      <CodeRunner
        title="闭包原理验证"
        :initial-code="playgroundCode"
      />
    </template>
  </QAQuestion>
</template>

<script setup lang="ts">
import QAQuestion from '@/components/QAQuestion.vue'
import CodeRunner from '@/components/CodeRunner.vue'

const questions = [
  {
    q: '什么是闭包？用你自己的话解释一下。',
    a: `
      <p><strong>闭包</strong> = 函数 + 它能访问的外部变量的环境。</p>
      <p>当一个函数在其<strong>词法作用域之外</strong>被调用时，仍然可以访问定义时所在作用域的变量 — 这就形成了闭包。</p>
      <pre>function outer() {
  let count = 0           // 外部变量
  return function inner() { // 内部函数
    return ++count         // 即使 outer 已执行完，inner 仍能访问 count
  }
}
const fn = outer()
fn() // 1
fn() // 2 — count 被"记住"了</pre>
    `,
  },
  {
    q: '为什么函数能"记住"外部变量？底层机制是什么？',
    a: `
      <p><strong>核心机制：词法环境（Lexical Environment）和作用域链。</strong></p>
      <ol>
        <li>每个函数创建时，会携带一个 <code>[[Environment]]</code> 内部属性，指向<strong>创建时的词法环境</strong></li>
        <li>词法环境是一个对象，包含当前作用域的所有变量绑定 + 对外部环境的引用</li>
        <li>当内部函数被返回到外部后，虽然外部函数的执行上下文已出栈，但<strong>词法环境不会被回收</strong>（因为内部函数仍持有引用）</li>
        <li>访问变量时，沿作用域链向上查找：当前环境 → 外部环境 → ... → 全局环境</li>
      </ol>
      <p><strong>简单说</strong>：函数"记住"的不是变量的值，而是对变量所在<strong>环境的引用</strong>。只要环境还被引用，就不会被垃圾回收。</p>
    `,
  },
  {
    q: '闭包会导致内存泄漏吗？什么情况下需要注意？',
    a: `
      <p><strong>闭包本身不是内存泄漏</strong>，但使用不当会导致变量无法被回收：</p>
      <ul>
        <li><strong>定时器中的闭包</strong>：setInterval 引用外部变量，忘记 clearInterval</li>
        <li><strong>事件监听</strong>：addEventListener 的回调引用外部变量，忘记 removeEventListener</li>
        <li><strong>全局变量引用闭包</strong>：闭包函数赋给全局变量，永远不会被回收</li>
      </ul>
      <p><strong>解决</strong>：用完及时解除引用（= null）、清除定时器、移除事件监听。</p>
    `,
  },
  {
    q: '闭包有哪些实际应用场景？',
    a: `
      <ul>
        <li><strong>数据私有化</strong>：模拟私有变量（模块模式）</li>
        <li><strong>函数工厂</strong>：createCounter、createLogger</li>
        <li><strong>函数缓存</strong>：memoize — 缓存计算结果</li>
        <li><strong>柯里化</strong>：<code>const add5 = add(5); add5(3) // 8</code></li>
        <li><strong>防抖/节流</strong>：闭包保存 timer 变量</li>
        <li><strong>React Hooks</strong>：useState/useEffect 底层都依赖闭包</li>
      </ul>
    `,
  },
]

const playgroundCode = `// 1. 闭包"记住"变量
function createCounter() {
  let count = 0
  return {
    inc() { return ++count },
    get() { return count }
  }
}
const c = createCounter()
console.log('inc:', c.inc(), c.inc(), c.inc())
console.log('get:', c.get())

// 2. 闭包保存的是引用，不是值
function makeAdders() {
  const fns = []
  for (var i = 0; i < 3; i++) {
    fns.push(() => i)  // 都引用同一个 i
  }
  return fns
}
const adders = makeAdders()
console.log('var闭包陷阱:', adders[0](), adders[1](), adders[2]())  // 3, 3, 3

// 3. 用 let 修复
function makeAddersFixed() {
  const fns = []
  for (let i = 0; i < 3; i++) {
    fns.push(() => i)  // 每次循环 i 是新的绑定
  }
  return fns
}
const fixed = makeAddersFixed()
console.log('let修复:', fixed[0](), fixed[1](), fixed[2]())  // 0, 1, 2

// 4. 柯里化
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) return fn(...args)
    return (...more) => curried(...args, ...more)
  }
}
const add = curry((a, b, c) => a + b + c)
console.log('柯里化:', add(1)(2)(3), add(1, 2)(3))
`
</script>
