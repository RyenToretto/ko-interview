<template>
  <QAQuestion
    title="React 性能优化"
    :questions="questions"
  >
    <template #description>
      <p>本题考察 React 性能优化手段，包括 memo、useMemo、useCallback、代码分割以及 React 18 并发特性。</p>
    </template>
  </QAQuestion>
</template>

<script setup lang="ts">
import QAQuestion from '@/components/QAQuestion.vue'

const questions = [
  {
    q: 'React.memo / useMemo / useCallback 优化策略',
    a: `
      <p><strong>React.memo：</strong></p>
      <p>对函数组件做浅比较，props 未变则跳过重渲染。适合纯展示组件、列表项。</p>
      <p><strong>useMemo：</strong></p>
      <p>缓存计算结果，依赖不变则返回缓存值。用于昂贵计算、避免子组件因引用变化重渲染。</p>
      <p><strong>useCallback：</strong></p>
      <p>缓存函数引用，配合 React.memo 时避免因回调引用变化导致子组件重渲染。</p>
      <pre>// 组合使用
const MemoChild = React.memo(Child)
const data = useMemo(() => compute(data), [data])
const onSave = useCallback(() => save(id), [id])
return <MemoChild data={data} onSave={onSave} /></pre>
      <p><strong>注意：</strong>不要过度优化，先测量再优化。</p>
    `,
  },
  {
    q: 'React 代码分割 (React.lazy + Suspense)',
    a: `
      <p><strong>React.lazy：</strong>动态 import 组件，实现按需加载。</p>
      <p><strong>Suspense：</strong>在子组件加载时显示 fallback UI。</p>
      <pre>const LazyPage = React.lazy(() => import('./HeavyPage'))

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <LazyPage />
    </Suspense>
  )
}</pre>
      <p><strong>适用场景：</strong></p>
      <ul>
        <li>路由级懒加载，减少首屏 bundle</li>
        <li>弹窗、抽屉等非首屏组件</li>
        <li>条件渲染的重型组件</li>
      </ul>
    `,
  },
  {
    q: 'React 18 并发特性 (useTransition, useDeferredValue)',
    a: `
      <p><strong>useTransition：</strong></p>
      <p>将状态更新标记为「低优先级」，可被高优先级更新（如用户输入）打断，保持 UI 响应。</p>
      <pre>const [isPending, startTransition] = useTransition()
const [query, setQuery] = useState('')

const handleChange = (e) => {
  setQuery(e.target.value)           // 高优先级，立即更新
  startTransition(() => {
    setSearchResults(filter(query))  // 低优先级，可中断
  })
}</pre>
      <p><strong>useDeferredValue：</strong></p>
      <p>延迟更新某个值，让高优先级更新先完成，再更新该值。适合搜索联想、大列表过滤等。</p>
      <pre>const [query, setQuery] = useState('')
const deferredQuery = useDeferredValue(query)
// 用 deferredQuery 做昂贵计算，query 变化时先响应输入</pre>
    `,
  },
]
</script>
