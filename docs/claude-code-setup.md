# Claude Code 使用指南

本项目已集成 [Claude Code](https://claude.ai/code) 最佳实践，以下是配置说明和使用方法。

## 安装 Claude Code

```bash
npm install -g @anthropic-ai/claude-code
```

## 项目中的 Claude Code 配置

### CLAUDE.md — 项目记忆

位置：项目根目录 `CLAUDE.md`

Claude Code 启动时会自动加载此文件，为 AI 提供项目上下文。包含：
- 项目概述和技术栈
- 编码约定（CSS 类名规则、Vue SFC 规范等）
- 题目分类与目录结构
- 添加新题目的流程

> **最佳实践**：CLAUDE.md 控制在 200 行以内，确保 AI 可靠遵循。

### .claude/settings.json — 团队设置

团队共享的 Claude Code 配置：

| 配置项 | 说明 |
|--------|------|
| `permissions.allow` | 文件编辑、读取等操作自动允许 |
| `permissions.ask` | 危险操作（rm、git push）需要确认 |
| `outputStyle` | "Explanatory" 详细输出 |
| `attribution` | commit 中标注 AI 协作 |
| `respectGitignore` | 遵循 .gitignore 规则 |

个人设置覆盖：创建 `.claude/settings.local.json`（已被 gitignore）。

### .claude/rules/ — 编码规范

| 文件 | 内容 |
|------|------|
| `vue-conventions.md` | Vue 3 SFC 编码规范 |
| `css-rules.md` | CSS 类名命名规则 |
| `project-structure.md` | 题目文件组织规范 |

### .claude/commands/ — 工作流命令

在 Claude Code 中通过 `/` 触发：

| 命令 | 用途 |
|------|------|
| `/add-question [分类]` | 引导式添加新面试题 |
| `/dev` | 启动开发环境 |
| `/review-answers [路径]` | 审阅候选人代码实现 |

### .claude/agents/ — 子代理

| 代理 | 用途 |
|------|------|
| `question-creator` | 面试题创建专家 |
| `code-reviewer` | 代码审阅员 |

### .mcp.json — MCP 服务器

| 服务器 | 用途 |
|--------|------|
| `context7` | 获取 Vue 3、Element Plus 等最新文档 |
| `playwright` | 浏览器自动化测试 |

## 常用工作流

### 添加新面试题

```
claude
> /add-question css
```

### 审阅候选人答案

```
claude
> /review-answers src/views/css/CenterAlign.vue
```

### 批量审阅

```
claude
> /review-answers 请审阅所有 JavaScript 题目
```

## 进阶技巧

- 使用 `/plan` 进入计划模式，设计复杂题目前先规划
- 使用 `/compact` 在上下文使用超过 50% 时压缩对话
- 使用 `/model` 切换模型（haiku 用于简单任务，opus 用于复杂任务）
- 提交前使用 `code-reviewer` 代理检查代码质量
