# Vue 3 SFC 编码规范

本项目使用 Vue 3 Composition API，以下规则适用于所有 `.vue` 文件。

## Script

- 始终使用 `<script setup lang="ts">`，不使用 Options API
- Props 定义使用泛型语法：`defineProps<{ title: string }>()`
- Emits 定义使用泛型语法：`defineEmits<{ (e: 'update', val: string): void }>()`
- 响应式数据：基本类型用 `ref()`，对象用 `reactive()`
- 组合逻辑提取为 composable 函数（`use` 前缀）

## Template

- 使用 `v-for` 时必须绑定 `:key`
- 事件绑定使用 `@click` 简写
- 属性绑定使用 `:prop` 简写
- 组件名使用 PascalCase（`<QuestionCard />`）

## Style

- 始终使用 `<style scoped>`
- 类名以组件功能为前缀，使用 kebab-case
- 例：组件 `CenterAlign.vue` → 类名 `.center-align-box`
- Element Plus 组件样式覆盖使用 `:deep()` 选择器

## 文件命名

- 组件文件：PascalCase（`QuestionCard.vue`）
- 工具函数文件：camelCase（`useCounter.ts`）
- 配置文件：camelCase（`questions.ts`）
