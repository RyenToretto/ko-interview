<template>
  <QAQuestion
    title="垃圾回收机制"
    :questions="questions"
  >
    <template #description>
      <p>本题考察对 JavaScript 内存管理和垃圾回收（GC）机制的理解。</p>
    </template>

    <template #extra>
      <el-divider>在线验证区</el-divider>
      <CodeRunner
        title="内存引用验证"
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
    q: 'JavaScript 的垃圾回收机制是什么？有哪些算法？',
    a: `
      <p>JS 引擎自动管理内存，开发者不需要手动释放。核心算法：</p>
      <p><strong>1. 标记-清除（Mark-and-Sweep）— 现代主流算法</strong></p>
      <ol>
        <li>从根对象（window/global）出发，递归标记所有可达（reachable）的对象</li>
        <li>未被标记的对象视为垃圾，回收其内存</li>
      </ol>
      <p><strong>2. 引用计数（Reference Counting）— 早期算法</strong></p>
      <ul>
        <li>每个对象维护一个引用计数，计数为 0 时回收</li>
        <li><strong>致命缺陷</strong>：无法处理循环引用（A → B → A，计数永远不为 0）</li>
        <li>IE6/7 的 DOM 对象使用此算法，导致著名的内存泄漏问题</li>
      </ul>
    `,
  },
  {
    q: 'V8 引擎的垃圾回收策略是怎样的？',
    a: `
      <p>V8 采用<strong>分代回收</strong>策略，将堆内存分为两代：</p>
      <p><strong>新生代（Young Generation）— Scavenge 算法</strong></p>
      <ul>
        <li>空间小（1-8MB），存放生命周期短的对象</li>
        <li>分为 From 和 To 两个半空间</li>
        <li>标记 From 中存活对象 → 复制到 To → 角色互换</li>
        <li>对象经历两次 GC 仍存活 → 晋升到老生代</li>
      </ul>
      <p><strong>老生代（Old Generation）— Mark-Sweep + Mark-Compact</strong></p>
      <ul>
        <li>空间大，存放长寿对象</li>
        <li>Mark-Sweep：标记存活对象，清除未标记的</li>
        <li>Mark-Compact：标记后将存活对象移到一端，整理碎片</li>
        <li>使用<strong>增量标记</strong>（Incremental Marking）避免主线程长时间暂停</li>
      </ul>
    `,
  },
  {
    q: '常见的内存泄漏场景有哪些？如何排查？',
    a: `
      <p><strong>常见泄漏场景：</strong></p>
      <ul>
        <li><strong>全局变量</strong>：未用 let/const 声明，意外挂到 window 上</li>
        <li><strong>闭包</strong>：不必要地持有大对象的引用</li>
        <li><strong>定时器</strong>：setInterval 未清除</li>
        <li><strong>DOM 引用</strong>：JS 中保存了已从 DOM 移除的元素引用</li>
        <li><strong>事件监听</strong>：addEventListener 未配对 removeEventListener</li>
        <li><strong>Map/Set</strong>：用对象作 key 但忘记删除（用 WeakMap/WeakSet 解决）</li>
      </ul>
      <p><strong>排查工具：</strong></p>
      <ul>
        <li>Chrome DevTools → Memory → Heap Snapshot（对比两次快照）</li>
        <li>Performance Monitor → JS Heap Size</li>
        <li>Timeline Recording 观察内存趋势</li>
      </ul>
    `,
  },
  {
    q: 'WeakMap 和 WeakSet 与普通 Map/Set 有什么区别？为什么能防止内存泄漏？',
    a: `
      <p><strong>核心区别：</strong>WeakMap/WeakSet 对 key 是<strong>弱引用</strong>，不阻止垃圾回收。</p>
      <table border="1" cellpadding="6" style="border-collapse: collapse; width: 100%">
        <tr><th>对比项</th><th>Map / Set</th><th>WeakMap / WeakSet</th></tr>
        <tr><td>key 类型</td><td>任意值</td><td>只能是对象</td></tr>
        <tr><td>引用类型</td><td>强引用（阻止 GC）</td><td>弱引用（不阻止 GC）</td></tr>
        <tr><td>可枚举</td><td>是（可 forEach / size）</td><td>否（不可遍历、无 size）</td></tr>
        <tr><td>典型场景</td><td>通用数据结构</td><td>缓存、DOM 元数据、私有数据</td></tr>
      </table>
      <pre>const wm = new WeakMap()
let obj = { data: 'heavy' }
wm.set(obj, '元数据')
obj = null  // obj 可被 GC，WeakMap 中的条目也自动消失</pre>
    `,
  },
]

const playgroundCode = `// 引用计数 vs 标记清除
let a = { name: 'obj1' }
let b = a            // 引用计数: 2
a = null             // 引用计数: 1，b 还在引用
console.log('b 仍可访问:', b.name)
b = null             // 引用计数: 0，可以被回收

// 循环引用（引用计数无法回收，标记清除可以）
function circularRef() {
  let x = {}
  let y = {}
  x.ref = y
  y.ref = x
  // 函数执行完后 x, y 从根不可达 → 标记清除可回收
}
circularRef()
console.log('循环引用函数已执行，对象将被 GC 回收')

// WeakMap 弱引用演示
const cache = new WeakMap()
let user = { name: '张三' }
cache.set(user, { visits: 10 })
console.log('cache 有 user:', cache.has(user))
user = null  // user 可被 GC
console.log('user 置 null 后，WeakMap 条目将自动消失（无法直接验证）')

// 内存泄漏示例：全局变量
function leak() {
  // 忘记 let/const，变量泄漏到全局
  // leaked = 'oops'  // 取消注释会挂到 globalThis
}
leak()
console.log('全局泄漏检查: typeof leaked =', typeof globalThis.leaked)
`
</script>
