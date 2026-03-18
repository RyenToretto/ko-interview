<template>
  <QAQuestion
    title="事件循环"
    :questions="questions"
  >
    <template #description>
      <p>本题考察对 JavaScript 事件循环机制的理解，包括宏任务、微任务的执行顺序。</p>
    </template>
  </QAQuestion>
</template>

<script setup lang="ts">
import QAQuestion from '@/components/QAQuestion.vue'

const questions = [
  {
    q: '请解释 JavaScript 的事件循环（Event Loop）机制。',
    a: `
      <p><strong>事件循环</strong>是 JS 处理异步操作的核心机制：</p>
      <ol>
        <li>执行同步代码（调用栈）</li>
        <li>同步代码执行完毕，检查微任务队列，依次执行所有微任务</li>
        <li>微任务队列清空后，从宏任务队列取出一个任务执行</li>
        <li>执行完一个宏任务后，再次检查微任务队列</li>
        <li>循环往复</li>
      </ol>
    `,
  },
  {
    q: '宏任务和微任务分别有哪些？',
    a: `
      <p><strong>宏任务（Macro Task）：</strong>setTimeout、setInterval、setImmediate(Node)、requestAnimationFrame、I/O、UI rendering</p>
      <p><strong>微任务（Micro Task）：</strong>Promise.then/catch/finally、MutationObserver、queueMicrotask、process.nextTick(Node)</p>
    `,
  },
  {
    q: '请说出以下代码的输出顺序：<br/><pre>console.log("1")\n\nsetTimeout(() => {\n  console.log("2")\n  Promise.resolve().then(() => console.log("3"))\n}, 0)\n\nPromise.resolve().then(() => {\n  console.log("4")\n  setTimeout(() => console.log("5"), 0)\n})\n\nconsole.log("6")</pre>',
    a: `
      <p><strong>输出顺序：1 → 6 → 4 → 2 → 3 → 5</strong></p>
      <p>解析：</p>
      <ol>
        <li>同步执行: 输出 "1"、"6"</li>
        <li>微任务: Promise 回调输出 "4"，并注册 setTimeout("5")</li>
        <li>宏任务: 第一个 setTimeout 输出 "2"，并注册 Promise("3")</li>
        <li>微任务: 输出 "3"</li>
        <li>宏任务: 输出 "5"</li>
      </ol>
    `,
  },
  {
    q: '请说出以下代码的输出顺序：<br/><pre>async function async1() {\n  console.log("async1 start")\n  await async2()\n  console.log("async1 end")\n}\n\nasync function async2() {\n  console.log("async2")\n}\n\nconsole.log("script start")\n\nsetTimeout(() => {\n  console.log("setTimeout")\n}, 0)\n\nasync1()\n\nnew Promise((resolve) => {\n  console.log("promise1")\n  resolve(undefined)\n}).then(() => {\n  console.log("promise2")\n})\n\nconsole.log("script end")</pre>',
    a: `
      <p><strong>输出顺序：</strong></p>
      <ol>
        <li>script start（同步）</li>
        <li>async1 start（同步，进入 async1）</li>
        <li>async2（同步，await 之前的部分）</li>
        <li>promise1（同步，Promise 构造函数）</li>
        <li>script end（同步）</li>
        <li>async1 end（微任务，await 后面相当于 .then）</li>
        <li>promise2（微任务）</li>
        <li>setTimeout（宏任务）</li>
      </ol>
    `,
  },
]
</script>
