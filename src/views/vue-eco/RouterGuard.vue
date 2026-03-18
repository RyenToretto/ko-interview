<template>
  <QAQuestion title="Vue Router 路由守卫" :questions="questions">
    <template #description>
      <p>本题考察 Vue Router 的导航守卫机制及实际应用场景。</p>
    </template>
  </QAQuestion>
</template>

<script setup lang="ts">
import QAQuestion from '@/components/QAQuestion.vue'

const questions = [
  {
    q: 'Vue Router 有哪些导航守卫？执行顺序是什么？',
    a: `
      <p><strong>三类守卫：</strong></p>
      <ul>
        <li><strong>全局守卫</strong>：beforeEach / beforeResolve / afterEach</li>
        <li><strong>路由独享</strong>：beforeEnter（在路由配置中定义）</li>
        <li><strong>组件内</strong>：onBeforeRouteEnter / onBeforeRouteUpdate / onBeforeRouteLeave</li>
      </ul>
      <p><strong>完整执行顺序（从 A 页面跳到 B 页面）：</strong></p>
      <ol>
        <li>A 的 onBeforeRouteLeave</li>
        <li>全局 beforeEach</li>
        <li>B 路由的 beforeEnter</li>
        <li>B 的 onBeforeRouteEnter</li>
        <li>全局 beforeResolve</li>
        <li>全局 afterEach</li>
      </ol>
    `,
  },
  {
    q: '如何用路由守卫实现登录鉴权？',
    a: `
      <pre>router.beforeEach((to, from) => {
  const token = localStorage.getItem('token')
  if (to.meta.requiresAuth && !token) {
    return { name: 'Login', query: { redirect: to.fullPath } }
  }
})</pre>
      <p>登录成功后：<code>router.push(route.query.redirect || '/')</code></p>
    `,
  },
  {
    q: 'hash 模式和 history 模式有什么区别？',
    a: `
      <table border="1" cellpadding="6" style="border-collapse: collapse; width: 100%">
        <tr><th>对比项</th><th>hash</th><th>history</th></tr>
        <tr><td>URL 形式</td><td>example.com/#/home</td><td>example.com/home</td></tr>
        <tr><td>原理</td><td>hashchange 事件</td><td>History API (pushState)</td></tr>
        <tr><td>SEO</td><td>不友好</td><td>友好</td></tr>
        <tr><td>服务器配置</td><td>不需要</td><td>需要 fallback 到 index.html</td></tr>
        <tr><td>兼容性</td><td>全兼容</td><td>IE10+</td></tr>
      </table>
    `,
  },
]
</script>
