<template>
  <QAQuestion
    title="transform 与 opacity 的性能优势"
    :questions="questions"
  >
    <template #description>
      <p>本题考察对浏览器渲染管线和 CSS 性能优化的理解。</p>
    </template>

    <template #extra>
      <el-divider>在线对比演示</el-divider>
      <CssRunner
        title="渲染性能对比（打开 DevTools Performance 面板观察）"
        :html="previewHtml"
        :initial-css="initialCss"
      />
    </template>
  </QAQuestion>
</template>

<script setup lang="ts">
import QAQuestion from '@/components/QAQuestion.vue'
import CssRunner from '@/components/CssRunner.vue'

const questions = [
  {
    q: '为什么 transform 和 opacity 的动画性能比 top/left/width 好？',
    a: `
      <p><strong>核心原因：渲染管线的阶段不同。</strong></p>
      <p>浏览器渲染管线：</p>
      <pre>JS → Style → Layout → Paint → Composite</pre>
      <ul>
        <li><strong>修改 top/left/width/height</strong>：触发 <strong>Layout（重排）</strong>→ Paint → Composite，代价最高</li>
        <li><strong>修改 color/background/box-shadow</strong>：触发 <strong>Paint（重绘）</strong>→ Composite，代价中等</li>
        <li><strong>修改 transform/opacity</strong>：<strong>只触发 Composite（合成）</strong>，代价最低</li>
      </ul>
      <p>transform 和 opacity 可以由 <strong>GPU（合成器线程）</strong>独立处理，不需要主线程参与，不会阻塞 JS 执行。</p>
    `,
  },
  {
    q: '什么是合成层（Compositing Layer）？如何创建？',
    a: `
      <p><strong>合成层</strong>：浏览器将某些元素提升为独立的 GPU 层，与其他层分开渲染和合成。</p>
      <p><strong>触发条件（创建合成层）：</strong></p>
      <ul>
        <li><code>transform: translateZ(0)</code> 或 <code>translate3d(0,0,0)</code></li>
        <li><code>will-change: transform / opacity</code></li>
        <li><code>opacity</code> 小于 1（部分情况）</li>
        <li><code>position: fixed</code></li>
        <li><code>&lt;video&gt;</code>、<code>&lt;canvas&gt;</code>、<code>&lt;iframe&gt;</code> 元素</li>
      </ul>
      <p><strong>注意</strong>：过多合成层会占用大量 GPU 内存，不要滥用 <code>will-change</code>。</p>
    `,
  },
  {
    q: '什么是重排（Reflow）和重绘（Repaint）？哪些操作会触发？',
    a: `
      <p><strong>重排（Reflow/Layout）</strong>：元素的几何属性（位置、大小）改变，需要重新计算布局。</p>
      <ul>
        <li>触发操作：修改 width/height/margin/padding/top/left、添加删除 DOM、读取 offsetWidth/scrollTop 等</li>
      </ul>
      <p><strong>重绘（Repaint）</strong>：元素外观改变但不影响布局，重新绘制像素。</p>
      <ul>
        <li>触发操作：修改 color/background/border-color/box-shadow/visibility 等</li>
      </ul>
      <p><strong>性能代价</strong>：重排 > 重绘 > 合成。重排一定触发重绘，重绘不一定触发重排。</p>
    `,
  },
  {
    q: '如何优化 CSS 动画性能？',
    a: `
      <ul>
        <li><strong>优先使用 transform + opacity</strong>（只触发合成）</li>
        <li><strong>使用 will-change</strong> 提前告知浏览器（用完要移除）</li>
        <li><strong>使用 requestAnimationFrame</strong> 替代 setTimeout 做 JS 动画</li>
        <li><strong>避免同步读写布局属性</strong>（如循环中交替读 offsetWidth 写 style.width）</li>
        <li><strong>批量修改 DOM</strong>：使用 DocumentFragment 或 display:none 后批量操作</li>
        <li><strong>使用 CSS contain</strong>：<code>contain: layout paint</code> 限制重排范围</li>
      </ul>
    `,
  },
]

const previewHtml = `<div style="display:flex;gap:24px;padding:16px">
  <div>
    <p style="font-size:12px;color:#999;margin-bottom:8px">使用 transform（高性能 ✓）</p>
    <div class="good-box">transform</div>
  </div>
  <div>
    <p style="font-size:12px;color:#999;margin-bottom:8px">使用 top/left（低性能 ✗）</p>
    <div class="bad-box">top/left</div>
  </div>
</div>`

const initialCss = `/* 高性能动画：只触发 Composite */
.good-box {
  width: 80px;
  height: 80px;
  background: #67c23a;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-size: 12px;
  animation: move-good 2s ease-in-out infinite alternate;
}

@keyframes move-good {
  from { transform: translateX(0); }
  to { transform: translateX(120px); }
}

/* 低性能动画：触发 Layout + Paint + Composite */
.bad-box {
  width: 80px;
  height: 80px;
  background: #f56c6c;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-size: 12px;
  position: relative;
  animation: move-bad 2s ease-in-out infinite alternate;
}

@keyframes move-bad {
  from { left: 0; }
  to { left: 120px; }
}`
</script>
