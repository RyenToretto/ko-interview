<template>
  <QAQuestion
    title="虚拟 DOM 与 Diff 算法"
    :questions="questions"
  >
    <template #description>
      <p>本题考察对虚拟 DOM 的概念、作用以及 Vue3 Diff 算法优化的理解。</p>
    </template>
  </QAQuestion>
</template>

<script setup lang="ts">
import QAQuestion from '@/components/QAQuestion.vue'

const questions = [
  {
    q: '什么是虚拟 DOM？为什么需要虚拟 DOM？',
    a: `
      <p><strong>虚拟 DOM</strong>：用 JavaScript 对象（VNode）描述真实 DOM 结构的轻量级副本。</p>
      <pre>// 真实 DOM
&lt;div class="box"&gt;&lt;span&gt;hello&lt;/span&gt;&lt;/div&gt;

// 虚拟 DOM
{
  tag: 'div',
  props: { class: 'box' },
  children: [
    { tag: 'span', children: 'hello' }
  ]
}</pre>
      <p><strong>为什么需要：</strong></p>
      <ul>
        <li>直接操作 DOM 代价高昂（重排/重绘），虚拟 DOM 可以批量计算差异后一次性更新</li>
        <li>提供跨平台能力（同一套虚拟 DOM 可渲染到浏览器、原生 App、SSR）</li>
        <li>声明式编程：开发者描述"状态"，框架自动高效更新 DOM</li>
      </ul>
    `,
  },
  {
    q: 'Vue3 的 Diff 算法流程是怎样的？',
    a: `
      <p>Vue3 采用<strong>双端对比 + 最长递增子序列</strong>优化：</p>
      <ol>
        <li><strong>头头对比</strong>：从头部开始，相同节点 patch 复用</li>
        <li><strong>尾尾对比</strong>：从尾部开始，相同节点 patch 复用</li>
        <li><strong>新增节点</strong>：旧列表遍历完但新列表还有，新增剩余节点</li>
        <li><strong>删除节点</strong>：新列表遍历完但旧列表还有，删除多余节点</li>
        <li><strong>乱序对比</strong>：建立 key → index 映射表，使用最长递增子序列（LIS）算法最小化 DOM 移动</li>
      </ol>
      <p><strong>关键优化</strong>：LIS 算法确保已排好序的节点不动，只移动必要的节点。</p>
    `,
  },
  {
    q: 'Vue3 对比 Vue2 在编译和渲染上做了哪些优化？',
    a: `
      <p><strong>编译时优化：</strong></p>
      <ul>
        <li><strong>静态提升</strong>（hoistStatic）：静态节点只创建一次，后续 render 直接复用</li>
        <li><strong>Patch Flags</strong>：编译时标记动态属性类型（TEXT / CLASS / STYLE 等），diff 时只对比动态部分</li>
        <li><strong>Block Tree</strong>：将模板按动态节点分块，跳过静态子树对比</li>
        <li><strong>事件缓存</strong>（cacheHandlers）：内联事件处理函数只创建一次</li>
      </ul>
      <p><strong>效果</strong>：更新性能提升 1.3-2 倍，内存占用减少约 50%。</p>
    `,
  },
  {
    q: 'v-for 中 key 的作用是什么？为什么不建议用 index 作为 key？',
    a: `
      <p><strong>key 的作用</strong>：作为 VNode 的唯一标识，帮助 Diff 算法高效复用和排序节点。</p>
      <p><strong>不用 index 的原因</strong>：</p>
      <ul>
        <li>列表新增/删除/排序时，index 会变，导致 key 与实际数据错位</li>
        <li>框架无法正确复用 DOM，会产生不必要的重建（性能损失）</li>
        <li>有状态组件（如 input）会出现数据错乱 bug</li>
      </ul>
      <p><strong>推荐</strong>：使用数据的唯一 ID 作为 key。</p>
    `,
  },
]
</script>
