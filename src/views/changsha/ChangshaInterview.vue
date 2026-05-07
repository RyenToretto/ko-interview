<template>
  <QAQuestion title="长沙前端高频面试题" :questions="questions">
    <template #description>
      <p>基于长沙前端市场分析，汇总面试高频考点。长沙以 <strong>Vue 生态</strong>为主流，同时注重<strong>大屏可视化</strong>和<strong>小程序</strong>开发能力。</p>
    </template>

    <template #extra>
      <el-divider>在线练习区</el-divider>
      <CodeRunner title="长沙面试手写题练习" :initial-code="playgroundCode" />
    </template>
  </QAQuestion>
</template>

<script setup lang="ts">
import QAQuestion from '@/components/QAQuestion.vue'
import CodeRunner from '@/components/CodeRunner.vue'

const questions = [
  {
    q: 'Vue2 和 Vue3 有哪些区别？（长沙必问 TOP1）',
    a: `
      <p>这是长沙面试<strong>出现率最高</strong>的题目，因为大量公司仍在 Vue2 → Vue3 迁移中。</p>
      <ul>
        <li><strong>响应式</strong>：Object.defineProperty → Proxy</li>
        <li><strong>API</strong>：Options API → Composition API</li>
        <li><strong>性能</strong>：静态提升、Patch Flags、Tree Shaking</li>
        <li><strong>TS</strong>：原生 TypeScript 支持</li>
        <li><strong>生态</strong>：Vuex → Pinia，Vue Router 4</li>
        <li><strong>模板</strong>：Fragment 支持，Teleport，Suspense</li>
      </ul>
    `,
  },
  {
    q: '说说你对 Vue 响应式原理的理解？Proxy 比 defineProperty 好在哪？',
    a: `
      <p><strong>Vue2</strong>：Object.defineProperty 逐个劫持属性的 getter/setter</p>
      <ul>
        <li>无法检测新增/删除属性（需要 Vue.set）</li>
        <li>无法检测数组索引和 length 变化</li>
        <li>初始化递归遍历所有属性，性能开销大</li>
      </ul>
      <p><strong>Vue3</strong>：Proxy 代理整个对象</p>
      <ul>
        <li>自动检测新增/删除属性</li>
        <li>支持数组索引、Map/Set</li>
        <li>懒代理（访问时才递归），性能更好</li>
      </ul>
    `,
  },
  {
    q: '如何进行前端性能优化？（长沙中高级必问）',
    a: `
      <p><strong>加载阶段</strong>：</p>
      <ul>
        <li>路由懒加载 + 代码分割</li>
        <li>图片优化（WebP、懒加载、CDN）</li>
        <li>首屏 SSR 或预渲染</li>
        <li>Gzip/Brotli 压缩</li>
      </ul>
      <p><strong>运行阶段</strong>：</p>
      <ul>
        <li>虚拟列表（长列表优化）</li>
        <li>防抖/节流</li>
        <li>使用 transform/opacity 做动画</li>
        <li>减少重排重绘</li>
        <li>Web Worker 处理 CPU 密集型任务</li>
      </ul>
      <p><strong>缓存</strong>：</p>
      <ul>
        <li>强缓存 + 协商缓存配置</li>
        <li>Service Worker 离线缓存</li>
        <li>localStorage/sessionStorage 合理使用</li>
      </ul>
    `,
  },
  {
    q: 'ECharts 的使用经验？如何做大屏适配？（长沙特色）',
    a: `
      <p><strong>ECharts 基础</strong>：</p>
      <ul>
        <li>init 初始化、setOption 配置、resize 自适应</li>
        <li>常用图表：折线图、柱状图、饼图、地图、仪表盘</li>
        <li>事件监听、动态数据更新</li>
      </ul>
      <p><strong>大屏适配方案</strong>：</p>
      <ul>
        <li><strong>scale 缩放方案</strong>：transform: scale() 等比缩放整个大屏</li>
        <li><strong>rem/vw 方案</strong>：根据屏幕宽度动态计算字号和尺寸</li>
        <li><strong>CSS Grid + 百分比</strong>：网格布局自适应</li>
        <li>ECharts 监听 window resize 事件调用 chart.resize()</li>
      </ul>
    `,
  },
  {
    q: '微信小程序开发相关问题？uni-app 和原生小程序的区别？',
    a: `
      <p><strong>原生小程序</strong>：WXML + WXSS + JS，每个页面 4 个文件</p>
      <p><strong>uni-app 优势</strong>：</p>
      <ul>
        <li>一套代码编译到多端（微信/支付宝/H5/App）</li>
        <li>使用 Vue 语法，学习成本低</li>
        <li>条件编译（#ifdef MP-WEIXIN）</li>
        <li>丰富的插件市场</li>
      </ul>
      <p><strong>常见面试点</strong>：</p>
      <ul>
        <li>小程序生命周期（App/Page/Component）</li>
        <li>页面间通信（EventChannel、全局 Store）</li>
        <li>分包加载优化</li>
        <li>自定义组件 vs 页面</li>
      </ul>
    `,
  },
  {
    q: '说说跨域问题？你在项目中是怎么解决的？',
    a: `
      <p><strong>同源策略</strong>：协议 + 域名 + 端口 三者相同才是同源。</p>
      <p><strong>开发环境</strong>：Vite/Webpack 的 proxy 代理（最常用）</p>
      <pre>// vite.config.ts
server: {
  proxy: {
    '/api': {
      target: 'http://backend.example.com',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\\/api/, '')
    }
  }
}</pre>
      <p><strong>生产环境</strong>：</p>
      <ul>
        <li>Nginx 反向代理（最常用）</li>
        <li>后端配置 CORS（Access-Control-Allow-Origin）</li>
        <li>JSONP（只支持 GET，已少用）</li>
      </ul>
    `,
  },
]

const playgroundCode = `// 长沙面试常考手写题

// 1. 手写防抖（长沙高频）
function debounce(fn, delay) {
  let timer = null
  return function(...args) {
    clearTimeout(timer)
    timer = setTimeout(() => fn.apply(this, args), delay)
  }
}

// 2. 手写节流
function throttle(fn, interval) {
  let lastTime = 0
  return function(...args) {
    const now = Date.now()
    if (now - lastTime >= interval) {
      lastTime = now
      fn.apply(this, args)
    }
  }
}

// 3. 数组扁平化（长沙常考）
function flatten(arr) {
  return arr.reduce((acc, item) =>
    acc.concat(Array.isArray(item) ? flatten(item) : item), [])
}

// 4. 数组去重
function unique(arr) {
  return [...new Set(arr)]
}

// 测试
const debouncedLog = debounce((msg) => console.log('防抖:', msg), 300)
debouncedLog('a')
debouncedLog('b')
debouncedLog('c')

console.log('扁平化:', flatten([1, [2, [3, [4]]]]))
console.log('去重:', unique([1, 2, 2, 3, 3, 4]))
`
</script>
