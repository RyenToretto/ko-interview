<template>
  <QAQuestion title="设计模式与架构" :questions="questions">
    <template #description>
      <p>40% JD 要求设计模式 / MVC / MVVM 理解。本题考察前端常见设计模式和架构思维。</p>
    </template>

    <template #extra>
      <el-divider>在线练习区</el-divider>
      <CodeRunner title="设计模式手写练习" :initial-code="playgroundCode" />
    </template>
  </QAQuestion>
</template>

<script setup lang="ts">
import QAQuestion from '@/components/QAQuestion.vue'
import CodeRunner from '@/components/CodeRunner.vue'

const questions = [
  {
    q: 'MVC、MVP、MVVM 三种架构模式的区别？',
    a: `
      <p><strong>MVC（Model-View-Controller）</strong>：</p>
      <ul>
        <li>View 显示 → Controller 处理逻辑 → Model 操作数据 → 通知 View 更新</li>
        <li>View 直接依赖 Model（双向沟通）</li>
        <li>典型：早期后端框架（Spring MVC、Rails）</li>
      </ul>
      <p><strong>MVP（Model-View-Presenter）</strong>：</p>
      <ul>
        <li>View ↔ Presenter ↔ Model（Presenter 居中调度）</li>
        <li>View 和 Model 完全解耦，便于测试</li>
        <li>需要手动同步 View 和 Model 状态</li>
      </ul>
      <p><strong>MVVM（Model-View-ViewModel）</strong>：</p>
      <ul>
        <li>View ↔ ViewModel ↔ Model（数据双向绑定）</li>
        <li>修改数据自动更新视图，反之亦然</li>
        <li>典型：Vue、Angular、Knockout</li>
      </ul>
      <p><strong>核心区别：</strong>MVVM 通过数据绑定消除了手动操作 DOM 的需要，开发效率最高。</p>
    `,
  },
  {
    q: '前端常用的设计模式有哪些？请举例说明。',
    a: `
      <p><strong>1. 单例模式（Singleton）</strong></p>
      <ul>
        <li>全局唯一实例，节省内存</li>
        <li>例：Vuex/Pinia store、全局配置、弹窗管理器</li>
      </ul>
      <p><strong>2. 观察者 / 发布订阅（Observer / Pub-Sub）</strong></p>
      <ul>
        <li>对象间一对多依赖，状态变化通知所有观察者</li>
        <li>例：Vue 响应式、EventBus、addEventListener</li>
      </ul>
      <p><strong>3. 工厂模式（Factory）</strong></p>
      <ul>
        <li>统一创建对象，隐藏创建细节</li>
        <li>例：createCounter() / createStore()</li>
      </ul>
      <p><strong>4. 策略模式（Strategy）</strong></p>
      <ul>
        <li>同一接口多种实现，按需切换</li>
        <li>例：表单验证规则、支付方式、排序算法</li>
      </ul>
      <p><strong>5. 装饰器模式（Decorator）</strong></p>
      <ul>
        <li>不改变原对象，动态添加功能</li>
        <li>例：TypeScript 装饰器、Vue 的高阶组件</li>
      </ul>
      <p><strong>6. 代理模式（Proxy）</strong></p>
      <ul>
        <li>通过代理对象控制对原对象的访问</li>
        <li>例：Vue3 响应式（Proxy）、图片懒加载、虚拟代理</li>
      </ul>
      <p><strong>7. 适配器模式（Adapter）</strong></p>
      <ul>
        <li>转换接口使不兼容的类可以协作</li>
        <li>例：第三方 API 数据转换、jQuery 兼容多浏览器</li>
      </ul>
    `,
  },
  {
    q: '观察者模式和发布订阅模式有什么区别？',
    a: `
      <p><strong>观察者模式</strong>：Subject（被观察者）维护 Observer 列表，状态变化时直接通知所有 Observer。两者<strong>直接耦合</strong>。</p>
      <pre>class Subject {
  observers = []
  subscribe(observer) { this.observers.push(observer) }
  notify(data) { this.observers.forEach(o => o.update(data)) }
}</pre>
      <p><strong>发布订阅模式</strong>：通过<strong>事件中心（EventBus）</strong>解耦发布者和订阅者。两者互不知道对方存在。</p>
      <pre>class EventBus {
  events = {}
  on(event, fn) { (this.events[event] ||= []).push(fn) }
  emit(event, ...args) { this.events[event]?.forEach(fn => fn(...args)) }
  off(event, fn) { this.events[event] = this.events[event]?.filter(f => f !== fn) }
}</pre>
      <p><strong>区别：</strong>发布订阅多了一层中介（事件中心），耦合度更低，更适合大型应用。Vue 的 EventBus 就是发布订阅。</p>
    `,
  },
  {
    q: '什么是高内聚低耦合？前端如何实现？',
    a: `
      <p><strong>高内聚</strong>：一个模块/组件内部功能高度相关，职责单一。</p>
      <p><strong>低耦合</strong>：模块/组件之间依赖关系少，可独立替换。</p>
      <p><strong>前端实践：</strong></p>
      <ul>
        <li><strong>组件化</strong>：每个组件只负责单一功能（按钮、表单、列表）</li>
        <li><strong>关注点分离</strong>：UI / 状态 / 副作用 / 业务逻辑分层</li>
        <li><strong>依赖注入</strong>：通过 props/provide-inject 传递依赖，不在组件内部硬编码</li>
        <li><strong>事件驱动</strong>：父子用 emit，跨级用 EventBus 或状态管理</li>
        <li><strong>接口隔离</strong>：定义清晰的组件 API（props/emits/slots）</li>
      </ul>
    `,
  },
]

const playgroundCode = `// 1. 单例模式
class Singleton {
  static instance = null
  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton()
    }
    return Singleton.instance
  }
}
const a = Singleton.getInstance()
const b = Singleton.getInstance()
console.log('单例验证:', a === b)  // true

// 2. 发布订阅模式
class EventBus {
  constructor() { this.events = {} }
  on(event, fn) {
    if (!this.events[event]) this.events[event] = []
    this.events[event].push(fn)
  }
  emit(event, ...args) {
    this.events[event]?.forEach(fn => fn(...args))
  }
  off(event, fn) {
    this.events[event] = this.events[event]?.filter(f => f !== fn)
  }
}

const bus = new EventBus()
bus.on('login', user => console.log('login 监听1:', user))
bus.on('login', user => console.log('login 监听2:', user))
bus.emit('login', { name: '张三' })

// 3. 策略模式
const strategies = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b,
  mul: (a, b) => a * b,
}
function calc(strategy, a, b) {
  return strategies[strategy]?.(a, b)
}
console.log('策略加法:', calc('add', 5, 3))
console.log('策略乘法:', calc('mul', 5, 3))
`
</script>
