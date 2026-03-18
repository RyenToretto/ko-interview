# 前端面试考察系统

基于 Vue 3 + TypeScript + Vite + Element Plus 的现场面试考察项目。

## 使用方式

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建
npm run build
```

## 项目说明

左侧菜单为题目目录（按 CSS / JavaScript / Vue3 / TypeScript 分类），右侧为题目页面。题目按**面试高频程度从高到低排序**，越靠前越必问。

- **代码题**：候选人在对应 `.vue` 文件中找到 `TODO` 标记，直接编写代码实现，保存后页面自动热更新
- **问答题**：面试官与候选人口头讨论，折叠面板内有参考答案

## 题目列表（共 29 题，按必问程度排序）

### CSS（6 题）

| # | 题目 | 类型 | 文件 |
|---|------|------|------|
| 1 | 盒模型与 BFC | 问答题 | `src/views/css/BoxModel.vue` |
| 2 | 水平垂直居中 | 代码题 | `src/views/css/CenterAlign.vue` |
| 3 | Flex 弹性布局 | 代码题 | `src/views/css/FlexLayout.vue` |
| 4 | position 定位 | 代码题 | `src/views/css/PositionLayout.vue` |
| 5 | CSS 选择器与优先级 | 问答题 | `src/views/css/SelectorPriority.vue` |
| 6 | CSS 过渡与动画 | 代码题 | `src/views/css/CssAnimation.vue` |

### JavaScript（11 题）

| # | 题目 | 类型 | 文件 |
|---|------|------|------|
| 1 | this 指向 | 代码题 | `src/views/javascript/ThisBinding.vue` |
| 2 | 原型与原型链 | 问答题 | `src/views/javascript/PrototypeChain.vue` |
| 3 | 闭包与作用域 | 代码题 | `src/views/javascript/ClosureScope.vue` |
| 4 | Promise 与 async/await | 代码题 | `src/views/javascript/PromiseAsync.vue` |
| 5 | 事件循环 | 问答题 | `src/views/javascript/EventLoop.vue` |
| 6 | ES6+ 新特性 | 代码题 | `src/views/javascript/ES6Features.vue` |
| 7 | 数组常用方法 | 代码题 | `src/views/javascript/ArrayMethods.vue` |
| 8 | 对象常用方法 | 代码题 | `src/views/javascript/ObjectMethods.vue` |
| 9 | 手写防抖与节流 | 代码题 | `src/views/javascript/DebounceThrottle.vue` |
| 10 | 手写 call / apply / bind | 代码题 | `src/views/javascript/CallApplyBind.vue` |
| 11 | 深拷贝实现 | 代码题 | `src/views/javascript/DeepClone.vue` |

### Vue 3（9 题）

| # | 题目 | 类型 | 文件 |
|---|------|------|------|
| 1 | Vue3 vs Vue2 区别 | 问答题 | `src/views/vue3/Vue3VsVue2.vue` |
| 2 | ref 与 reactive | 代码题 | `src/views/vue3/ReactiveRef.vue` |
| 3 | 生命周期 | 问答题 | `src/views/vue3/Lifecycle.vue` |
| 4 | 组件通信 | 代码题 | `src/views/vue3/ComponentComm.vue` |
| 5 | computed 与 watch | 代码题 | `src/views/vue3/ComputedWatch.vue` |
| 6 | 虚拟 DOM 与 Diff | 问答题 | `src/views/vue3/VirtualDom.vue` |
| 7 | nextTick | 代码题 | `src/views/vue3/NextTick.vue` |
| 8 | 自定义指令 | 代码题 | `src/views/vue3/CustomDirective.vue` |
| 9 | 插槽 | 代码题 | `src/views/vue3/SlotsUsage.vue` |

### TypeScript（3 题）

| # | 题目 | 类型 | 文件 |
|---|------|------|------|
| 1 | 基础类型与接口 | 代码题 | `src/views/typescript/BasicTypes.vue` |
| 2 | 泛型 | 代码题 | `src/views/typescript/Generics.vue` |
| 3 | 类型体操基础 | 问答题 | `src/views/typescript/TypeUtility.vue` |

## 技术栈

- Vue 3.5+
- TypeScript 5.7+
- Vite 6.2+
- Element Plus 2.13+
- Vue Router 4.5+
