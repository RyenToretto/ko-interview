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

左侧菜单为题目目录（按 CSS / JavaScript / Vue3 / TypeScript 分类），右侧为题目页面。

- **代码题**：候选人在对应 `.vue` 文件中找到 `TODO` 标记，直接编写代码实现，保存后页面自动热更新
- **问答题**：面试官与候选人口头讨论，折叠面板内有参考答案

## 题目列表

### CSS（5 题）

| # | 题目 | 类型 | 文件 |
|---|------|------|------|
| 1 | 水平垂直居中 | 代码题 | `src/views/css/CenterAlign.vue` |
| 2 | Flex 弹性布局 | 代码题 | `src/views/css/FlexLayout.vue` |
| 3 | CSS 选择器与优先级 | 问答题 | `src/views/css/SelectorPriority.vue` |
| 4 | 盒模型与 BFC | 问答题 | `src/views/css/BoxModel.vue` |
| 5 | CSS 过渡与动画 | 代码题 | `src/views/css/CssAnimation.vue` |

### JavaScript（7 题）

| # | 题目 | 类型 | 文件 |
|---|------|------|------|
| 1 | 数组常用方法 | 代码题 | `src/views/javascript/ArrayMethods.vue` |
| 2 | 对象常用方法 | 代码题 | `src/views/javascript/ObjectMethods.vue` |
| 3 | Promise 与 async/await | 代码题 | `src/views/javascript/PromiseAsync.vue` |
| 4 | 闭包与作用域 | 代码题 | `src/views/javascript/ClosureScope.vue` |
| 5 | 事件循环 | 问答题 | `src/views/javascript/EventLoop.vue` |
| 6 | 手写防抖与节流 | 代码题 | `src/views/javascript/DebounceThrottle.vue` |
| 7 | 深拷贝实现 | 代码题 | `src/views/javascript/DeepClone.vue` |

### Vue 3（6 题）

| # | 题目 | 类型 | 文件 |
|---|------|------|------|
| 1 | ref 与 reactive | 代码题 | `src/views/vue3/ReactiveRef.vue` |
| 2 | computed 与 watch | 代码题 | `src/views/vue3/ComputedWatch.vue` |
| 3 | 组件通信 | 代码题 | `src/views/vue3/ComponentComm.vue` |
| 4 | 生命周期 | 问答题 | `src/views/vue3/Lifecycle.vue` |
| 5 | 自定义指令 | 代码题 | `src/views/vue3/CustomDirective.vue` |
| 6 | 插槽 | 代码题 | `src/views/vue3/SlotsUsage.vue` |

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
