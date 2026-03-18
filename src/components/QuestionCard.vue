<template>
  <div class="question-card">
    <div class="question-card-header">
      <h2 class="question-card-title">{{ title }}</h2>
      <el-tag
        :type="type === 'code' ? 'success' : 'warning'"
        size="large"
      >
        {{ type === 'code' ? '代码题' : '问答题' }}
      </el-tag>
    </div>
    <el-card class="question-card-desc" shadow="never">
      <template #header>
        <span class="question-card-desc-title">题目描述</span>
      </template>
      <slot name="description" />
    </el-card>
    <div class="question-card-body">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  type: 'code' | 'qa'
}>()
</script>

<style scoped>
.question-card {
  max-width: 960px;
  margin: 0 auto;
}

.question-card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}

.question-card-title {
  font-size: 24px;
  font-weight: 700;
}

.question-card-desc {
  margin-bottom: 24px;
  background: #f8f9fa;
}

.question-card-desc-title {
  font-weight: 600;
  font-size: 15px;
}

.question-card-body {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
