# CLAUDE.md

本文件为 Claude Code 提供项目上下文，使 AI 助手准确理解项目结构与编码约定。

## 项目概述

**ko-interview** 是一个基于 Vue 3 的前端现场面试考察系统。面试官通过左侧菜单选择题目，候选人在对应 `.vue` 文件中编写代码作答，页面通过 Vite HMR 实时展示效果。

## 技术栈

- Vue 3.5+ (Composition API, `<script setup>`)
- TypeScript 5.7+
- Vite 6.2+
- Element Plus 2.13+ (自动按需导入)
- Vue Router 4.5+

## 目录结构

```
src/
├── components/          # 通用组件（QuestionCard, QAQuestion）
├── config/questions.ts  # 题目元数据（分类、标题、类型、路由）
├── layouts/             # 主布局（左侧菜单 + 右侧内容）
├── router/index.ts      # 路由配置
├── styles/              # 全局样式
└── views/               # 题目页面（按分类组织）
    ├── css/             # CSS 题（5 题）
    ├── javascript/      # JS 题（7 题）
    ├── vue3/            # Vue3 题（6 题）
    └── typescript/      # TS 题（3 题）
```

## 编码约定

### CSS
- **禁止**使用 `&` 拼接类名（如 `&-item`、`&__box`、`&--active`）
- `&.active` 这种状态类拼接是**允许**的
- 每个类名必须完整书写
- 使用 scoped style，类名以组件名为前缀（如 `.center-demo-box`）

### Vue SFC
- 始终使用 `<script setup lang="ts">`
- Props 使用 `defineProps<T>()` 泛型语法
- Emits 使用 `defineEmits<T>()` 泛型语法
- 组件文件名使用 PascalCase

### TypeScript
- 优先使用 `interface` 定义对象类型
- 联合类型、工具类型使用 `type`
- 不使用 `any`，必要时用 `unknown`

## 题目分类

| 分类 | 数量 | 路径前缀 | 视图目录 |
|------|------|----------|----------|
| CSS | 5 | `/css/` | `views/css/` |
| JavaScript | 7 | `/js/` | `views/javascript/` |
| Vue 3 | 6 | `/vue3/` | `views/vue3/` |
| TypeScript | 3 | `/ts/` | `views/typescript/` |

## 添加新题目的流程

1. 在 `src/views/<category>/` 下创建 `.vue` 文件
2. 在 `src/config/questions.ts` 的对应分类中添加元数据
3. 在 `src/router/index.ts` 中添加路由记录
4. 代码题使用 `QuestionCard` 组件包裹，留 `TODO` 标记
5. 问答题使用 `QAQuestion` 组件，传入 questions 数组

## 常用命令

```bash
npm run dev      # 启动开发服务器
npm run build    # 构建生产版本
npm run preview  # 预览构建结果
```

## 调试技巧

- Vite HMR 自动热更新，候选人保存文件即可看到效果
- 使用浏览器 DevTools 检查 CSS 布局问题
- Vue Devtools 浏览器扩展可用于调试响应式数据
- 控制台错误通常指向具体的组件和行号
