# 题目文件组织规范

## 新增题目的完整步骤

### 1. 创建视图文件

在 `src/views/<category>/` 下创建 `.vue` 文件：

- CSS 题 → `src/views/css/`
- JavaScript 题 → `src/views/javascript/`
- Vue3 题 → `src/views/vue3/`
- TypeScript 题 → `src/views/typescript/`

### 2. 注册题目元数据

在 `src/config/questions.ts` 中找到对应分类的 `questions` 数组，新增：

```typescript
{ id: 'css-xxx', title: '题目标题', type: 'code', path: '/css/xxx' }
```

- `type` 为 `'code'`（代码题）或 `'qa'`（问答题）
- `path` 为路由路径，格式：`/<category-short>/<slug>`

### 3. 添加路由

在 `src/router/index.ts` 中对应分类的注释区域添加路由：

```typescript
{
  path: 'css/xxx',
  name: 'CssXxx',
  component: () => import('@/views/css/XxxYyy.vue'),
},
```

### 4. 页面结构

**代码题**使用 `QuestionCard` 组件：

```vue
<template>
  <QuestionCard title="题目标题" type="code">
    <template #description>
      <p>题目描述和要求</p>
    </template>
    <!-- 任务区域，包含 TODO 标记 -->
  </QuestionCard>
</template>
```

**问答题**使用 `QAQuestion` 组件：

```vue
<template>
  <QAQuestion title="题目标题" :questions="questions">
    <template #description>
      <p>题目描述</p>
    </template>
  </QAQuestion>
</template>
```

### 5. 代码题的 TODO 规范

- 在 CSS 中标注 `/* TODO: 请实现 xxx */`
- 在 JS/TS 中标注 `// TODO: 请实现 xxx`
- 在 HTML 中标注 `<!-- TODO: 请在此处编写代码 -->`
- 提供足够的提示和骨架代码
