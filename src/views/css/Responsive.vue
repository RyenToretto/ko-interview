<template>
  <QuestionCard title="响应式布局" type="code">
    <template #description>
      <p>请使用 <strong>媒体查询</strong> 实现响应式布局：</p>
      <ul>
        <li>大屏（&gt;1024px）：三列等分</li>
        <li>中屏（768px~1024px）：两列等分</li>
        <li>小屏（&lt;768px）：单列堆叠</li>
      </ul>
    </template>

    <div class="responsive-demo-container">
      <div class="responsive-demo-item" v-for="i in 6" :key="i">
        卡片 {{ i }}
      </div>
    </div>

    <el-divider>在线练习区</el-divider>
    <CssRunner
      title="响应式布局在线练习"
      :html="previewHtml"
      :initial-css="initialCss"
    />
  </QuestionCard>
</template>

<script setup lang="ts">
import QuestionCard from '@/components/QuestionCard.vue'
import CssRunner from '@/components/CssRunner.vue'

const previewHtml = `<div class="grid">
  <div class="card">卡片 1</div>
  <div class="card">卡片 2</div>
  <div class="card">卡片 3</div>
  <div class="card">卡片 4</div>
  <div class="card">卡片 5</div>
  <div class="card">卡片 6</div>
</div>`

const initialCss = `.grid {
  display: grid;
  gap: 12px;
  padding: 12px;
  /* TODO: 默认三列 */
  grid-template-columns: repeat(3, 1fr);
}

.card {
  background: #409eff;
  color: #fff;
  padding: 24px;
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
}

/* TODO: 中屏 768px~1024px 两列 */
@media (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* TODO: 小屏 <768px 单列 */
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}`
</script>

<style scoped>
/* TODO: 请实现响应式布局 */
.responsive-demo-container {
  display: grid;
  gap: 12px;
  /* TODO: 使用媒体查询或 auto-fit 实现响应式 */
  grid-template-columns: repeat(3, 1fr);
}

.responsive-demo-item {
  background: #409eff;
  color: #fff;
  padding: 24px;
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
}
</style>
