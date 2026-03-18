<template>
  <QAQuestion
    title="RxJS 响应式编程"
    :questions="questions"
  >
    <template #description>
      <p>本题考察对 RxJS 核心概念、常用操作符及在 Angular 中的典型使用场景的理解。</p>
    </template>
  </QAQuestion>
</template>

<script setup lang="ts">
import QAQuestion from '@/components/QAQuestion.vue'

const questions = [
  {
    q: 'Observable / Observer / Subscription 基本概念',
    a: `
      <p><strong>Observable（可观察对象）：</strong></p>
      <ul>
        <li>表示一个可调用的未来值或事件的集合，是惰性的（不订阅不执行）</li>
        <li>通过 <code>new Observable(subscriber => { ... })</code> 或 <code>of()</code>、<code>from()</code> 等创建</li>
        <li>可发出多个值、错误或完成信号</li>
      </ul>
      <p><strong>Observer（观察者）：</strong></p>
      <ul>
        <li>消费 Observable 的对象，包含 <code>next</code>、<code>error</code>、<code>complete</code> 三个回调</li>
        <li>通过 <code>subscribe(next, error, complete)</code> 或 <code>subscribe({ next, error, complete })</code> 传入</li>
      </ul>
      <p><strong>Subscription（订阅）：</strong></p>
      <ul>
        <li>表示 Observable 的执行，可通过 <code>unsubscribe()</code> 取消</li>
        <li>在 Angular 组件中应在 <code>ngOnDestroy</code> 中取消订阅，避免内存泄漏</li>
        <li>可使用 <code>takeUntil(destroy$)</code> 或 async 管道自动管理</li>
      </ul>
    `,
  },
  {
    q: '常用操作符 (map, filter, switchMap, mergeMap, debounceTime)',
    a: `
      <ul>
        <li><strong>map</strong> — 对每个值进行转换，类似数组的 map</li>
        <li><strong>filter</strong> — 过滤满足条件的值，类似数组的 filter</li>
        <li><strong>debounceTime(ms)</strong> — 在指定时间内无新值发出时才发出最新值，常用于搜索输入防抖</li>
        <li><strong>switchMap</strong> — 收到新值时取消上一个内部 Observable，只保留最新请求（适合搜索、路由参数变化）</li>
        <li><strong>mergeMap（flatMap）</strong> — 将每个值映射为 Observable 并合并输出，不取消之前的（适合并行请求）</li>
      </ul>
      <p><strong>典型用法示例：</strong></p>
      <pre>search$.pipe(
  debounceTime(300),
  filter(term => term.length >= 2),
  switchMap(term => this.http.get(\`/api/search?q=\${term}\`))
).subscribe(results => ...)</pre>
      <p><code>switchMap</code> 确保只处理最后一次搜索；<code>mergeMap</code> 会保留所有并发请求结果。</p>
    `,
  },
  {
    q: 'RxJS 在 Angular 中的典型使用场景（HTTP请求、事件处理）',
    a: `
      <p><strong>HTTP 请求：</strong></p>
      <ul>
        <li><code>HttpClient.get/post/...</code> 返回 Observable，需 subscribe 或配合 async 管道</li>
        <li>使用 <code>switchMap</code> 处理路由参数变化触发的请求，避免竞态</li>
        <li>使用 <code>catchError</code>、<code>retry</code> 处理错误和重试</li>
      </ul>
      <p><strong>事件处理：</strong></p>
      <ul>
        <li>使用 <code>fromEvent</code> 将 DOM 事件转为 Observable</li>
        <li>搜索框：<code>debounceTime</code> + <code>distinctUntilChanged</code> + <code>switchMap</code></li>
        <li>表单：<code>valueChanges</code> 本身是 Observable，可 pipe 进行校验、防抖</li>
      </ul>
      <p><strong>其他场景：</strong></p>
      <ul>
        <li>路由：<code>ActivatedRoute.params</code> 是 Observable</li>
        <li>异步管道：<code>async</code> 管道自动订阅/取消，无需手动管理</li>
        <li>Subject/BehaviorSubject 用于组件间通信或共享状态</li>
      </ul>
    `,
  },
]
</script>
