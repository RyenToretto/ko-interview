export interface Question {
  id: string
  title: string
  type: 'code' | 'qa'
  path: string
}

export interface QuestionCategory {
  id: string
  label: string
  icon: string
  questions: Question[]
}

export const categories: QuestionCategory[] = [
  {
    id: 'css',
    label: 'CSS',
    icon: 'Brush',
    questions: [
      { id: 'css-why-traps', title: 'CSS 经典「为什么」陷阱', type: 'qa', path: '/css/why-traps' },
      { id: 'css-box-model', title: '盒模型与 BFC', type: 'qa', path: '/css/box-model' },
      { id: 'css-center', title: '水平垂直居中', type: 'code', path: '/css/center' },
      { id: 'css-flex', title: 'Flex 弹性布局', type: 'code', path: '/css/flex' },
      { id: 'css-position', title: 'position 定位', type: 'code', path: '/css/position' },
      { id: 'css-selector', title: 'CSS 选择器与优先级', type: 'qa', path: '/css/selector' },
      { id: 'css-responsive', title: '响应式布局', type: 'code', path: '/css/responsive' },
      { id: 'css-mobile', title: '移动端适配', type: 'qa', path: '/css/mobile' },
      { id: 'css-units', title: 'rem/em/px/vw/vh 单位', type: 'code', path: '/css/units' },
      { id: 'css-blocking', title: 'CSS 会阻塞渲染吗', type: 'qa', path: '/css/blocking' },
      { id: 'css-less', title: 'Less 预处理器', type: 'qa', path: '/css/less' },
      { id: 'css-scss', title: 'Scss/Sass 预处理器', type: 'qa', path: '/css/scss' },
      { id: 'css-transform-perf', title: 'transform 与 opacity 性能', type: 'qa', path: '/css/transform-perf' },
      { id: 'css-animation', title: 'CSS 过渡与动画', type: 'code', path: '/css/animation' },
    ],
  },
  {
    id: 'javascript',
    label: 'JavaScript',
    icon: 'Coffee',
    questions: [
      // 1️⃣ 原型链
      { id: 'js-prototype', title: '原型与原型链', type: 'qa', path: '/js/prototype' },
      // 2️⃣ this
      { id: 'js-this', title: 'this 指向', type: 'code', path: '/js/this' },
      // 3️⃣ 闭包
      { id: 'js-closure', title: '闭包与作用域', type: 'code', path: '/js/closure' },
      { id: 'js-closure-why', title: '闭包原理：为什么函数能记住变量', type: 'qa', path: '/js/closure-why' },
      // 4️⃣ Promise + Event Loop
      { id: 'js-promise', title: 'Promise 与 async/await', type: 'code', path: '/js/promise' },
      { id: 'js-event-loop', title: '事件循环', type: 'qa', path: '/js/event-loop' },
      { id: 'js-single-thread', title: 'JS 单线程为什么能异步', type: 'qa', path: '/js/single-thread' },
      // 5️⃣ 其他
      { id: 'js-es6', title: 'ES6+ 新特性', type: 'code', path: '/js/es6' },
      { id: 'js-iterator', title: '迭代器与 for...of / for...in', type: 'code', path: '/js/iterator' },
      { id: 'js-array', title: '数组常用方法', type: 'code', path: '/js/array' },
      { id: 'js-object', title: '对象常用方法', type: 'code', path: '/js/object' },
      { id: 'js-debounce', title: '手写防抖与节流', type: 'code', path: '/js/debounce' },
      { id: 'js-call-apply-bind', title: '手写 call / apply / bind', type: 'code', path: '/js/call-apply-bind' },
      { id: 'js-deep-clone', title: '深拷贝实现', type: 'code', path: '/js/deep-clone' },
      { id: 'js-gc', title: '垃圾回收机制', type: 'qa', path: '/js/gc' },
      { id: 'js-v8', title: 'V8 执行机制', type: 'qa', path: '/js/v8' },
    ],
  },
  {
    id: 'vue3',
    label: 'Vue 3',
    icon: 'Connection',
    questions: [
      { id: 'vue-vs-vue2', title: 'Vue3 vs Vue2 区别', type: 'qa', path: '/vue3/vs-vue2' },
      { id: 'vue-reactive', title: 'ref 与 reactive', type: 'code', path: '/vue3/reactive' },
      { id: 'vue-lifecycle', title: '生命周期', type: 'qa', path: '/vue3/lifecycle' },
      { id: 'vue-communication', title: '组件通信', type: 'code', path: '/vue3/communication' },
      { id: 'vue-computed', title: 'computed 与 watch', type: 'code', path: '/vue3/computed' },
      { id: 'vue-virtual-dom', title: '虚拟 DOM 与 Diff', type: 'qa', path: '/vue3/virtual-dom' },
      { id: 'vue-next-tick', title: 'nextTick', type: 'code', path: '/vue3/next-tick' },
      { id: 'vue-directive', title: '自定义指令', type: 'code', path: '/vue3/directive' },
      { id: 'vue-slots', title: '插槽', type: 'code', path: '/vue3/slots' },
    ],
  },
  {
    id: 'vue-eco',
    label: 'Vue 生态',
    icon: 'SetUp',
    questions: [
      { id: 'vue-eco-router', title: 'Vue Router 路由守卫', type: 'qa', path: '/vue-eco/router-guard' },
      { id: 'vue-eco-pinia', title: 'Pinia 状态管理', type: 'qa', path: '/vue-eco/pinia' },
      { id: 'vue-eco-keep-alive', title: 'keep-alive 组件缓存', type: 'qa', path: '/vue-eco/keep-alive' },
      { id: 'vue-eco-composables', title: 'Composables 自定义 Hook', type: 'code', path: '/vue-eco/composables' },
    ],
  },
  {
    id: 'typescript',
    label: 'TypeScript',
    icon: 'Document',
    questions: [
      { id: 'ts-flat-to-tree', title: '扁平数组转树形结构', type: 'code', path: '/ts/flat-to-tree' },
      { id: 'ts-basic', title: '基础类型与接口', type: 'code', path: '/ts/basic' },
      { id: 'ts-generics', title: '泛型', type: 'code', path: '/ts/generics' },
      { id: 'ts-utility', title: '类型体操基础', type: 'qa', path: '/ts/utility' },
    ],
  },
  {
    id: 'react',
    label: 'React',
    icon: 'ChromeFilled',
    questions: [
      { id: 'react-hooks', title: 'React Hooks 核心', type: 'qa', path: '/react/hooks' },
      { id: 'react-fiber', title: 'Fiber 架构与虚拟 DOM', type: 'qa', path: '/react/fiber' },
      { id: 'react-state', title: 'React 状态管理', type: 'qa', path: '/react/state' },
      { id: 'react-perf', title: 'React 性能优化', type: 'qa', path: '/react/perf' },
    ],
  },
  {
    id: 'angular',
    label: 'Angular',
    icon: 'Platform',
    questions: [
      { id: 'angular-core', title: 'Angular 核心概念', type: 'qa', path: '/angular/core' },
      { id: 'angular-vs-others', title: 'Angular vs React vs Vue', type: 'qa', path: '/angular/vs-others' },
      { id: 'angular-rxjs', title: 'RxJS 响应式编程', type: 'qa', path: '/angular/rxjs' },
    ],
  },
  {
    id: 'engineering',
    label: '工程化',
    icon: 'Setting',
    questions: [
      { id: 'eng-build-tools', title: 'Webpack vs Vite 构建原理', type: 'qa', path: '/engineering/build-tools' },
      { id: 'eng-module-system', title: '模块化 CommonJS vs ESM', type: 'qa', path: '/engineering/module-system' },
      { id: 'eng-code-quality', title: '代码规范与质量', type: 'qa', path: '/engineering/code-quality' },
      { id: 'eng-cicd', title: 'CI/CD 与 Git 工作流', type: 'qa', path: '/engineering/cicd' },
    ],
  },
  {
    id: 'performance',
    label: '性能优化',
    icon: 'Timer',
    questions: [
      { id: 'perf-first-screen', title: '首屏加载优化', type: 'qa', path: '/performance/first-screen' },
      { id: 'perf-lazy-virtual', title: '懒加载与虚拟滚动', type: 'qa', path: '/performance/lazy-virtual' },
      { id: 'perf-cache', title: '缓存策略', type: 'qa', path: '/performance/cache' },
    ],
  },
  {
    id: 'browser',
    label: '浏览器原理',
    icon: 'Monitor',
    questions: [
      { id: 'browser-render', title: '浏览器渲染流程', type: 'qa', path: '/browser/render' },
      { id: 'browser-cross-origin', title: '跨域与同源策略', type: 'qa', path: '/browser/cross-origin' },
      { id: 'browser-security', title: '前端安全 XSS/CSRF', type: 'qa', path: '/browser/security' },
    ],
  },
  {
    id: 'http',
    label: 'HTTP 网络',
    icon: 'Link',
    questions: [
      { id: 'http-versions', title: 'HTTP/1.1 vs HTTP/2 vs HTTP/3', type: 'qa', path: '/http/versions' },
      { id: 'http-https-tcp', title: 'HTTPS 与 TCP', type: 'qa', path: '/http/https-tcp' },
      { id: 'http-status', title: 'HTTP 状态码与方法', type: 'qa', path: '/http/status' },
    ],
  },
  {
    id: 'algorithm',
    label: '数据结构与算法',
    icon: 'DataAnalysis',
    questions: [
      { id: 'algo-sort', title: '排序算法', type: 'qa', path: '/algorithm/sort' },
      { id: 'algo-linked-tree', title: '链表与二叉树', type: 'qa', path: '/algorithm/linked-tree' },
      { id: 'algo-common', title: '高频算法题', type: 'code', path: '/algorithm/common' },
    ],
  },
]
