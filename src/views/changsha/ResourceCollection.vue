<template>
  <QuestionCard title="优质学习资源合集" type="qa">
    <template #description>
      <p>精选高质量中文前端学习资源，包括视频、书籍、文档、工具。所有链接可点击新窗口打开。</p>
    </template>

    <el-card shadow="never">
      <template #header><strong>视频教程（B站免费）</strong></template>
      <div class="resource-section" v-html="videos" />
    </el-card>

    <el-card shadow="never">
      <template #header><strong>经典书籍</strong></template>
      <div class="resource-section" v-html="books" />
    </el-card>

    <el-card shadow="never">
      <template #header><strong>在线文档与教程</strong></template>
      <div class="resource-section" v-html="docs" />
    </el-card>

    <el-card shadow="never">
      <template #header><strong>刷题与面试平台</strong></template>
      <div class="resource-section" v-html="platforms" />
    </el-card>

    <el-card shadow="never">
      <template #header><strong>开发工具与效率</strong></template>
      <div class="resource-section" v-html="tools" />
    </el-card>
  </QuestionCard>
</template>

<script setup lang="ts">
import QuestionCard from '@/components/QuestionCard.vue'

const videos = `
<table border="1" cellpadding="8" style="border-collapse: collapse; width: 100%; font-size: 14px">
  <tr><th>课程</th><th>讲师/机构</th><th>内容</th><th>链接</th></tr>
  <tr><td>HTML+CSS+AI 2025版</td><td>Pink老师</td><td>HTML5/CSS3/Flex/Grid/响应式</td><td><a href="https://www.bilibili.com/video/BV1MvaVzUEuz/" target="_blank">B站链接</a></td></tr>
  <tr><td>JS 零基础精英课</td><td>渡一教育</td><td>JS 入门到精通 66集</td><td><a href="https://www.bilibili.com/video/BV1f4411R7M5/" target="_blank">B站链接</a></td></tr>
  <tr><td>Vue3+TS 系统教程</td><td>coderwhy</td><td>Vue3 全家桶 + TS</td><td><a href="https://www.bilibili.com/video/BV1Za4y1r7KE/" target="_blank">B站链接</a></td></tr>
  <tr><td>Vue 零基础到实战</td><td>渡一教育</td><td>Vue3 核心 + 项目实战</td><td><a href="https://www.bilibili.com/video/BV1wh41197Ja/" target="_blank">B站链接</a></td></tr>
  <tr><td>React 18 教程</td><td>尚硅谷</td><td>React 18 + Hooks</td><td><a href="https://www.bilibili.com/video/BV1wy4y1D7JT/" target="_blank">B站链接</a></td></tr>
  <tr><td>TypeScript 入门</td><td>黑马</td><td>TS 零基础入门</td><td><a href="https://www.bilibili.com/video/BV1wR4y1377K/" target="_blank">B站链接</a></td></tr>
  <tr><td>Webpack5 从入门到原理</td><td>尚硅谷</td><td>Webpack 完整教程</td><td><a href="https://www.bilibili.com/video/BV1YU4y1g745/" target="_blank">B站链接</a></td></tr>
  <tr><td>134集全套前端教程</td><td>综合</td><td>HTML+CSS+JS+Vue3</td><td><a href="https://www.bilibili.com/video/BV1GVLiz5E5a/" target="_blank">B站链接</a></td></tr>
</table>
`

const books = `
<table border="1" cellpadding="8" style="border-collapse: collapse; width: 100%; font-size: 14px">
  <tr><th>书名</th><th>豆瓣评分</th><th>适合阶段</th><th>链接</th></tr>
  <tr><td>CSS 世界</td><td>7.7</td><td>入门-进阶</td><td><a href="https://book.douban.com/subject/25786074/" target="_blank">豆瓣</a></td></tr>
  <tr><td>JavaScript 高级程序设计（第5版）</td><td>经典</td><td>入门-进阶</td><td><a href="https://book.douban.com/subject/37143075/" target="_blank">豆瓣</a></td></tr>
  <tr><td>你不知道的 JavaScript（上）</td><td>9.4</td><td>进阶</td><td><a href="https://book.douban.com/subject/26351021/" target="_blank">豆瓣</a></td></tr>
  <tr><td>JavaScript 权威指南（第7版）</td><td>9.6</td><td>进阶-高级</td><td><a href="https://book.douban.com/subject/35396470/" target="_blank">豆瓣</a></td></tr>
  <tr><td>Vue.js 设计与实现</td><td>9.6</td><td>高级</td><td><a href="https://book.douban.com/subject/35768338/" target="_blank">豆瓣</a></td></tr>
  <tr><td>图解 HTTP</td><td>7.1</td><td>入门</td><td><a href="https://book.douban.com/subject/25863515/" target="_blank">豆瓣</a></td></tr>
</table>
`

const docs = `
<table border="1" cellpadding="8" style="border-collapse: collapse; width: 100%; font-size: 14px">
  <tr><th>资源</th><th>说明</th><th>链接</th></tr>
  <tr><td>MDN Web Docs</td><td>最权威的 Web 技术文档</td><td><a href="https://developer.mozilla.org/zh-CN/" target="_blank">访问</a></td></tr>
  <tr><td>现代 JavaScript 教程</td><td>最好的 JS 中文教程</td><td><a href="https://zh.javascript.info/" target="_blank">访问</a></td></tr>
  <tr><td>ES6 入门教程</td><td>阮一峰 ES6 教程</td><td><a href="https://es6.ruanyifeng.com/" target="_blank">访问</a></td></tr>
  <tr><td>Vue3 官方文档</td><td>Vue3 中文文档</td><td><a href="https://cn.vuejs.org/" target="_blank">访问</a></td></tr>
  <tr><td>React 官方文档</td><td>React 新版文档</td><td><a href="https://react.dev/" target="_blank">访问</a></td></tr>
  <tr><td>TypeScript 文档</td><td>TS 中文文档</td><td><a href="https://www.typescriptlang.org/zh/" target="_blank">访问</a></td></tr>
  <tr><td>CSS-Tricks</td><td>CSS 技巧与指南</td><td><a href="https://css-tricks.com/" target="_blank">访问</a></td></tr>
  <tr><td>Can I Use</td><td>浏览器兼容性查询</td><td><a href="https://caniuse.com/" target="_blank">访问</a></td></tr>
</table>
`

const platforms = `
<table border="1" cellpadding="8" style="border-collapse: collapse; width: 100%; font-size: 14px">
  <tr><th>平台</th><th>用途</th><th>链接</th></tr>
  <tr><td>力扣 LeetCode</td><td>算法刷题（中文版）</td><td><a href="https://leetcode.cn/" target="_blank">访问</a></td></tr>
  <tr><td>牛客网</td><td>前端面试真题 + 模拟面试</td><td><a href="https://www.nowcoder.com/" target="_blank">访问</a></td></tr>
  <tr><td>面试鸭</td><td>前端 200 道热门面试题</td><td><a href="https://www.mianshiya.com/" target="_blank">访问</a></td></tr>
  <tr><td>前端面试手册</td><td>系统化面试准备</td><td><a href="https://www.frontendinterviewhandbook.com/zh-CN/" target="_blank">访问</a></td></tr>
  <tr><td>艾编程</td><td>前端学习路线 + 面试题</td><td><a href="https://www.arryblog.com/" target="_blank">访问</a></td></tr>
</table>
`

const tools = `
<table border="1" cellpadding="8" style="border-collapse: collapse; width: 100%; font-size: 14px">
  <tr><th>工具</th><th>用途</th><th>链接</th></tr>
  <tr><td>VS Code</td><td>代码编辑器</td><td><a href="https://code.visualstudio.com/" target="_blank">下载</a></td></tr>
  <tr><td>Cursor</td><td>AI 代码编辑器</td><td><a href="https://cursor.sh/" target="_blank">下载</a></td></tr>
  <tr><td>Chrome DevTools</td><td>浏览器调试工具</td><td><a href="https://developer.chrome.com/docs/devtools/" target="_blank">文档</a></td></tr>
  <tr><td>Vue Devtools</td><td>Vue 调试扩展</td><td><a href="https://devtools.vuejs.org/" target="_blank">安装</a></td></tr>
  <tr><td>Postman</td><td>API 调试工具</td><td><a href="https://www.postman.com/" target="_blank">下载</a></td></tr>
  <tr><td>GitHub</td><td>代码托管 + 开源</td><td><a href="https://github.com/" target="_blank">访问</a></td></tr>
</table>
`
</script>

<style scoped>
.resource-section {
  line-height: 1.6;
}

.resource-section table {
  margin: 0;
}

.resource-section a {
  color: var(--primary-color);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.resource-section a:hover {
  opacity: 0.8;
}
</style>
