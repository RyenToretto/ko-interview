<template>
  <QAQuestion
    title="生命周期"
    :questions="questions"
  >
    <template #description>
      <p>本题考察对 Vue 3 组合式 API 生命周期钩子的理解。</p>
    </template>
  </QAQuestion>
</template>

<script setup lang="ts">
import QAQuestion from '@/components/QAQuestion.vue'

const questions = [
  {
    q: 'Vue 3 有哪些生命周期钩子？请列举并说明执行时机。',
    a: `
      <p><strong>组合式 API 生命周期钩子：</strong></p>
      <ul>
        <li><code>onBeforeMount</code> — 组件挂载到 DOM 之前</li>
        <li><code>onMounted</code> — 组件挂载到 DOM 之后（可访问 DOM）</li>
        <li><code>onBeforeUpdate</code> — 响应式数据变化导致重新渲染之前</li>
        <li><code>onUpdated</code> — 重新渲染之后</li>
        <li><code>onBeforeUnmount</code> — 组件卸载之前（清理定时器、事件监听等）</li>
        <li><code>onUnmounted</code> — 组件卸载之后</li>
        <li><code>onActivated</code> — 被 keep-alive 缓存的组件激活时</li>
        <li><code>onDeactivated</code> — 被 keep-alive 缓存的组件停用时</li>
        <li><code>onErrorCaptured</code> — 捕获后代组件错误</li>
      </ul>
      <p>注意：<code>setup()</code> 本身相当于 <code>beforeCreate</code> 和 <code>created</code>。</p>
    `,
  },
  {
    q: 'Vue 2 和 Vue 3 的生命周期有什么区别？',
    a: `
      <table border="1" cellpadding="6" style="border-collapse: collapse; width: 100%">
        <tr><th>Vue 2（选项式）</th><th>Vue 3（组合式）</th></tr>
        <tr><td>beforeCreate</td><td>setup()</td></tr>
        <tr><td>created</td><td>setup()</td></tr>
        <tr><td>beforeMount</td><td>onBeforeMount</td></tr>
        <tr><td>mounted</td><td>onMounted</td></tr>
        <tr><td>beforeUpdate</td><td>onBeforeUpdate</td></tr>
        <tr><td>updated</td><td>onUpdated</td></tr>
        <tr><td>beforeDestroy</td><td>onBeforeUnmount</td></tr>
        <tr><td>destroyed</td><td>onUnmounted</td></tr>
      </table>
      <p>Vue 3 废弃了 <code>beforeDestroy</code> / <code>destroyed</code>，改为更语义化的 <code>onBeforeUnmount</code> / <code>onUnmounted</code>。</p>
    `,
  },
  {
    q: '父子组件的生命周期执行顺序是什么？',
    a: `
      <p><strong>挂载阶段：</strong>父 beforeMount → 子 beforeMount → 子 mounted → 父 mounted</p>
      <p><strong>更新阶段：</strong>父 beforeUpdate → 子 beforeUpdate → 子 updated → 父 updated</p>
      <p><strong>卸载阶段：</strong>父 beforeUnmount → 子 beforeUnmount → 子 unmounted → 父 unmounted</p>
      <p>总结：父组件等子组件完成后才执行自身的 mounted/updated/unmounted。</p>
    `,
  },
  {
    q: '在哪个生命周期钩子中发送网络请求最合适？为什么？',
    a: `
      <p>推荐在 <code>onMounted</code>（或 setup 中直接调用异步函数）中发送请求。</p>
      <p><strong>原因：</strong></p>
      <ul>
        <li>DOM 已挂载，如果请求结果需要操作 DOM 更安全</li>
        <li>SSR 场景下 onMounted 只在客户端执行，避免服务端重复请求</li>
        <li>如果不依赖 DOM，也可以在 setup 中直接调用（相当于 created 阶段）</li>
      </ul>
    `,
  },
]
</script>
