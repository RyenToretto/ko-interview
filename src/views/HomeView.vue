<template>
  <div class="home-view">
    <div class="home-view-hero">
      <h1 class="home-view-title">Interview</h1>
      <p class="home-view-subtitle">
        请从左侧菜单选择题目开始作答，候选人可直接在项目代码中编写实现
      </p>
      <div class="home-view-total">
        <el-tag size="large" type="primary" effect="dark">
          共 {{ totalCount }} 题
        </el-tag>
        <el-tag size="large" type="success">
          代码题 {{ codeCount }}
        </el-tag>
        <el-tag size="large" type="warning">
          问答题 {{ qaCount }}
        </el-tag>
        <el-tag size="large" type="info">
          {{ categories.length }} 个分类
        </el-tag>
      </div>
    </div>

    <div class="home-view-stats">
      <el-card
        v-for="cat in categories"
        :key="cat.id"
        shadow="hover"
        class="home-view-stat-card"
      >
        <div class="home-view-stat-number">{{ cat.questions.length }}</div>
        <div class="home-view-stat-label">{{ cat.label }}</div>
        <div class="home-view-stat-tags">
          <el-tag size="small" type="success" v-if="cat.questions.filter(q => q.type === 'code').length">
            代码 {{ cat.questions.filter(q => q.type === 'code').length }}
          </el-tag>
          <el-tag size="small" type="warning" v-if="cat.questions.filter(q => q.type === 'qa').length">
            问答 {{ cat.questions.filter(q => q.type === 'qa').length }}
          </el-tag>
        </div>
      </el-card>
    </div>

    <el-card class="home-view-guide">
      <template #header>
        <span class="home-view-guide-title">使用说明</span>
      </template>
      <el-timeline>
        <el-timeline-item type="primary" timestamp="第一步">
          从左侧菜单选择一道题目
        </el-timeline-item>
        <el-timeline-item type="success" timestamp="第二步">
          阅读题目描述和要求
        </el-timeline-item>
        <el-timeline-item type="warning" timestamp="第三步">
          <strong>代码题：</strong>在对应的 .vue 文件中找到 TODO 标记，直接编写代码实现；部分题目支持在线编辑运行<br/>
          <strong>问答题：</strong>口头回答面试官的提问
        </el-timeline-item>
        <el-timeline-item type="danger" timestamp="第四步">
          保存文件后页面会自动热更新，实时查看效果
        </el-timeline-item>
      </el-timeline>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { categories } from '@/config/questions'

const totalCount = computed(() =>
  categories.reduce((sum, cat) => sum + cat.questions.length, 0)
)
const codeCount = computed(() =>
  categories.reduce((sum, cat) => sum + cat.questions.filter(q => q.type === 'code').length, 0)
)
const qaCount = computed(() =>
  categories.reduce((sum, cat) => sum + cat.questions.filter(q => q.type === 'qa').length, 0)
)
</script>

<style scoped>
.home-view {
  max-width: 1080px;
  margin: 0 auto;
}

.home-view-hero {
  text-align: center;
  padding: 40px 0 28px;
}

.home-view-title {
  font-size: 32px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.home-view-subtitle {
  font-size: 16px;
  color: var(--text-secondary);
  margin-bottom: 16px;
}

.home-view-total {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.home-view-stats {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 12px;
  margin-bottom: 24px;
}

.home-view-stat-card {
  text-align: center;
  cursor: default;
}

.home-view-stat-number {
  font-size: 32px;
  font-weight: 700;
  color: var(--primary-color);
}

.home-view-stat-label {
  font-size: 14px;
  color: var(--text-secondary);
  margin: 2px 0 8px;
}

.home-view-stat-tags {
  display: flex;
  justify-content: center;
  gap: 6px;
}

.home-view-guide {
  margin-top: 8px;
}

.home-view-guide-title {
  font-size: 16px;
  font-weight: 600;
}
</style>
