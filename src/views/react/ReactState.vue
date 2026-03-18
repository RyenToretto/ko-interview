<template>
  <QAQuestion
    title="React 状态管理"
    :questions="questions"
  >
    <template #description>
      <p>本题考察对 React 状态管理方案的理解，包括 Context、Redux、MobX、Zustand 以及状态提升与组合模式。</p>
    </template>
  </QAQuestion>
</template>

<script setup lang="ts">
import QAQuestion from '@/components/QAQuestion.vue'

const questions = [
  {
    q: 'React Context 的使用场景和性能问题',
    a: `
      <p><strong>使用场景：</strong></p>
      <ul>
        <li>主题、语言、用户信息等<strong>全局共享</strong>且不常变化的数据。</li>
        <li>避免 props 逐层传递（prop drilling）。</li>
      </ul>
      <p><strong>性能问题：</strong></p>
      <ul>
        <li>Context 值变化时，<strong>所有消费该 Context 的组件都会重渲染</strong>。</li>
        <li>大对象或频繁更新的值会导致不必要的渲染。</li>
      </ul>
      <p><strong>优化方案：</strong></p>
      <ul>
        <li>拆分 Context（按用途拆成多个小 Context）</li>
        <li>使用 useMemo 包装 value，避免每次渲染创建新对象</li>
        <li>将状态逻辑抽到 Zustand/Redux 等，Context 只传 store</li>
      </ul>
      <pre>// 拆分 Context 减少重渲染
const ThemeContext = createContext(null)
const UserContext = createContext(null)</pre>
    `,
  },
  {
    q: 'Redux vs MobX vs Zustand 对比',
    a: `
      <p><strong>Redux：</strong></p>
      <ul>
        <li>单向数据流，纯函数 reducer，不可变更新。</li>
        <li>适合大型应用，可预测性强，但样板代码多。</li>
      </ul>
      <p><strong>MobX：</strong></p>
      <ul>
        <li>响应式，可变状态，自动追踪依赖。</li>
        <li>写法简洁，但「魔法」较多，调试相对不直观。</li>
      </ul>
      <p><strong>Zustand：</strong></p>
      <ul>
        <li>轻量、API 简单，基于 Hook，无 Provider。</li>
        <li>按需订阅，自动做浅比较，减少重渲染。</li>
      </ul>
      <pre>// Zustand 示例
const useStore = create((set) => ({
  count: 0,
  inc: () => set(s => ({ count: s.count + 1 }))
}))</pre>
    `,
  },
  {
    q: 'React 中状态提升和组合模式',
    a: `
      <p><strong>状态提升（Lifting State Up）：</strong></p>
      <p>将多个组件需要共享的状态，提升到它们共同的父组件中管理，通过 props 向下传递，通过回调向上更新。</p>
      <pre>// 状态在父组件，子组件通过 props 接收和更新
function Parent() {
  const [value, setValue] = useState('')
  return (
    <>
      <ChildA value={value} onChange={setValue} />
      <ChildB value={value} />
    </>
  )
}</pre>
      <p><strong>组合模式（Composition）：</strong></p>
      <p>通过 children、render props 或 slot 等方式，将 UI 结构和逻辑组合起来，而非通过 props 层层传递大量数据。</p>
      <pre>// 组合：父组件控制结构，子组件负责展示
function Layout({ sidebar, content }) {
  return (
    <div>
      <aside>{sidebar}</aside>
      <main>{content}</main>
    </div>
  )
}</pre>
    `,
  },
]
</script>
