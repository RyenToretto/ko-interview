# 开发指南

## 环境要求

- Node.js >= 18
- npm >= 9

## 快速开始

```bash
# 克隆项目
git clone <repo-url>
cd ko-interview

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问 http://localhost:5173 查看效果。

## 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| Vue 3 | ^3.5.13 | UI 框架（Composition API） |
| TypeScript | ~5.7.0 | 类型安全 |
| Vite | ^6.2.0 | 构建工具（HMR 热更新） |
| Element Plus | ^2.13.5 | UI 组件库（自动按需导入） |
| Vue Router | ^4.5.0 | 路由管理 |

## 项目结构

```
src/
├── components/              # 通用组件
│   ├── QuestionCard.vue     #   代码题容器（标题 + 描述 + 内容）
│   └── QAQuestion.vue       #   问答题容器（问题列表 + 折叠答案）
├── config/
│   └── questions.ts         # 题目元数据（分类、标题、类型、路由）
├── layouts/
│   └── MainLayout.vue       # 主布局（左侧菜单 + 右侧 router-view）
├── router/
│   └── index.ts             # 路由配置（21 条路由）
├── styles/
│   └── global.css           # 全局样式和 CSS 变量
└── views/                   # 题目页面（按分类组织）
    ├── HomeView.vue          #   首页（统计 + 使用说明）
    ├── css/                  #   CSS 题（5 题）
    ├── javascript/           #   JS 题（7 题）
    ├── vue3/                 #   Vue3 题（6 题）
    └── typescript/           #   TS 题（3 题）
```

## 构建命令

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动开发服务器（带 HMR） |
| `npm run build` | TypeScript 类型检查 + Vite 构建 |
| `npm run preview` | 预览构建结果 |

## 自动按需导入

Element Plus 组件通过 `unplugin-vue-components` 和 `unplugin-auto-import` 自动按需导入，无需手动 import。

自动生成的类型声明文件：
- `auto-imports.d.ts` — Element Plus API 类型
- `components.d.ts` — Element Plus 组件类型

## 面试使用流程

1. 面试官 `npm run dev` 启动项目
2. 从左侧菜单选择题目给候选人
3. 候选人在 VS Code / Cursor 中打开对应文件
4. 候选人找到 `TODO` 标记处编写代码
5. 保存后页面自动热更新，实时查看效果
6. 面试官可使用 Claude Code 的 `/review-answers` 命令辅助评分

## AI 辅助开发

本项目集成了 Claude Code 和 Cursor 的 AI 辅助配置：

- **Claude Code 用户**：参见 [docs/claude-code-setup.md](./claude-code-setup.md)
- **Cursor 用户**：项目规则已配置在 `.cursor/rules/project.mdc`

## 部署

项目配置了 GitHub Actions，推送到 master 分支后自动部署到 GitHub Pages。

```bash
git push origin master  # 自动触发部署
```
