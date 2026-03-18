<template>
  <QAQuestion
    title="CSS 经典「为什么」陷阱"
    :questions="questions"
  >
    <template #description>
      <p>本题汇集 CSS 中最常见的 4 个「为什么不生效」问题，考察候选人对 CSS 渲染规则的深层理解。</p>
    </template>

    <template #extra>
      <el-divider>在线演示区</el-divider>
      <CssRunner
        title="CSS 陷阱在线验证"
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
    q: '为什么 margin 会合并（塌陷）？什么时候会发生？如何避免？',
    a: `
      <p><strong>什么是 margin 合并：</strong>相邻块级元素的垂直 margin 不会叠加，而是取较大值。</p>
      <p><strong>发生条件：</strong></p>
      <ul>
        <li><strong>兄弟元素</strong>：上方元素的 margin-bottom 和下方元素的 margin-top 合并</li>
        <li><strong>父子元素</strong>：父元素没有 border/padding/overflow 时，子元素的 margin-top 会「穿透」到父元素外面</li>
        <li><strong>空块元素</strong>：自身的 margin-top 和 margin-bottom 合并</li>
      </ul>
      <p><strong>避免方式：</strong></p>
      <ul>
        <li>父元素加 <code>overflow: hidden</code>（触发 BFC）</li>
        <li>父元素加 <code>border-top: 1px solid transparent</code> 或 <code>padding-top: 1px</code></li>
        <li>使用 <code>display: flex</code> 或 <code>display: grid</code>（Flex/Grid 子元素不会 margin 合并）</li>
      </ul>
      <p><strong>注意：</strong>水平方向的 margin 不会合并，只有垂直方向会。</p>
    `,
  },
  {
    q: '为什么 inline 元素不能设置宽高？哪些属性对 inline 元素无效？',
    a: `
      <p><strong>原因：</strong>inline 元素（如 <code>&lt;span&gt;</code>、<code>&lt;a&gt;</code>、<code>&lt;em&gt;</code>）的大小由内容决定，不参与块级布局。</p>
      <p><strong>对 inline 元素无效的属性：</strong></p>
      <ul>
        <li><code>width</code> / <code>height</code> — 完全无效</li>
        <li><code>margin-top</code> / <code>margin-bottom</code> — 无效（左右有效）</li>
        <li><code>padding-top</code> / <code>padding-bottom</code> — 视觉上生效但<strong>不影响布局</strong>（不会撑开行高）</li>
      </ul>
      <p><strong>解决方式：</strong></p>
      <ul>
        <li><code>display: inline-block</code> — 既能行内排列，又能设置宽高</li>
        <li><code>display: block</code> — 变为块级元素</li>
        <li><code>display: flex</code> — 变为弹性容器</li>
      </ul>
    `,
  },
  {
    q: '为什么 height: 100% 有时不生效？',
    a: `
      <p><strong>核心原因：</strong>百分比高度需要<strong>父元素有明确的高度</strong>才能计算。</p>
      <p><strong>不生效的场景：</strong></p>
      <pre>.parent { /* 没有设置 height */ }
.child { height: 100%; /* 无效！父元素高度由内容决定，形成循环依赖 */ }</pre>
      <p><strong>生效的条件（任选一种）：</strong></p>
      <ul>
        <li>父元素有固定高度：<code>height: 500px</code></li>
        <li>父元素也是 100%，且一直向上到 <code>html, body { height: 100% }</code></li>
        <li>父元素是 <code>position: absolute/fixed</code>（脱离文档流，高度由定位决定）</li>
        <li>使用 <code>100vh</code> 代替 <code>100%</code>（直接相对视口）</li>
        <li>父元素是 Flex/Grid 容器，子元素默认 <code>stretch</code> 自动撑满</li>
      </ul>
    `,
  },
  {
    q: '为什么 vertical-align 不生效？它到底对齐的是什么？',
    a: `
      <p><strong>核心误解：</strong>很多人以为 <code>vertical-align</code> 是让元素在父容器内垂直居中，但它只作用于 <strong>inline / inline-block / table-cell</strong> 元素。</p>
      <p><strong>不生效的场景：</strong></p>
      <ul>
        <li>对 <code>display: block</code> 元素无效</li>
        <li>对 Flex 子元素无效（Flex 用 <code>align-items</code>）</li>
      </ul>
      <p><strong>vertical-align 对齐的是：</strong></p>
      <ul>
        <li><strong>inline/inline-block 元素</strong>：相对于同一行内的其他 inline 元素（行框基线）对齐</li>
        <li><strong>table-cell 元素</strong>：内容在单元格内垂直对齐</li>
      </ul>
      <p><strong>常见值：</strong></p>
      <ul>
        <li><code>baseline</code>（默认）：对齐基线</li>
        <li><code>middle</code>：对齐中线（常用于图片和文字对齐）</li>
        <li><code>top / bottom</code>：对齐行框顶部/底部</li>
      </ul>
      <p><strong>经典场景</strong>：图片底部有 3px 间隙 → 因为 <code>img</code> 是 inline 元素，默认 baseline 对齐。解决：<code>vertical-align: middle</code> 或 <code>display: block</code>。</p>
    `,
  },
]

const previewHtml = `<h4 style="margin-top:0">1. margin 合并演示</h4>
<div class="margin-demo">
  <div class="margin-box-a">margin-bottom: 30px</div>
  <div class="margin-box-b">margin-top: 20px（实际间距=30px，不是50px）</div>
</div>

<h4>2. inline 元素宽高演示</h4>
<div class="inline-demo">
  <span class="inline-span">我是 span（设了宽高但无效）</span>
  <span class="inline-block-span">我是 inline-block（宽高生效）</span>
</div>

<h4>3. height: 100% 演示</h4>
<div class="height-parent">
  <div class="height-child">height:100% 生效（父有固定高度）</div>
</div>

<h4>4. vertical-align 演示</h4>
<div class="va-demo">
  文字 <img class="va-img" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Crect fill='%23409eff' width='40' height='40' rx='4'/%3E%3C/svg%3E" /> 对齐
</div>`

const initialCss = `/* 1. margin 合并 */
.margin-demo { background: #f5f5f5; padding: 1px 12px; border-radius: 6px; margin-bottom: 12px; }
.margin-box-a { background: #409eff; color: #fff; padding: 8px; margin-bottom: 30px; border-radius: 4px; font-size: 13px; }
.margin-box-b { background: #67c23a; color: #fff; padding: 8px; margin-top: 20px; border-radius: 4px; font-size: 13px; }

/* 2. inline 宽高 */
.inline-demo { margin-bottom: 12px; }
.inline-span {
  width: 200px;    /* 无效！ */
  height: 60px;    /* 无效！ */
  background: #f56c6c;
  color: #fff;
  padding: 4px 8px;
  font-size: 13px;
}
.inline-block-span {
  display: inline-block;
  width: 240px;
  height: 40px;
  line-height: 40px;
  background: #67c23a;
  color: #fff;
  text-align: center;
  font-size: 13px;
  border-radius: 4px;
}

/* 3. height 100% */
.height-parent {
  height: 80px;  /* 父有固定高度，子 100% 才生效 */
  background: #f0f9ff;
  border: 2px dashed #409eff;
  border-radius: 6px;
  margin-bottom: 12px;
}
.height-child {
  height: 100%;
  background: #409eff;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-size: 13px;
}

/* 4. vertical-align */
.va-demo {
  background: #fdf6ec;
  padding: 8px;
  border-radius: 6px;
  font-size: 16px;
  line-height: 1;
}
.va-img {
  /* 试试改成 baseline / middle / top / bottom */
  vertical-align: middle;
}`
</script>
