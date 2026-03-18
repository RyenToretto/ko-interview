<template>
  <QuestionCard title="Flex 弹性布局" type="code">
    <template #description>
      <p>请使用 Flexbox 实现以下经典布局：</p>
      <ol>
        <li><strong>三栏布局</strong>：左右固定宽度 200px，中间自适应</li>
        <li><strong>等分布局</strong>：将容器等分为 4 列，间距 16px</li>
        <li><strong>底部固定</strong>：内容区域自动撑满剩余空间，footer 固定在底部</li>
      </ol>
    </template>

    <h3>任务一：三栏布局</h3>
    <div class="flex-demo-three-col">
      <div class="flex-demo-three-col-left">左侧 200px</div>
      <div class="flex-demo-three-col-center">中间自适应</div>
      <div class="flex-demo-three-col-right">右侧 200px</div>
    </div>

    <h3>任务二：等分四列</h3>
    <div class="flex-demo-equal">
      <div class="flex-demo-equal-item" v-for="i in 4" :key="i">
        列 {{ i }}
      </div>
    </div>

    <h3>任务三：Sticky Footer</h3>
    <div class="flex-demo-sticky">
      <div class="flex-demo-sticky-header">Header</div>
      <div class="flex-demo-sticky-content">Content（内容较少时 footer 也在底部）</div>
      <div class="flex-demo-sticky-footer">Footer</div>
    </div>
    <el-divider>在线练习区</el-divider>
    <CssRunner
      title="Flex 三栏布局在线练习"
      :html="previewHtml"
      :initial-css="initialCss"
    />
  </QuestionCard>
</template>

<script setup lang="ts">
import QuestionCard from '@/components/QuestionCard.vue'
import CssRunner from '@/components/CssRunner.vue'

const previewHtml = `<div class="layout">
  <div class="left">左侧 200px</div>
  <div class="center">中间自适应</div>
  <div class="right">右侧 200px</div>
</div>`

const initialCss = `.layout {
  /* TODO: 使用 flex 实现三栏布局 */
  display: flex;
  height: 200px;
  border: 2px dashed #67c23a;
  border-radius: 8px;
  overflow: hidden;
}

.left {
  /* TODO: 固定 200px */
  width: 200px;
  background: #67c23a;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.center {
  /* TODO: 自适应 */
  flex: 1;
  background: #e1f3d8;
  display: flex;
  align-items: center;
  justify-content: center;
}

.right {
  /* TODO: 固定 200px */
  width: 200px;
  background: #67c23a;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}`
</script>

<style scoped>
/* ========== 任务一：三栏布局 ========== */
/* TODO: 请实现三栏布局 */
.flex-demo-three-col {
  /* 提示：使用 display: flex */
  height: 150px;
  border: 2px dashed #67c23a;
  border-radius: 8px;
  overflow: hidden;
}

.flex-demo-three-col-left {
  /* 提示：固定宽度 200px */
  background: #67c23a;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex-demo-three-col-center {
  /* 提示：自适应宽度 */
  background: #e1f3d8;
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex-demo-three-col-right {
  /* 提示：固定宽度 200px */
  background: #67c23a;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ========== 任务二：等分四列 ========== */
/* TODO: 请实现等分四列布局 */
.flex-demo-equal {
  /* 提示：使用 flex + gap */
  border: 2px dashed #e6a23c;
  border-radius: 8px;
  padding: 16px;
}

.flex-demo-equal-item {
  height: 100px;
  background: #e6a23c;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  font-weight: 600;
}

/* ========== 任务三：Sticky Footer ========== */
/* TODO: 请实现 sticky footer 布局 */
.flex-demo-sticky {
  /* 提示：使用 flex-direction: column */
  height: 300px;
  border: 2px dashed #909399;
  border-radius: 8px;
  overflow: hidden;
}

.flex-demo-sticky-header {
  height: 50px;
  background: #909399;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex-demo-sticky-content {
  /* 提示：让内容区撑满 */
  background: #f4f4f5;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #909399;
}

.flex-demo-sticky-footer {
  height: 50px;
  background: #909399;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
