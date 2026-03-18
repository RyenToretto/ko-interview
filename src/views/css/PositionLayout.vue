<template>
  <QuestionCard title="position 定位" type="code">
    <template #description>
      <p>请使用不同的 <code>position</code> 值完成以下定位任务：</p>
      <ol>
        <li><strong>relative + absolute</strong>：在父容器右上角放置一个角标</li>
        <li><strong>fixed</strong>：实现一个固定在页面右下角的"回到顶部"按钮</li>
        <li><strong>sticky</strong>：实现一个滚动时吸顶的标题栏</li>
      </ol>
    </template>

    <h3>任务一：relative + absolute 角标定位</h3>
    <div class="position-demo-card">
      <div class="position-demo-badge">
        <!-- TODO: 使用 absolute 定位到右上角 -->
        NEW
      </div>
      <p>产品卡片内容</p>
    </div>

    <h3>任务二：sticky 吸顶标题</h3>
    <div class="position-demo-scroll-area">
      <div class="position-demo-sticky-header">
        <!-- TODO: 使用 sticky 实现吸顶效果 -->
        我应该在滚动时吸顶
      </div>
      <div class="position-demo-scroll-content">
        <p v-for="i in 20" :key="i">滚动内容行 {{ i }}</p>
      </div>
    </div>

    <h3>任务三：请说明各 position 值的区别</h3>
    <el-card shadow="never">
      <el-descriptions :column="1" border>
        <el-descriptions-item label="static">{{ answers.static }}</el-descriptions-item>
        <el-descriptions-item label="relative">{{ answers.relative }}</el-descriptions-item>
        <el-descriptions-item label="absolute">{{ answers.absolute }}</el-descriptions-item>
        <el-descriptions-item label="fixed">{{ answers.fixed }}</el-descriptions-item>
        <el-descriptions-item label="sticky">{{ answers.sticky }}</el-descriptions-item>
      </el-descriptions>
    </el-card>
  </QuestionCard>
</template>

<script setup lang="ts">
import QuestionCard from '@/components/QuestionCard.vue'

// TODO: 请填写各 position 值的区别说明
const answers = {
  static: '请填写...',
  relative: '请填写...',
  absolute: '请填写...',
  fixed: '请填写...',
  sticky: '请填写...',
}
</script>

<style scoped>
/* ========== 任务一：角标定位 ========== */
.position-demo-card {
  width: 240px;
  height: 160px;
  border: 2px solid #409eff;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* TODO: 设置为相对定位，作为角标的定位参考 */
}

.position-demo-badge {
  /* TODO: 使用 absolute 定位到父容器的右上角 */
  background: #f56c6c;
  color: #fff;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
}

/* ========== 任务二：sticky 吸顶 ========== */
.position-demo-scroll-area {
  height: 250px;
  overflow-y: auto;
  border: 2px dashed #67c23a;
  border-radius: 8px;
}

.position-demo-sticky-header {
  /* TODO: 使用 sticky 实现吸顶 */
  background: #67c23a;
  color: #fff;
  padding: 12px 16px;
  font-weight: 600;
}

.position-demo-scroll-content {
  padding: 12px 16px;
}
</style>
