<template>
  <QAQuestion
    title="Fiber 架构与虚拟 DOM"
    :questions="questions"
  >
    <template #description>
      <p>本题考察对 React Fiber 架构、调和（Reconciliation）过程以及 key 在列表渲染中作用的理解。</p>
    </template>
  </QAQuestion>
</template>

<script setup lang="ts">
import QAQuestion from '@/components/QAQuestion.vue'

const questions = [
  {
    q: 'React Fiber 是什么？解决了什么问题？',
    a: `
      <p><strong>Fiber 是什么：</strong></p>
      <p>Fiber 是 React 16 引入的新的协调引擎，将原来的同步递归更新改为可中断的异步更新。每个 Fiber 节点对应一个虚拟 DOM 节点，包含 type、key、props、stateNode、child、sibling、return 等属性。</p>
      <p><strong>解决的问题：</strong></p>
      <ul>
        <li><strong>长时间占用主线程</strong>：旧版递归 diff 不可中断，大组件树会阻塞主线程，导致卡顿。</li>
        <li><strong>无法优先处理高优先级更新</strong>：如用户输入、动画等需要及时响应。</li>
        <li><strong>任务可中断、可恢复</strong>：Fiber 将工作拆成小单元，每完成一个单元可让出主线程，实现时间切片（Time Slicing）。</li>
      </ul>
    `,
  },
  {
    q: 'React 的调和（Reconciliation）过程',
    a: `
      <p><strong>调和过程：</strong></p>
      <ol>
        <li><strong>构建 Fiber 树</strong>：根据 JSX 生成 Fiber 节点树，建立 child、sibling、return 关系。</li>
        <li><strong>Diff 算法</strong>：对比新旧 Fiber，按类型（type）、key 判断复用或新建，标记 effectTag（如 UPDATE、PLACEMENT、DELETION）。</li>
        <li><strong>Commit 阶段</strong>：将 effect 应用到真实 DOM，执行生命周期和 Hooks 副作用。</li>
      </ol>
      <p><strong>Diff 策略：</strong></p>
      <ul>
        <li>同层比较，不跨层级</li>
        <li>类型不同则直接替换子树</li>
        <li>列表通过 key 优化复用</li>
      </ul>
    `,
  },
  {
    q: 'key 在列表渲染中的作用',
    a: `
      <p><strong>作用：</strong></p>
      <ul>
        <li>帮助 React 识别列表中<strong>哪些项是新增、删除或移动</strong>的。</li>
        <li>避免用 index 作为 key 时，插入/删除导致错误复用和状态错乱。</li>
      </ul>
      <p><strong>最佳实践：</strong></p>
      <ul>
        <li>使用<strong>稳定唯一</strong>的 id（如数据中的 id 字段）。</li>
        <li>避免用 index 作为 key（列表会重排时）。</li>
        <li>key 应在兄弟节点间唯一，不必全局唯一。</li>
      </ul>
      <pre>// 推荐：使用唯一 id
{items.map(item => (
  <Item key={item.id} data={item} />
))}

// 不推荐：index 在插入/删除时会导致问题
{items.map((item, i) => (
  <Item key={i} data={item} />
))}</pre>
    `,
  },
]
</script>
