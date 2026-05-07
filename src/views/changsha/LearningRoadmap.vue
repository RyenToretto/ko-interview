<template>
  <QuestionCard title="前端学习路线（从小白到顶级）" type="qa">
    <template #description>
      <p>本页为长沙前端面试准备的<strong>完整学习路线</strong>，从零基础到高级工程师，分 5 个阶段，每个阶段包含知识点、推荐资源和项目实战。</p>
      <p>所有链接均可点击打开。</p>
    </template>

    <el-card shadow="never">
      <template #header><strong>阶段一：HTML + CSS 基础（1-30天）</strong></template>
      <div class="roadmap-section" v-html="stage1" />
    </el-card>

    <el-card shadow="never">
      <template #header><strong>阶段二：JavaScript 核心（30-90天）</strong></template>
      <div class="roadmap-section" v-html="stage2" />
    </el-card>

    <el-card shadow="never">
      <template #header><strong>阶段三：前端框架 + TypeScript（91-180天）</strong></template>
      <div class="roadmap-section" v-html="stage3" />
    </el-card>

    <el-card shadow="never">
      <template #header><strong>阶段四：工程化 + 性能优化（180-270天）</strong></template>
      <div class="roadmap-section" v-html="stage4" />
    </el-card>

    <el-card shadow="never">
      <template #header><strong>阶段五：面试冲刺 + 高级进阶（270-365天）</strong></template>
      <div class="roadmap-section" v-html="stage5" />
    </el-card>

    <el-card shadow="never">
      <template #header><strong>长沙前端市场概况</strong></template>
      <div class="roadmap-section" v-html="market" />
    </el-card>
  </QuestionCard>
</template>

<script setup lang="ts">
import QuestionCard from '@/components/QuestionCard.vue'

const stage1 = `
<h4>知识点</h4>
<ul>
  <li>HTML5 语义化标签（header/nav/main/section/article/footer）</li>
  <li>CSS 盒模型（content-box vs border-box）、BFC</li>
  <li>Flex 布局、Grid 布局</li>
  <li>定位（relative/absolute/fixed/sticky）</li>
  <li>响应式设计（媒体查询、rem/vw/vh）</li>
  <li>CSS 预处理器（Less/Scss 基础）</li>
  <li>移动端适配（viewport、1px 问题）</li>
</ul>

<h4>推荐视频教程</h4>
<ul>
  <li><a href="https://www.bilibili.com/video/BV1MvaVzUEuz/" target="_blank" rel="noopener">B站 Pink老师 2025版 HTML+CSS+Grid+Flex+响应式+移动端+AI（149万播放）</a></li>
  <li><a href="https://www.bilibili.com/video/BV1GVLiz5E5a/" target="_blank" rel="noopener">B站 134集 Web前端零基础入门 HTML5+CSS3+JS+Vue3 全套</a></li>
  <li><a href="https://www.bilibili.com/video/BV14J4114768/" target="_blank" rel="noopener">B站 黑马程序员 前端基础教程</a></li>
</ul>

<h4>推荐书籍</h4>
<ul>
  <li><a href="https://book.douban.com/subject/25786074/" target="_blank" rel="noopener">《CSS 世界》张鑫旭（豆瓣 7.7）</a></li>
  <li><a href="https://book.douban.com/subject/35315Mo070/" target="_blank" rel="noopener">《CSS 新世界》张鑫旭（豆瓣 8.3）</a></li>
</ul>

<h4>在线文档</h4>
<ul>
  <li><a href="https://developer.mozilla.org/zh-CN/docs/Learn/HTML" target="_blank" rel="noopener">MDN HTML 教程（中文）</a></li>
  <li><a href="https://developer.mozilla.org/zh-CN/docs/Learn/CSS" target="_blank" rel="noopener">MDN CSS 教程（中文）</a></li>
  <li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank" rel="noopener">CSS-Tricks Flexbox 完全指南</a></li>
</ul>

<h4>实战项目</h4>
<ul>
  <li>仿小米官网首页</li>
  <li>响应式个人博客页面</li>
  <li>移动端 H5 页面</li>
</ul>
`

const stage2 = `
<h4>知识点</h4>
<ul>
  <li>变量与数据类型、作用域（var/let/const）</li>
  <li>原型与原型链、继承</li>
  <li>this 指向（5 种绑定规则）</li>
  <li>闭包原理与应用</li>
  <li>ES6+ 新特性（解构、展开、箭头函数、模板字符串、Promise、async/await）</li>
  <li>事件循环（宏任务/微任务）</li>
  <li>DOM 操作与事件机制</li>
  <li>Ajax / Fetch / Axios</li>
  <li>手写题：防抖、节流、深拷贝、call/apply/bind、Promise</li>
</ul>

<h4>推荐视频教程</h4>
<ul>
  <li><a href="https://www.bilibili.com/video/BV1f4411R7M5/" target="_blank" rel="noopener">B站 渡一教育 JS零基础入门精英课 2026新版（30万播放）</a></li>
  <li><a href="https://www.bilibili.com/video/BV1nh411e7oG/" target="_blank" rel="noopener">B站 2025最新前端学习路线 零基础到精通</a></li>
  <li><a href="https://www.bilibili.com/video/BV1Y84y1L7Nn/" target="_blank" rel="noopener">B站 尚硅谷 JavaScript 基础+高级</a></li>
</ul>

<h4>推荐书籍</h4>
<ul>
  <li><a href="https://book.douban.com/subject/37143075/" target="_blank" rel="noopener">《JavaScript 高级程序设计》第5版（红宝书，2024最新）</a></li>
  <li><a href="https://book.douban.com/subject/26351021/" target="_blank" rel="noopener">《你不知道的 JavaScript》上卷（豆瓣 9.4）</a></li>
  <li><a href="https://book.douban.com/subject/35396470/" target="_blank" rel="noopener">《JavaScript 权威指南》第7版（豆瓣 9.6）</a></li>
  <li><a href="https://book.douban.com/subject/35175321/" target="_blank" rel="noopener">《JavaScript 忍者秘籍》第2版</a></li>
</ul>

<h4>在线文档</h4>
<ul>
  <li><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide" target="_blank" rel="noopener">MDN JavaScript 指南（中文）</a></li>
  <li><a href="https://zh.javascript.info/" target="_blank" rel="noopener">现代 JavaScript 教程（javascript.info 中文版）</a></li>
  <li><a href="https://es6.ruanyifeng.com/" target="_blank" rel="noopener">ES6 入门教程（阮一峰）</a></li>
</ul>

<h4>实战项目</h4>
<ul>
  <li>原生 JS 实现轮播图</li>
  <li>原生 JS TodoList 应用</li>
  <li>Axios 封装 + 天气查询 App</li>
</ul>
`

const stage3 = `
<h4>知识点</h4>
<ul>
  <li><strong>Vue3</strong>：Composition API、ref/reactive、computed/watch、生命周期、组件通信、Vue Router、Pinia</li>
  <li><strong>React</strong>：JSX、Hooks（useState/useEffect/useMemo/useCallback）、Context、Redux/Zustand</li>
  <li><strong>TypeScript</strong>：类型系统、interface/type、泛型、工具类型、类型体操</li>
  <li>组件库使用（Element Plus / Ant Design / Vant）</li>
</ul>

<h4>推荐视频教程</h4>
<ul>
  <li><a href="https://www.bilibili.com/video/BV1wh41197Ja/" target="_blank" rel="noopener">B站 渡一教育 Vue 零基础到实战 2026新版</a></li>
  <li><a href="https://www.bilibili.com/video/BV1Za4y1r7KE/" target="_blank" rel="noopener">B站 coderwhy Vue3+TS 系统教程</a></li>
  <li><a href="https://www.bilibili.com/video/BV1wy4y1D7JT/" target="_blank" rel="noopener">B站 尚硅谷 React 18 教程</a></li>
  <li><a href="https://www.bilibili.com/video/BV1wR4y1377K/" target="_blank" rel="noopener">B站 黑马 TypeScript 零基础入门</a></li>
</ul>

<h4>推荐书籍</h4>
<ul>
  <li><a href="https://book.douban.com/subject/35768338/" target="_blank" rel="noopener">《Vue.js 设计与实现》霍春阳（豆瓣 9.6）</a></li>
  <li><a href="https://book.douban.com/subject/35021922/" target="_blank" rel="noopener">《React 设计原理》卡颂</a></li>
  <li><a href="https://book.douban.com/subject/33399936/" target="_blank" rel="noopener">《TypeScript 编程》</a></li>
</ul>

<h4>在线文档</h4>
<ul>
  <li><a href="https://cn.vuejs.org/guide/introduction.html" target="_blank" rel="noopener">Vue3 官方文档（中文）</a></li>
  <li><a href="https://react.dev/" target="_blank" rel="noopener">React 官方文档（新版）</a></li>
  <li><a href="https://www.typescriptlang.org/zh/docs/" target="_blank" rel="noopener">TypeScript 官方文档（中文）</a></li>
  <li><a href="https://pinia.vuejs.org/zh/" target="_blank" rel="noopener">Pinia 官方文档（中文）</a></li>
  <li><a href="https://router.vuejs.org/zh/" target="_blank" rel="noopener">Vue Router 官方文档（中文）</a></li>
</ul>

<h4>实战项目</h4>
<ul>
  <li>Vue3 + TS + Element Plus 后台管理系统</li>
  <li>React + Zustand + Ant Design 电商后台</li>
  <li>uni-app 跨端小程序</li>
</ul>
`

const stage4 = `
<h4>知识点</h4>
<ul>
  <li>Webpack 原理（loader/plugin/HMR/Tree Shaking）</li>
  <li>Vite 原理（ESM/esbuild/Rollup）</li>
  <li>模块化（CommonJS vs ESM）</li>
  <li>代码规范（ESLint + Prettier + Husky + commitlint）</li>
  <li>首屏优化、懒加载、代码分割</li>
  <li>浏览器缓存（强缓存/协商缓存）</li>
  <li>CI/CD（GitHub Actions、Docker 基础）</li>
  <li>Nginx 基础配置</li>
  <li>单元测试（Vitest / Jest）</li>
</ul>

<h4>推荐视频教程</h4>
<ul>
  <li><a href="https://www.bilibili.com/video/BV1YU4y1g745/" target="_blank" rel="noopener">B站 尚硅谷 Webpack5 从入门到原理</a></li>
  <li><a href="https://www.bilibili.com/video/BV1GN4y1M7P5/" target="_blank" rel="noopener">B站 前端工程化完整解决方案</a></li>
</ul>

<h4>推荐书籍</h4>
<ul>
  <li><a href="https://book.douban.com/subject/35326878/" target="_blank" rel="noopener">《Webpack 实战：入门、进阶与调优》</a></li>
  <li><a href="https://book.douban.com/subject/35175321/" target="_blank" rel="noopener">《高性能 JavaScript》</a></li>
</ul>

<h4>在线文档</h4>
<ul>
  <li><a href="https://vitejs.dev/guide/" target="_blank" rel="noopener">Vite 官方文档</a></li>
  <li><a href="https://webpack.js.org/concepts/" target="_blank" rel="noopener">Webpack 官方文档</a></li>
  <li><a href="https://vitest.dev/guide/" target="_blank" rel="noopener">Vitest 官方文档</a></li>
</ul>
`

const stage5 = `
<h4>高级知识点</h4>
<ul>
  <li>浏览器渲染原理（从 URL 到页面展示）</li>
  <li>HTTP/2、HTTP/3、HTTPS 原理</li>
  <li>前端安全（XSS/CSRF/点击劫持）</li>
  <li>微前端架构（qiankun / Module Federation）</li>
  <li>SSR / SSG（Next.js / Nuxt.js）</li>
  <li>Node.js 服务端开发（Express / Koa / Nest.js）</li>
  <li>数据结构与算法（LeetCode 刷题）</li>
  <li>设计模式（单例/观察者/策略/发布订阅）</li>
  <li>低代码/可视化/WebGL/3D（D3.js/Three.js/ECharts）</li>
</ul>

<h4>推荐刷题平台</h4>
<ul>
  <li><a href="https://leetcode.cn/" target="_blank" rel="noopener">力扣 LeetCode（中文版）</a></li>
  <li><a href="https://www.nowcoder.com/" target="_blank" rel="noopener">牛客网（前端面试真题）</a></li>
  <li><a href="https://www.mianshiya.com/" target="_blank" rel="noopener">面试鸭（前端 200 道热门题）</a></li>
</ul>

<h4>推荐书籍</h4>
<ul>
  <li><a href="https://book.douban.com/subject/26898555/" target="_blank" rel="noopener">《图解 HTTP》</a></li>
  <li><a href="https://book.douban.com/subject/35030Mo532/" target="_blank" rel="noopener">《学习 JavaScript 数据结构与算法》</a></li>
  <li><a href="https://book.douban.com/subject/30143702/" target="_blank" rel="noopener">《前端架构设计》</a></li>
</ul>

<h4>面试准备</h4>
<ul>
  <li>准备 3-5 个高质量项目（含 README + 在线预览）</li>
  <li>针对性复习：HTML/CSS → JS → 框架 → 工程化 → 网络 → 算法</li>
  <li>模拟面试练习（牛客网模拟面试、同伴互面）</li>
  <li>简历优化：STAR 法则描述项目，量化成果</li>
</ul>
`

const market = `
<h4>长沙前端薪资水平（2025年）</h4>
<ul>
  <li><strong>平均月薪</strong>：¥11,700</li>
  <li><strong>薪资区间</strong>：¥9,400 - ¥14,100（67.5% 集中在 8-15K）</li>
  <li><strong>1-3 年经验</strong>：¥7,400</li>
  <li><strong>3-5 年经验</strong>：¥9,300</li>
  <li><strong>5-10 年经验</strong>：¥10,000+</li>
</ul>

<h4>长沙主要前端公司</h4>
<ul>
  <li>万兴科技、安克创新（国际化产品）</li>
  <li>中联重科、三一重工（工业互联网）</li>
  <li>拓维信息、亚信科技（信息技术）</li>
  <li>芒果 TV（视频/娱乐）</li>
  <li>各类 GIS/大屏可视化项目公司</li>
</ul>

<h4>长沙特色考察方向</h4>
<ul>
  <li><strong>大屏可视化</strong>：ECharts / DataV / 数据大屏适配</li>
  <li><strong>GIS 地图</strong>：高德/百度地图 SDK、Leaflet、Cesium</li>
  <li><strong>微信小程序</strong>：uni-app 跨端开发</li>
  <li><strong>Electron/Tauri</strong>：桌面应用开发</li>
  <li><strong>Vue 生态为主</strong>：长沙企业以 Vue 技术栈为主流</li>
</ul>
`
</script>

<style scoped>
.roadmap-section {
  line-height: 1.8;
  color: var(--text-primary);
}

.roadmap-section h4 {
  margin: 16px 0 8px;
  color: var(--primary-color);
  font-size: 15px;
}

.roadmap-section h4:first-child {
  margin-top: 0;
}

.roadmap-section ul {
  padding-left: 20px;
  margin-bottom: 8px;
}

.roadmap-section li {
  margin-bottom: 4px;
  font-size: 14px;
}

.roadmap-section a {
  color: var(--primary-color);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.roadmap-section a:hover {
  opacity: 0.8;
}
</style>
