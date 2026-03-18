<template>
  <QAQuestion
    title="Angular vs React vs Vue"
    :questions="questions"
  >
    <template #description>
      <p>本题考察对三大前端框架设计理念、数据绑定方式及适用场景的理解，帮助面试者建立框架选型思维。</p>
    </template>
  </QAQuestion>
</template>

<script setup lang="ts">
import QAQuestion from '@/components/QAQuestion.vue'

const questions = [
  {
    q: '三大框架的设计理念和核心差异',
    a: `
      <p><strong>Angular：</strong></p>
      <ul>
        <li>全功能企业级框架，开箱即用（路由、表单、HTTP、DI、测试等）</li>
        <li>强约束、强类型，TypeScript 优先，适合大型团队协作</li>
        <li>基于装饰器、模块化、依赖注入的架构</li>
      </ul>
      <p><strong>React：</strong></p>
      <ul>
        <li>专注 UI 层，库而非框架，生态由社区补充（路由用 React Router、状态用 Redux 等）</li>
        <li>函数式、组件化、单向数据流，JSX 语法</li>
        <li>虚拟 DOM + 声明式渲染，强调不可变数据和纯函数</li>
      </ul>
      <p><strong>Vue：</strong></p>
      <ul>
        <li>渐进式框架，可从简单页面逐步引入到复杂 SPA</li>
        <li>模板语法友好，学习曲线平缓，响应式系统简洁</li>
        <li>选项式 + 组合式 API 并存，灵活度高</li>
      </ul>
    `,
  },
  {
    q: '数据绑定方式对比（单向/双向）',
    a: `
      <table border="1" cellpadding="6" style="border-collapse: collapse; width: 100%">
        <tr><th>框架</th><th>单向绑定</th><th>双向绑定</th></tr>
        <tr>
          <td>Angular</td>
          <td><code>[property]="value"</code>、<code>{{ value }}</code></td>
          <td><code>[(ngModel)]</code>（需 FormsModule）</td>
        </tr>
        <tr>
          <td>React</td>
          <td><code>{value}</code>、<code>value={value}</code>，通过 setState 更新</td>
          <td>无内置，需受控组件：value + onChange</td>
        </tr>
        <tr>
          <td>Vue</td>
          <td><code>{{ value }}</code>、<code>:prop="value"</code></td>
          <td><code>v-model</code>（语法糖：:value + @input）</td>
        </tr>
      </table>
      <p><strong>总结：</strong>Angular 和 Vue 都提供双向绑定语法糖；React 坚持单向数据流，双向需手动实现受控组件。</p>
    `,
  },
  {
    q: '适用场景和选型建议',
    a: `
      <p><strong>Angular 适合：</strong></p>
      <ul>
        <li>大型企业应用、复杂业务系统、多团队协作</li>
        <li>需要强类型、规范约束、完整工具链的项目</li>
        <li>已有 Angular 技术栈或 Java/C# 背景团队</li>
      </ul>
      <p><strong>React 适合：</strong></p>
      <ul>
        <li>需要高度灵活、自定义架构的项目</li>
        <li>跨端（React Native）、生态丰富、社区活跃</li>
        <li>强调函数式、不可变、性能优化的场景</li>
      </ul>
      <p><strong>Vue 适合：</strong></p>
      <ul>
        <li>中小型项目、快速迭代、学习成本敏感</li>
        <li>模板驱动、响应式体验优先</li>
        <li>从 jQuery 或传统多页迁移到 SPA</li>
      </ul>
      <p>选型时需考虑团队技能、项目规模、生态需求、长期维护成本。</p>
    `,
  },
]
</script>
