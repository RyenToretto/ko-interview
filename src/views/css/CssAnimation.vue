<template>
  <QuestionCard title="CSS 过渡与动画" type="code">
    <template #description>
      <p>请实现以下 CSS 动画效果：</p>
      <ol>
        <li><strong>过渡效果</strong>：鼠标悬浮时按钮平滑变色并放大</li>
        <li><strong>关键帧动画</strong>：实现一个无限循环的加载旋转动画</li>
        <li><strong>自定义动画</strong>：实现一个弹跳效果</li>
      </ol>
    </template>

    <h3>任务一：Hover 过渡效果</h3>
    <div class="animation-demo-area">
      <button class="animation-demo-btn">Hover Me</button>
    </div>

    <h3>任务二：旋转加载动画</h3>
    <div class="animation-demo-area">
      <div class="animation-demo-spinner"></div>
    </div>

    <h3>任务三：弹跳动画</h3>
    <div class="animation-demo-area animation-demo-bounce-area">
      <div class="animation-demo-ball"></div>
    </div>

    <el-divider>在线练习区</el-divider>
    <CssRunner
      title="CSS 动画在线练习"
      :html="previewHtml"
      :initial-css="initialCss"
    />
  </QuestionCard>
</template>

<script setup lang="ts">
import QuestionCard from '@/components/QuestionCard.vue'
import CssRunner from '@/components/CssRunner.vue'

const previewHtml = `<div style="display:flex;gap:40px;align-items:center;justify-content:center;min-height:220px">
  <button class="btn">Hover Me</button>
  <div class="spinner"></div>
  <div class="ball"></div>
</div>`

const initialCss = `/* 按钮 hover 过渡 */
.btn {
  padding: 12px 32px;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  background: #409eff;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
}
.btn:hover {
  background: #67c23a;
  transform: scale(1.1);
}

/* 旋转加载 */
.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #e4e7ed;
  border-top-color: #409eff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}

/* 弹跳球 */
.ball {
  width: 36px;
  height: 36px;
  background: #f56c6c;
  border-radius: 50%;
  animation: bounce 0.6s ease-in-out infinite alternate;
}
@keyframes bounce {
  from { transform: translateY(0); }
  to { transform: translateY(-60px); }
}`
</script>

<style scoped>
.animation-demo-area {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  border: 2px dashed #e6a23c;
  border-radius: 8px;
  background: #fdf6ec;
}

/* ========== 任务一：Hover 过渡效果 ========== */
.animation-demo-btn {
  padding: 12px 32px;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  background: #409eff;
  color: #fff;
  cursor: pointer;
  /* TODO: 添加 transition 属性实现平滑过渡 */
}

/* TODO: 添加 hover 状态（变色 + 放大） */

/* ========== 任务二：旋转加载动画 ========== */
.animation-demo-spinner {
  width: 48px;
  height: 48px;
  border: 4px solid #e4e7ed;
  border-radius: 50%;
  /* TODO: 设置 border-top 颜色并添加旋转动画 */
}

/* TODO: 定义旋转的 @keyframes */

/* ========== 任务三：弹跳动画 ========== */
.animation-demo-bounce-area {
  align-items: flex-end;
  padding-bottom: 20px;
}

.animation-demo-ball {
  width: 40px;
  height: 40px;
  background: #f56c6c;
  border-radius: 50%;
  /* TODO: 添加弹跳动画 */
}

/* TODO: 定义弹跳的 @keyframes */
</style>
