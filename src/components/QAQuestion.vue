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
        <span class="qa-question-text" v-html="item.q" />
      </div>
      <el-collapse v-if="item.a">
        <el-collapse-item title="查看参考答案">
          <div class="qa-question-answer" v-html="item.a" />
        </el-collapse-item>
      </el-collapse>
    </el-card>

    <slot name="extra" />
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

.qa-question-text :deep(pre),
.qa-question-answer :deep(pre) {
  background: #1e1e2e;
  color: #cdd6f4;
  padding: 12px 16px;
  border-radius: 6px;
  font-family: 'Fira Code', 'Consolas', 'Monaco', monospace;
  font-size: 13px;
  line-height: 1.6;
  overflow-x: auto;
  white-space: pre;
  margin: 8px 0;
}

.qa-question-text :deep(code),
.qa-question-answer :deep(code) {
  background: #f0f0f0;
  color: #c7254e;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: 'Fira Code', 'Consolas', monospace;
  font-size: 13px;
}

.qa-question-text :deep(pre code),
.qa-question-answer :deep(pre code) {
  background: transparent;
  color: inherit;
  padding: 0;
}
</style>
