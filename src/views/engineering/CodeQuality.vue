<template>
  <QAQuestion title="代码规范与质量" :questions="questions">
    <template #description>
      <p>本题考察前端工程化中的代码规范、提交规范及测试框架选型。</p>
    </template>
  </QAQuestion>
</template>

<script setup lang="ts">
import QAQuestion from '@/components/QAQuestion.vue'

const questions = [
  {
    q: 'ESLint 和 Prettier 的区别和配合使用',
    a: `
      <p><strong>区别：</strong></p>
      <ul>
        <li><strong>ESLint</strong>：代码质量工具，检查语法错误、潜在 bug、最佳实践（如未使用变量、eqeqeq）</li>
        <li><strong>Prettier</strong>：代码格式化工具，只关心风格（缩进、引号、分号、换行等），不关心逻辑</li>
      </ul>
      <p><strong>配合使用：</strong></p>
      <ul>
        <li>安装 <code>eslint-config-prettier</code>：关闭 ESLint 中与 Prettier 冲突的规则</li>
        <li>安装 <code>eslint-plugin-prettier</code>（可选）：把 Prettier 当作 ESLint 规则运行</li>
        <li>推荐：ESLint 负责质量，Prettier 负责格式；保存时先 Prettier 再 ESLint fix</li>
      </ul>
      <pre>// .vscode/settings.json
"editor.formatOnSave": true,
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.codeActionsOnSave": { "source.fixAll.eslint": true }</pre>
    `,
  },
  {
    q: 'Husky + lint-staged + commitlint 工作流',
    a: `
      <p><strong>三者职责：</strong></p>
      <ul>
        <li><strong>Husky</strong>：Git hooks 管理，在 commit/push 时执行脚本</li>
        <li><strong>lint-staged</strong>：只对暂存区（staged）文件执行 lint，避免全量检查</li>
        <li><strong>commitlint</strong>：校验 commit message 格式（如 Conventional Commits）</li>
      </ul>
      <p><strong>典型流程：</strong></p>
      <ol>
        <li><code>git commit</code> 触发 <code>pre-commit</code> hook</li>
        <li>Husky 执行 lint-staged → 对暂存文件跑 ESLint + Prettier</li>
        <li>通过后触发 <code>commit-msg</code> hook</li>
        <li>commitlint 校验 message 格式，不符合则拒绝提交</li>
      </ol>
      <pre>// package.json
"lint-staged": {
  "*.{js,ts,vue}": ["eslint --fix", "prettier --write"]
}</pre>
    `,
  },
  {
    q: '单元测试框架选择（Vitest / Jest）',
    a: `
      <p><strong>Vitest：</strong></p>
      <ul>
        <li>Vite 生态，与 Vite 配置共享，零配置或极少配置</li>
        <li>基于 Vite 的转换，速度快，HMR 支持好</li>
        <li>API 与 Jest 兼容，迁移成本低</li>
        <li>适合 Vue/Vite 项目</li>
      </ul>
      <p><strong>Jest：</strong></p>
      <ul>
        <li>成熟稳定，生态丰富</li>
        <li>需额外配置才能测 Vue/TS（如 ts-jest、vue-jest）</li>
        <li>大项目时启动和运行相对较慢</li>
        <li>适合 React、Node 或传统项目</li>
      </ul>
      <p><strong>选型建议：</strong>Vite + Vue 项目首选 Vitest；已有 Jest 或 React 项目可继续用 Jest。</p>
    `,
  },
]
</script>
