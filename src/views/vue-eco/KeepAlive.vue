<template>
  <QAQuestion title="keep-alive 组件缓存" :questions="questions">
    <template #description>
      <p>本题考察 Vue 内置组件 keep-alive 的缓存机制和使用场景。</p>
    </template>
  </QAQuestion>
</template>

<script setup lang="ts">
import QAQuestion from '@/components/QAQuestion.vue'

const questions = [
  {
    q: 'keep-alive 的作用是什么？有哪些 props？',
    a: `
      <p><strong>作用</strong>：缓存动态组件实例，避免反复创建销毁，保留状态。</p>
      <p><strong>Props：</strong></p>
      <ul>
        <li><code>include</code>：只缓存匹配的组件（字符串/正则/数组）</li>
        <li><code>exclude</code>：排除匹配的组件不缓存</li>
        <li><code>max</code>：最多缓存实例数（LRU 淘汰策略）</li>
      </ul>
      <pre>&lt;keep-alive :include="['Home', 'List']" :max="10"&gt;
  &lt;router-view /&gt;
&lt;/keep-alive&gt;</pre>
    `,
  },
  {
    q: 'keep-alive 对应的生命周期钩子？',
    a: `
      <ul>
        <li><code>onActivated</code>：组件从缓存中激活时调用（每次进入）</li>
        <li><code>onDeactivated</code>：组件被缓存（离开）时调用</li>
      </ul>
      <p><strong>注意</strong>：被缓存的组件不会触发 onMounted/onUnmounted。首次进入触发 onMounted + onActivated，后续只触发 onActivated。</p>
    `,
  },
  {
    q: 'keep-alive 的 LRU 缓存策略是什么？',
    a: `
      <p><strong>LRU（Least Recently Used）</strong>：当缓存数量超过 max 时，淘汰<strong>最近最少使用</strong>的组件实例。</p>
      <p>每次访问缓存组件时，将其移到最新位置。淘汰时移除最旧的。</p>
    `,
  },
]
</script>
