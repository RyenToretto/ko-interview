# 引入的最佳实践清单

本项目从 [claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) 中筛选并集成了以下实用的最佳实践。

## 集成清单

### 1. 项目记忆（CLAUDE.md）

**来源**：[Memory Best Practice](https://github.com/shanraisshan/claude-code-best-practice/blob/main/best-practice/claude-memory.md)

**做法**：在项目根目录创建 `CLAUDE.md`，为 AI 助手提供项目上下文。

**关键要点**：
- 控制在 200 行以内，确保可靠遵循
- 包含项目概述、技术栈、编码约定
- 包含添加新功能的标准流程

### 2. 团队设置（.claude/settings.json）

**来源**：[Settings Best Practice](https://github.com/shanraisshan/claude-code-best-practice/blob/main/best-practice/claude-settings.md)

**做法**：配置团队共享的权限规则、输出风格、协作标注。

**关键配置**：
- `permissions`: 安全操作自动允许，危险操作需确认
- `outputStyle: "Explanatory"`: 详细解释输出
- `attribution`: commit 中标注 AI 协作
- `respectGitignore`: 遵循 gitignore 规则

### 3. 编码规范（.claude/rules/）

**来源**：[Memory - Rules Organization](https://github.com/shanraisshan/claude-code-best-practice/blob/main/best-practice/claude-memory.md)

**做法**：将编码规范拆分为独立的规则文件，放在 `.claude/rules/` 目录。

**已创建的规则**：
- `vue-conventions.md` — Vue 3 SFC 规范
- `css-rules.md` — CSS 类名规则（禁止 & 拼接）
- `project-structure.md` — 题目文件组织规范

### 4. 工作流命令（.claude/commands/）

**来源**：[Commands Best Practice](https://github.com/shanraisshan/claude-code-best-practice/blob/main/best-practice/claude-commands.md)

**做法**：为常见工作流创建自定义 slash 命令。

**已创建的命令**：
- `/add-question` — 引导式添加新面试题
- `/dev` — 快速启动开发环境
- `/review-answers` — 审阅候选人代码实现

### 5. 子代理（.claude/agents/）

**来源**：[Subagents Best Practice](https://github.com/shanraisshan/claude-code-best-practice/blob/main/best-practice/claude-subagents.md)

**做法**：为特定任务创建专门化的子代理，带有角色定义和工具限制。

**已创建的代理**：
- `question-creator` — 面试题创建专家（可自动创建高质量面试题）
- `code-reviewer` — 代码审阅员（带评分体系，评估候选人代码）

### 6. MCP 服务器（.mcp.json）

**来源**：[MCP Best Practice](https://github.com/shanraisshan/claude-code-best-practice/blob/main/best-practice/claude-mcp.md)

**做法**：配置外部工具服务器，扩展 AI 助手能力。

**已配置的服务器**：
- `context7` — 获取最新库文档，防止 API 幻觉
- `playwright` — 浏览器自动化，测试页面效果

### 7. Cursor IDE 规则（.cursor/rules/）

**做法**：为 Cursor IDE 用户提供等效的项目规则配置。

## 未采用的实践（及原因）

| 实践 | 原因 |
|------|------|
| 声音 Hooks | 娱乐性功能，与面试项目无关 |
| spinnerVerbs / spinnerTips | 个性化配置，不适合团队共享 |
| statusLine | 个人偏好，不适合项目级配置 |
| Weather 示例 | 演示用途，与本项目无关 |
| Agent Teams | 团队协作功能，单人面试场景不需要 |
| Git Worktrees | 高级工作流，面试项目规模不需要 |

## 参考资料

- [Claude Code 官方文档](https://code.claude.com/docs)
- [claude-code-best-practice 仓库](https://github.com/shanraisshan/claude-code-best-practice)
- [Claude Code CHANGELOG](https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md)
