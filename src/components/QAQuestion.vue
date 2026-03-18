<template>
  <QuestionCard :title="title" type="qa">
    <template #description>
      <slot name="description" />
    </template>

    <el-card
      v-for="(item, idx) in questions"
      :key="idx"
      shadow="hover"
      class="qa-question-item"
    >
      <div class="qa-question-label">
        <el-tag type="primary" size="small">问题 {{ idx + 1 }}</el-tag>
        <span class="qa-question-text">{{ item.q }}</span>
      </div>
      <el-collapse v-if="item.a">
        <el-collapse-item title="查看参考答案">
          <div class="qa-question-answer" v-html="item.a" />
        </el-collapse-item>
      </el-collapse>
    </el-card>
  </QuestionCard>
</template>

<script setup lang="ts">
import QuestionCard from './QuestionCard.vue'

defineProps<{
  title: string
  questions: Array<{ q: string; a?: string }>
}>()
</script>

<style scoped>
.qa-question-item {
  margin-bottom: 4px;
}

.qa-question-label {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 8px;
}

.qa-question-text {
  font-size: 15px;
  font-weight: 500;
  line-height: 1.6;
}

.qa-question-answer {
  color: var(--text-secondary);
  line-height: 1.8;
  font-size: 14px;
}
</style>
