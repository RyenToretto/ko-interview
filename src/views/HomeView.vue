<template>
  <div class="home-view">
    <div class="home-view-hero">
      <h1 class="home-view-title">前端面试考察系统</h1>
      <p class="home-view-subtitle">
        请从左侧菜单选择题目开始作答，候选人可直接在项目代码中编写实现
      </p>
    </div>

    <div class="home-view-stats">
      <el-row :gutter="20">
        <el-col :span="6" v-for="cat in categories" :key="cat.id">
          <el-card shadow="hover" class="home-view-stat-card">
            <div class="home-view-stat-number">{{ cat.questions.length }}</div>
            <div class="home-view-stat-label">{{ cat.label }}</div>
            <div class="home-view-stat-tags">
              <el-tag
                size="small"
                type="success"
                class="home-view-stat-tag"
              >
                代码 {{ cat.questions.filter(q => q.type === 'code').length }}
              </el-tag>
              <el-tag
                size="small"
                type="warning"
                class="home-view-stat-tag"
              >
                问答 {{ cat.questions.filter(q => q.type === 'qa').length }}
              </el-tag>
            </div>
          </el-card>
        </el-col>
      </el-row>
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
          <strong>代码题：</strong>在对应的 .vue 文件中找到 TODO 标记，直接编写代码实现；
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
import { categories } from '@/config/questions'
</script>

<style scoped>
.home-view {
  max-width: 960px;
  margin: 0 auto;
}

.home-view-hero {
  text-align: center;
  padding: 48px 0 36px;
}

.home-view-title {
  font-size: 32px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.home-view-subtitle {
  font-size: 16px;
  color: var(--text-secondary);
}

.home-view-stats {
  margin-bottom: 24px;
}

.home-view-stat-card {
  text-align: center;
  cursor: default;
}

.home-view-stat-number {
  font-size: 36px;
  font-weight: 700;
  color: var(--primary-color);
}

.home-view-stat-label {
  font-size: 16px;
  color: var(--text-secondary);
  margin: 4px 0 12px;
}

.home-view-stat-tags {
  display: flex;
  justify-content: center;
  gap: 8px;
}

.home-view-stat-tag {
  cursor: default;
}

.home-view-guide {
  margin-top: 8px;
}

.home-view-guide-title {
  font-size: 16px;
  font-weight: 600;
}
</style>
