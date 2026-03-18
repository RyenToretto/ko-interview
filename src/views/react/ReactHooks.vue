<template>
  <QAQuestion
    title="React Hooks 核心"
    :questions="questions"
  >
    <template #description>
      <p>本题考察对 React Hooks 的理解，包括 useState、useReducer、useEffect、useMemo、useCallback、useRef 等核心 Hook 的区别和使用场景。</p>
    </template>
  </QAQuestion>
</template>

<script setup lang="ts">
import QAQuestion from '@/components/QAQuestion.vue'

const questions = [
  {
    q: 'useState 和 useReducer 的区别和使用场景',
    a: `
      <p><strong>区别：</strong></p>
      <ul>
        <li><strong>useState</strong>：适合简单状态，直接传入初始值，通过 setState 更新。</li>
        <li><strong>useReducer</strong>：适合复杂状态逻辑，state 由 reducer 函数根据 action 计算得出，支持 action 派发。</li>
      </ul>
      <p><strong>使用场景：</strong></p>
      <ul>
        <li>useState：计数器、开关、简单表单字段等。</li>
        <li>useReducer：多字段表单、状态机、复杂业务逻辑（如购物车、多步骤流程）。</li>
      </ul>
      <pre>// useState 示例
const [count, setCount] = useState(0)
setCount(c => c + 1)

// useReducer 示例
const [state, dispatch] = useReducer(reducer, { count: 0 })
dispatch({ type: 'INCREMENT' })</pre>
    `,
  },
  {
    q: 'useEffect 的执行时机、依赖数组为空/不传/有值的区别',
    a: `
      <p><strong>执行时机：</strong>useEffect 在 DOM 更新、浏览器绘制之后异步执行。</p>
      <p><strong>依赖数组三种情况：</strong></p>
      <ul>
        <li><strong>不传依赖数组</strong>：每次渲染后都执行。</li>
        <li><strong>空数组 []</strong>：仅在挂载后执行一次，常用于订阅、请求等「只做一次」的逻辑。</li>
        <li><strong>有值 [a, b]</strong>：当 a 或 b 变化时重新执行，用于响应依赖变化。</li>
      </ul>
      <pre>// 每次渲染都执行
useEffect(() => { console.log('run') })

// 仅挂载时执行
useEffect(() => { fetchData() }, [])

// 依赖变化时执行
useEffect(() => { fetchUser(id) }, [id])</pre>
    `,
  },
  {
    q: 'useMemo 和 useCallback 的区别，什么时候用',
    a: `
      <p><strong>区别：</strong></p>
      <ul>
        <li><strong>useMemo</strong>：缓存<strong>计算结果</strong>，返回 memo 后的值。</li>
        <li><strong>useCallback</strong>：缓存<strong>函数引用</strong>，返回 memo 后的函数。</li>
      </ul>
      <p><strong>使用场景：</strong></p>
      <ul>
        <li>useMemo：昂贵计算（如过滤/排序大列表）、避免子组件因引用变化而重渲染。</li>
        <li>useCallback：传给子组件的回调，避免因函数引用变化导致子组件重渲染（配合 React.memo）。</li>
      </ul>
      <pre>// useMemo：缓存计算结果
const filtered = useMemo(() =>
  items.filter(i => i.active), [items])

// useCallback：缓存函数引用
const handleClick = useCallback(() => {
  doSomething(id)
}, [id])</pre>
    `,
  },
  {
    q: 'useRef 的作用，和直接创建变量的区别',
    a: `
      <p><strong>useRef 作用：</strong></p>
      <ul>
        <li>保存 DOM 引用（如 input.focus()）</li>
        <li>保存可变值，且<strong>不触发重渲染</strong></li>
        <li>跨渲染周期保持同一引用</li>
      </ul>
      <p><strong>与普通变量的区别：</strong></p>
      <ul>
        <li>普通变量：每次渲染都会重新创建，无法跨渲染保持。</li>
        <li>useRef：.current 可变，但 ref 对象本身在组件生命周期内保持不变。</li>
      </ul>
      <pre>// DOM 引用
const inputRef = useRef(null)
inputRef.current?.focus()

// 保存上一次的值（不触发渲染）
const prevCount = useRef(count)
useEffect(() => { prevCount.current = count })</pre>
    `,
  },
]
</script>
