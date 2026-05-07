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
        <span class="qa-question-badge">{{ idx + 1 }}</span>
        <span class="qa-question-text" v-html="item.q" />
      </div>
      <el-collapse v-if="item.a && isInterviewer" class="qa-question-collapse">
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
import { useInterviewMode } from '@/composables/useInterviewMode'

const { isInterviewer } = useInterviewMode()

defineProps<{
  title: string
  questions: Array<{ q: string; a?: string }>
}>()
</script>

<style scoped>
.qa-question-item {
  margin-bottom: var(--spacing-xs);
  transition: transform var(--transition-fast), box-shadow var(--transition-normal);
}

.qa-question-item:hover {
  transform: translateY(-1px);
}

.qa-question-label {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-sm);
}

.qa-question-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-color), #67c23a);
  color: #fff;
  font-size: var(--font-size-xs);
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  box-shadow: var(--shadow-sm);
}

.qa-question-text {
  flex: 1;
  font-size: var(--font-size-lg);
  font-weight: 600;
  line-height: 1.6;
  color: var(--text-primary);
}

.qa-question-collapse {
  border: none;
}

.qa-question-collapse :deep(.el-collapse-item__header) {
  border-radius: var(--radius-sm);
  padding: 0 var(--spacing-sm);
  transition: background var(--transition-fast);
}

.qa-question-collapse :deep(.el-collapse-item__header:hover) {
  background: var(--card-bg-secondary);
}

.qa-question-answer {
  color: var(--text-secondary);
  line-height: 1.8;
  font-size: var(--font-size-base);
}

.qa-question-text :deep(pre),
.qa-question-answer :deep(pre) {
  background: var(--code-bg);
  color: var(--code-text);
  padding: 12px 16px;
  border-radius: var(--radius-md);
  font-family: 'Fira Code', 'Consolas', 'Monaco', monospace;
  font-size: var(--font-size-sm);
  line-height: 1.6;
  overflow-x: auto;
  white-space: pre;
  margin: var(--spacing-sm) 0;
  box-shadow: var(--shadow-sm);
}

.qa-question-text :deep(code),
.qa-question-answer :deep(code) {
  background: var(--card-bg-secondary);
  color: #c7254e;
  padding: 2px 6px;
  border-radius: var(--radius-sm);
  font-family: 'Fira Code', 'Consolas', monospace;
  font-size: var(--font-size-sm);
}

.qa-question-text :deep(pre code),
.qa-question-answer :deep(pre code) {
  background: transparent;
  color: inherit;
  padding: 0;
}

@media (max-width: 768px) {
  .qa-question-text {
    font-size: var(--font-size-base);
  }

  .qa-question-badge {
    width: 22px;
    height: 22px;
    font-size: 11px;
  }
}
</style>
