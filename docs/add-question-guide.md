# 如何添加新面试题

本指南面向面试官，说明如何向系统中添加新的面试题目。

## 方式一：使用 Claude Code 命令（推荐）

如果你安装了 Claude Code，可以一键完成：

```bash
claude
> /add-question css
```

AI 助手会引导你完成所有步骤。

## 方式二：手动添加

### 第 1 步：创建视图文件

在对应分类目录下创建 `.vue` 文件：

| 分类 | 目录 |
|------|------|
| CSS | `src/views/css/` |
| JavaScript | `src/views/javascript/` |
| Vue 3 | `src/views/vue3/` |
| TypeScript | `src/views/typescript/` |

#### 代码题模板

```vue
<template>
  <QuestionCard title="题目标题" type="code">
    <template #description>
      <p>题目描述和要求说明。</p>
    </template>

    <h3>任务一：xxx</h3>
    <div class="my-question-demo">
      <!-- 预览区域 -->
    </div>
  </QuestionCard>
</template>

<script setup lang="ts">
import QuestionCard from '@/components/QuestionCard.vue'
</script>

<style scoped>
/* TODO: 请实现 xxx */
.my-question-demo {
  /* 候选人需要在这里编写样式 */
}
</style>
```

#### 问答题模板

```vue
<template>
  <QAQuestion title="题目标题" :questions="questions">
    <template #description>
      <p>题目描述。</p>
    </template>
  </QAQuestion>
</template>

<script setup lang="ts">
import QAQuestion from '@/components/QAQuestion.vue'

const questions = [
  {
    q: '问题文本',
    a: '<p>参考答案 HTML</p>',
  },
]
</script>
```

### 第 2 步：注册题目元数据

打开 `src/config/questions.ts`，在对应分类的 `questions` 数组中添加：

```typescript
{
  id: 'css-my-topic',           // 唯一 ID
  title: '我的题目标题',          // 菜单显示名
  type: 'code',                 // 'code' 或 'qa'
  path: '/css/my-topic',        // 路由路径
}
```

### 第 3 步：添加路由

打开 `src/router/index.ts`，在对应分类注释下添加：

```typescript
{
  path: 'css/my-topic',
  name: 'CssMyTopic',
  component: () => import('@/views/css/MyTopic.vue'),
},
```

### 第 4 步：验证

```bash
npm run dev
```

在浏览器中检查：
1. 左侧菜单是否出现新题目
2. 点击后右侧是否正确渲染
3. 代码题的 TODO 标记是否清晰

## 注意事项

- CSS 中**禁止**使用 `&` 拼接类名（如 `&-item`）
- 类名以组件功能为前缀，使用 kebab-case
- 代码题需提供足够的骨架代码，不让候选人从零开始
- 问答题的参考答案使用 HTML 格式
