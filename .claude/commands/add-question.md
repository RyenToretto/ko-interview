---
description: 引导式添加新的面试题目到项目中
argument-hint: "[分类: css/js/vue3/ts]"
allowed-tools: "Read, Write, Edit"
---

# 添加新面试题

请按以下步骤引导我添加一道新的面试题：

## 步骤 1: 收集信息

向用户询问以下信息（使用 AskUserQuestion 工具）：
1. **分类**：CSS / JavaScript / Vue3 / TypeScript
2. **题目标题**：如"水平垂直居中"
3. **题型**：代码题 / 问答题
4. **考察点**：如"flex / grid / transform"
5. **难度**：简单 / 中等 / 困难

## 步骤 2: 生成文件

根据收集的信息：

1. 在 `src/views/<category>/` 下创建 `.vue` 文件
   - 代码题：使用 `QuestionCard` 组件，包含 TODO 标记区域
   - 问答题：使用 `QAQuestion` 组件，包含问答数组和参考答案

2. 参考 `src/config/questions.ts` 的已有格式，在对应分类中添加题目元数据

3. 在 `src/router/index.ts` 对应分类注释区域下添加路由记录

## 步骤 3: 验证

- 确认文件已创建
- 确认 questions.ts 中新增了记录
- 确认 router 中新增了路由
- 建议用户运行 `npm run dev` 查看效果

## 注意事项

- 遵循 `.claude/rules/` 中的所有编码规范
- 代码题需要提供足够的骨架代码和提示
- 问答题需要提供详细的参考答案（放在折叠面板中）
- 类名使用组件功能前缀 + kebab-case
