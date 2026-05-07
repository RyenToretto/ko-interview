<template>
  <QAQuestion title="ECharts 与大屏可视化" :questions="questions">
    <template #description>
      <p>长沙 60% JD 要求 ECharts/数据可视化经验，源于本地大量政企大屏、数字孪生、智慧城市项目。</p>
    </template>
  </QAQuestion>
</template>

<script setup lang="ts">
import QAQuestion from '@/components/QAQuestion.vue'

const questions = [
  {
    q: 'ECharts 的核心 API 和基本使用流程？',
    a: `
      <p><strong>4 步基本流程：</strong></p>
      <pre>// 1. 引入 ECharts
import * as echarts from 'echarts'

// 2. 初始化（绑定 DOM）
const chart = echarts.init(document.getElementById('chart'))

// 3. 设置配置（option）
chart.setOption({
  title: { text: '销售额' },
  xAxis: { type: 'category', data: ['1月', '2月', '3月'] },
  yAxis: { type: 'value' },
  series: [{ type: 'line', data: [120, 200, 150] }]
})

// 4. 监听 resize
window.addEventListener('resize', () => chart.resize())</pre>
      <p><strong>核心 API：</strong></p>
      <ul>
        <li><code>echarts.init(dom)</code> — 初始化实例</li>
        <li><code>chart.setOption(option, notMerge)</code> — 配置/更新</li>
        <li><code>chart.resize()</code> — 自适应重绘</li>
        <li><code>chart.on('click', handler)</code> — 事件监听</li>
        <li><code>chart.dispose()</code> — 销毁释放</li>
        <li><code>echarts.registerMap(name, geoJson)</code> — 注册地图</li>
      </ul>
    `,
  },
  {
    q: '常用的 ECharts 图表类型有哪些？分别适用什么场景？',
    a: `
      <ul>
        <li><strong>line（折线图）</strong>：趋势分析、时间序列</li>
        <li><strong>bar（柱状图）</strong>：数据对比、排名</li>
        <li><strong>pie（饼图）</strong>：占比展示（建议 ≤ 5 类）</li>
        <li><strong>scatter（散点图）</strong>：相关性、分布分析</li>
        <li><strong>radar（雷达图）</strong>：多维度评分对比</li>
        <li><strong>map（地图）</strong>：地理数据可视化</li>
        <li><strong>gauge（仪表盘）</strong>：进度/完成率</li>
        <li><strong>funnel（漏斗图）</strong>：转化率分析</li>
        <li><strong>treemap / sunburst</strong>：层级数据</li>
        <li><strong>graph（关系图）</strong>：节点关系网络</li>
        <li><strong>3D 图表</strong>：bar3D / scatter3D / line3D（需 echarts-gl）</li>
      </ul>
    `,
  },
  {
    q: '大屏可视化项目如何做适配？有哪些方案？',
    a: `
      <p><strong>方案 1：transform: scale 等比缩放（最常用）</strong></p>
      <pre>// 设计稿尺寸 1920x1080
const designW = 1920, designH = 1080
function scale() {
  const sw = window.innerWidth / designW
  const sh = window.innerHeight / designH
  const scale = Math.min(sw, sh)
  document.getElementById('app').style.transform =
    \`scale(\${scale}) translate(-50%, -50%)\`
}
window.addEventListener('resize', scale)</pre>
      <ul>
        <li>优点：开发简单，无需考虑各模块自适应</li>
        <li>缺点：极宽/极窄屏幕可能有黑边或字体模糊</li>
      </ul>
      <p><strong>方案 2：rem + postcss-pxtorem</strong></p>
      <pre>// 根据屏幕宽度动态设置 html 字号
function setRem() {
  document.documentElement.style.fontSize =
    (document.documentElement.clientWidth / 1920) * 100 + 'px'
}</pre>
      <p><strong>方案 3：vw/vh + CSS Grid</strong></p>
      <ul>
        <li>使用 vw 单位 + Grid 网格布局</li>
        <li>各模块独立自适应，灵活但开发量大</li>
      </ul>
      <p><strong>ECharts 适配关键：</strong>监听 window resize 调用 chart.resize()，字体使用相对单位。</p>
    `,
  },
  {
    q: '数据可视化常用的库有哪些？如何选型？',
    a: `
      <table border="1" cellpadding="6" style="border-collapse: collapse; width: 100%">
        <tr><th>库</th><th>特点</th><th>适用场景</th></tr>
        <tr><td>ECharts</td><td>开箱即用、国产、文档全</td><td>大部分业务图表（首选）</td></tr>
        <tr><td>D3.js</td><td>底层、灵活、学习成本高</td><td>定制复杂可视化</td></tr>
        <tr><td>AntV (G2/F2)</td><td>蚂蚁出品、设计感强</td><td>中后台分析图表</td></tr>
        <tr><td>Three.js</td><td>3D 渲染（基于 WebGL）</td><td>3D 模型、数字孪生</td></tr>
        <tr><td>Cesium</td><td>3D 地球、地理可视化</td><td>智慧城市、GIS 大屏</td></tr>
        <tr><td>Mapbox GL</td><td>2D/3D 地图渲染</td><td>地图业务</td></tr>
        <tr><td>DataV (阿里)</td><td>大屏组件库</td><td>政企大屏快速搭建</td></tr>
        <tr><td>Chart.js</td><td>轻量、API 简单</td><td>简单图表</td></tr>
      </table>
    `,
  },
  {
    q: 'ECharts 的性能优化方法？',
    a: `
      <ul>
        <li><strong>数据量大</strong>：开启 <code>large: true</code> 大数据模式</li>
        <li><strong>采样</strong>：<code>sampling: 'lttb'</code> 降采样保留趋势</li>
        <li><strong>渐进渲染</strong>：<code>progressive: 500</code> 分批渲染</li>
        <li><strong>按需加载</strong>：使用 <code>echarts/core</code> + 按需引入图表和组件</li>
        <li><strong>避免频繁 setOption</strong>：使用 <code>notMerge: false</code> 增量更新</li>
        <li><strong>使用 Canvas 而非 SVG</strong>：数据量大时 Canvas 性能更好</li>
        <li><strong>Web Worker</strong>：复杂数据处理放 worker 中</li>
        <li><strong>GPU 加速</strong>：3D 图表使用 echarts-gl + WebGL</li>
      </ul>
    `,
  },
]
</script>
