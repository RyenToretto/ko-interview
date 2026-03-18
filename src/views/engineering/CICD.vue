<template>
  <QAQuestion title="CI/CD 与 Git 工作流" :questions="questions">
    <template #description>
      <p>本题考察 Git 分支策略、CI/CD 工具及前端部署流程。</p>
    </template>
  </QAQuestion>
</template>

<script setup lang="ts">
import QAQuestion from '@/components/QAQuestion.vue'

const questions = [
  {
    q: 'Git Flow / GitHub Flow / Trunk Based Development 对比',
    a: `
      <table border="1" cellpadding="6" style="border-collapse: collapse; width: 100%">
        <tr><th>模型</th><th>特点</th><th>适用场景</th></tr>
        <tr>
          <td><strong>Git Flow</strong></td>
          <td>main + develop 双主分支，feature/release/hotfix；发布周期长</td>
          <td>有固定发布周期、版本号管理的项目</td>
        </tr>
        <tr>
          <td><strong>GitHub Flow</strong></td>
          <td>只有 main，功能分支合并即部署；简单</td>
          <td>持续部署、无固定版本的 Web 应用</td>
        </tr>
        <tr>
          <td><strong>Trunk Based</strong></td>
          <td>所有人往 main 合，短命分支，靠 feature flag 控制发布</td>
          <td>高频发布、强 CI/CD 的团队</td>
        </tr>
      </table>
      <p><strong>简化记忆：</strong>Git Flow 最重，GitHub Flow 适中，Trunk Based 最轻量。</p>
    `,
  },
  {
    q: 'GitHub Actions 基本概念和常见用法',
    a: `
      <p><strong>基本概念：</strong></p>
      <ul>
        <li><strong>Workflow</strong>：一个 YAML 文件，定义一次 CI/CD 流程</li>
        <li><strong>Job</strong>：Workflow 中的任务单元，可并行或串行</li>
        <li><strong>Step</strong>：Job 内的具体步骤，如 checkout、npm install、build</li>
        <li><strong>Trigger</strong>：触发条件，如 push、pull_request、schedule</li>
      </ul>
      <p><strong>常见用法：</strong></p>
      <ul>
        <li>PR 时跑 lint + test</li>
        <li>合并 main 后自动 build 并部署到 Vercel/Netlify</li>
        <li>定时任务（如每日构建、缓存清理）</li>
        <li>发布 npm 包（打 tag 时触发）</li>
      </ul>
      <pre># 示例：PR 时检查
on: [pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20' }
      - run: npm ci && npm run lint && npm run test</pre>
    `,
  },
  {
    q: '前端部署流程（构建→CDN→灰度→全量）',
    a: `
      <p><strong>典型流程：</strong></p>
      <ol>
        <li><strong>构建</strong>：<code>npm run build</code> 生成静态资源，输出到 dist</li>
        <li><strong>上传 CDN</strong>：将 dist 上传到 OSS/S3 等对象存储，配置 CDN 加速</li>
        <li><strong>灰度发布</strong>：通过路由/网关将部分流量导向新版本（如 5% → 20% → 50%）</li>
        <li><strong>全量发布</strong>：灰度无问题后，100% 流量切到新版本</li>
      </ol>
      <p><strong>注意事项：</strong></p>
      <ul>
        <li>静态资源带 hash，利用浏览器缓存，避免覆盖旧版本</li>
        <li>HTML 不缓存或短缓存，确保能拿到最新的资源引用</li>
        <li>灰度可通过 Nginx 按比例、按 Cookie、按地域等策略实现</li>
      </ul>
    `,
  },
]
</script>
