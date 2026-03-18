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
      { id: 'js-this', title: 'this 指向', type: 'code', path: '/js/this' },
      { id: 'js-prototype', title: '原型与原型链', type: 'qa', path: '/js/prototype' },
      { id: 'js-closure', title: '闭包与作用域', type: 'code', path: '/js/closure' },
      { id: 'js-promise', title: 'Promise 与 async/await', type: 'code', path: '/js/promise' },
      { id: 'js-event-loop', title: '事件循环', type: 'qa', path: '/js/event-loop' },
      { id: 'js-es6', title: 'ES6+ 新特性', type: 'code', path: '/js/es6' },
      { id: 'js-array', title: '数组常用方法', type: 'code', path: '/js/array' },
      { id: 'js-object', title: '对象常用方法', type: 'code', path: '/js/object' },
      { id: 'js-debounce', title: '手写防抖与节流', type: 'code', path: '/js/debounce' },
      { id: 'js-call-apply-bind', title: '手写 call / apply / bind', type: 'code', path: '/js/call-apply-bind' },
      { id: 'js-deep-clone', title: '深拷贝实现', type: 'code', path: '/js/deep-clone' },
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
    id: 'typescript',
    label: 'TypeScript',
    icon: 'Document',
    questions: [
      { id: 'ts-basic', title: '基础类型与接口', type: 'code', path: '/ts/basic' },
      { id: 'ts-generics', title: '泛型', type: 'code', path: '/ts/generics' },
      { id: 'ts-utility', title: '类型体操基础', type: 'qa', path: '/ts/utility' },
    ],
  },
]
