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
      <el-tag
        v-if="currentDifficulty"
        :type="difficultyType"
        size="large"
        effect="plain"
      >
        {{ difficultyLabel }}
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
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { categories } from '@/config/questions'
import type { Difficulty } from '@/config/questions'

defineProps<{
  title: string
  type: 'code' | 'qa'
}>()

const route = useRoute()

const currentDifficulty = computed<Difficulty | null>(() => {
  for (const cat of categories) {
    const q = cat.questions.find((q) => q.path === route.path)
    if (q) return q.difficulty
  }
  return null
})

const difficultyType = computed(() => {
  const d = currentDifficulty.value
  return d === 'easy' ? 'success' : d === 'medium' ? 'warning' : 'danger'
})

const difficultyLabel = computed(() => {
  const d = currentDifficulty.value
  return d === 'easy' ? '简单' : d === 'medium' ? '中等' : '困难'
})
</script>

<style scoped>
.question-card {
  max-width: 960px;
  margin: 0 auto;
}

.question-card-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
  padding-bottom: var(--spacing-sm);
  border-bottom: 1px solid var(--border-color);
  flex-wrap: wrap;
}

.question-card-title {
  font-size: var(--font-size-2xl);
  font-weight: 700;
  margin-right: auto;
  color: var(--text-primary);
  letter-spacing: 0.5px;
}

.question-card-desc {
  margin-bottom: var(--spacing-lg);
  background: var(--card-bg-secondary);
  border-left: 4px solid var(--primary-color);
  border-radius: var(--radius-md);
}

.question-card-desc-title {
  font-weight: 600;
  font-size: var(--font-size-lg);
  color: var(--text-primary);
}

.question-card-body {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

@media (max-width: 768px) {
  .question-card {
    max-width: 100%;
  }

  .question-card-header {
    gap: var(--spacing-xs);
    margin-bottom: var(--spacing-sm);
  }

  .question-card-title {
    font-size: var(--font-size-xl);
    margin-right: 0;
    width: 100%;
  }
}
</style>
