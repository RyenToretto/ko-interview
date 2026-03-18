<template>
  <QAQuestion
    title="JS 单线程为什么能异步"
    :questions="questions"
  >
    <template #description>
      <p>本题考察对 JavaScript 运行时架构的全局理解：单线程模型 + 事件循环 + 宿主环境协作。</p>
    </template>

    <template #extra>
      <el-divider>在线验证区</el-divider>
      <CodeRunner
        title="单线程异步验证"
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
    q: 'JavaScript 是单线程的，为什么还能实现异步操作？',
    a: `
      <p><strong>关键答案：JS 引擎是单线程的，但宿主环境（浏览器/Node.js）不是。</strong></p>
      <p>异步能力来自<strong>三方协作</strong>：</p>
      <ol>
        <li><strong>JS 引擎（V8）</strong>：单线程，只负责执行调用栈中的代码</li>
        <li><strong>宿主环境（浏览器）</strong>：提供多线程能力 — 网络线程、定时器线程、渲染线程等</li>
        <li><strong>事件循环（Event Loop）</strong>：协调引擎和宿主环境，将异步任务的回调放入队列</li>
      </ol>
      <pre>console.log('1')        // JS 引擎执行
setTimeout(cb, 1000)    // 交给浏览器定时器线程
fetch(url)              // 交给浏览器网络线程
console.log('2')        // JS 引擎继续执行
// ...1 秒后，定时器线程把 cb 放入任务队列
// ...网络响应后，网络线程把回调放入任务队列
// 事件循环从队列取出回调，交给 JS 引擎执行</pre>
    `,
  },
  {
    q: '浏览器有哪些线程？各自负责什么？',
    a: `
      <p><strong>浏览器是多进程多线程的：</strong></p>
      <ul>
        <li><strong>JS 引擎线程</strong>：执行 JS 代码（与渲染线程互斥）</li>
        <li><strong>渲染线程（GUI）</strong>：解析 HTML/CSS，构建渲染树，绘制页面</li>
        <li><strong>定时器线程</strong>：处理 setTimeout/setInterval 计时</li>
        <li><strong>网络线程</strong>：处理 HTTP 请求（XMLHttpRequest/fetch）</li>
        <li><strong>事件触发线程</strong>：管理事件循环，将满足条件的回调放入任务队列</li>
      </ul>
      <p><strong>注意</strong>：JS 引擎线程与渲染线程<strong>互斥</strong> — JS 执行时不能渲染，渲染时不能执行 JS。这就是为什么长时间 JS 计算会导致页面卡顿。</p>
    `,
  },
  {
    q: 'Web Worker 是什么？它和主线程是什么关系？',
    a: `
      <p><strong>Web Worker</strong> 可以在后台线程中运行 JS 代码，不阻塞主线程。</p>
      <p><strong>特点：</strong></p>
      <ul>
        <li>独立线程，与主线程并行执行</li>
        <li>通过 <code>postMessage</code> / <code>onmessage</code> 与主线程通信</li>
        <li><strong>不能访问 DOM</strong>、window、document</li>
        <li>适合 CPU 密集型计算（大数据处理、图像处理、加密等）</li>
      </ul>
      <pre>// 主线程
const worker = new Worker('worker.js')
worker.postMessage({ data: heavyData })
worker.onmessage = (e) => console.log('结果:', e.data)

// worker.js
self.onmessage = (e) => {
  const result = heavyCompute(e.data)
  self.postMessage(result)
}</pre>
    `,
  },
  {
    q: '为什么 JS 要设计成单线程？不能改成多线程吗？',
    a: `
      <p><strong>历史原因：</strong>JS 诞生于 1995 年，设计初衷是浏览器脚本语言，操作 DOM。如果多线程同时修改 DOM，会导致竞态条件和不一致性。</p>
      <p><strong>技术原因：</strong></p>
      <ul>
        <li>DOM 操作的原子性无法保证（一个线程删除节点，另一个线程在读取）</li>
        <li>多线程需要锁机制，大幅增加复杂度</li>
        <li>单线程 + 事件循环的模型已经能很好地处理 I/O 密集型场景</li>
      </ul>
      <p><strong>现代补充：</strong>通过 Web Worker、SharedArrayBuffer + Atomics 等方式，可以在需要时利用多线程。</p>
    `,
  },
]

const playgroundCode = `// 证明 JS 是单线程的：同步代码先执行完
console.log('1 - 同步')
setTimeout(() => console.log('2 - 宏任务'), 0)
Promise.resolve().then(() => console.log('3 - 微任务'))
console.log('4 - 同步')

// 输出顺序: 1 → 4 → 3 → 2
// 解读: 同步代码全部执行完 → 微任务 → 宏任务

// 模拟长耗时操作阻塞主线程
const start = Date.now()
// while (Date.now() - start < 100) {} // 取消注释会阻塞 100ms
console.log('5 - 同步计算完成')

// setTimeout 的最小延迟
setTimeout(() => console.log('6 - setTimeout(0) 实际延迟约 4ms'), 0)
`
</script>
