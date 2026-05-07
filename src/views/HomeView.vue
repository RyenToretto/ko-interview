<template>
  <div class="home-view">
    <div class="home-view-hero">
      <div class="home-view-hero-glow" aria-hidden="true"></div>
      <h1 class="home-view-title">Interview</h1>
      <p class="home-view-subtitle">
        请从左侧菜单选择题目开始作答，候选人可直接在项目代码中编写实现
      </p>
      <div class="home-view-total">
        <el-tag size="large" type="primary" effect="dark" round>
          共 {{ totalCount }} 题
        </el-tag>
        <el-tag size="large" type="success" round>
          代码题 {{ codeCount }}
        </el-tag>
        <el-tag size="large" type="warning" round>
          问答题 {{ qaCount }}
        </el-tag>
        <el-tag size="large" type="info" round>
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

    <el-card class="home-view-resources">
      <template #header>
        <div class="home-view-resources-header">
          <span class="home-view-resources-title">优质学习资源合集</span>
          <span class="home-view-resources-subtitle">
            精选高质量中文前端学习资源，所有链接可点击新窗口打开
          </span>
        </div>
      </template>

      <el-collapse v-model="activeGroups">
        <el-collapse-item
          v-for="group in resourceGroups"
          :key="group.id"
          :name="group.id"
        >
          <template #title>
            <span class="home-view-resources-group-title">
              {{ group.title }}
              <el-tag size="small" type="info" effect="plain" round>
                {{ group.items.length }}
              </el-tag>
            </span>
          </template>
          <div class="home-view-resources-list">
            <div
              v-for="(item, idx) in group.items"
              :key="idx"
              class="home-view-resources-item"
            >
              <div class="home-view-resources-item-info">
                <a
                  :href="item.url"
                  target="_blank"
                  rel="noopener"
                  class="home-view-resources-item-name"
                >
                  {{ item.name }}
                </a>
                <span class="home-view-resources-item-desc">{{ item.desc }}</span>
              </div>
              <div class="home-view-resources-item-extra">
                <el-tag v-if="item.meta" size="small" type="info" effect="plain">
                  {{ item.meta }}
                </el-tag>
                <el-button
                  type="primary"
                  size="small"
                  round
                  tag="a"
                  :href="item.url"
                  target="_blank"
                  rel="noopener"
                >
                  打开
                </el-button>
              </div>
            </div>
          </div>
        </el-collapse-item>
      </el-collapse>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { categories } from '@/config/questions'
import { resourceGroups } from '@/config/resources'

const totalCount = computed(() =>
  categories.reduce((sum, cat) => sum + cat.questions.length, 0)
)
const codeCount = computed(() =>
  categories.reduce((sum, cat) => sum + cat.questions.filter(q => q.type === 'code').length, 0)
)
const qaCount = computed(() =>
  categories.reduce((sum, cat) => sum + cat.questions.filter(q => q.type === 'qa').length, 0)
)

const activeGroups = ref<string[]>(resourceGroups.map((g) => g.id))
</script>

<style scoped>
.home-view {
  max-width: 1080px;
  margin: 0 auto;
  padding: var(--spacing-md) 0;
}

.home-view-hero {
  position: relative;
  text-align: center;
  padding: var(--spacing-2xl) var(--spacing-md);
  margin-bottom: var(--spacing-lg);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.home-view-hero-glow {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 20% 20%, rgba(64, 158, 255, 0.18), transparent 55%),
    radial-gradient(circle at 80% 60%, rgba(103, 194, 58, 0.14), transparent 55%);
  pointer-events: none;
  z-index: 0;
}

.home-view-title,
.home-view-subtitle,
.home-view-total {
  position: relative;
  z-index: 1;
}

.home-view-title {
  font-size: var(--font-size-3xl);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
  letter-spacing: 1px;
  background: linear-gradient(135deg, var(--primary-color), #67c23a);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.home-view-subtitle {
  font-size: var(--font-size-lg);
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
}

.home-view-total {
  display: flex;
  justify-content: center;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
}

.home-view-stats {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
}

.home-view-stat-card {
  text-align: center;
  cursor: default;
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.home-view-stat-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.home-view-stat-number {
  font-size: var(--font-size-2xl);
  font-weight: 700;
  color: var(--primary-color);
  font-variant-numeric: tabular-nums;
  font-feature-settings: 'tnum';
  line-height: 1.2;
}

.home-view-stat-label {
  font-size: var(--font-size-base);
  color: var(--text-secondary);
  margin: var(--spacing-xs) 0 var(--spacing-sm);
}

.home-view-stat-tags {
  display: flex;
  justify-content: center;
  gap: var(--spacing-xs);
  flex-wrap: wrap;
}

.home-view-guide {
  margin-bottom: var(--spacing-lg);
}

.home-view-guide-title {
  font-size: var(--font-size-lg);
  font-weight: 600;
}

.home-view-resources {
  margin-bottom: var(--spacing-lg);
}

.home-view-resources-header {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.home-view-resources-title {
  font-size: var(--font-size-lg);
  font-weight: 600;
}

.home-view-resources-subtitle {
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
}

.home-view-resources-group-title {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-weight: 600;
}

.home-view-resources-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.home-view-resources-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-md);
  padding: var(--spacing-sm) var(--spacing-md);
  background: var(--card-bg-secondary);
  border-radius: var(--radius-md);
  transition: background var(--transition-fast), transform var(--transition-fast);
}

.home-view-resources-item:hover {
  background: var(--card-bg);
  transform: translateX(2px);
  box-shadow: var(--shadow-sm);
}

.home-view-resources-item-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  flex: 1;
}

.home-view-resources-item-name {
  font-size: var(--font-size-base);
  font-weight: 600;
  color: var(--text-primary);
  text-decoration: none;
  transition: color var(--transition-fast);
  word-break: break-word;
}

.home-view-resources-item-name:hover {
  color: var(--primary-color);
}

.home-view-resources-item-desc {
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
}

.home-view-resources-item-extra {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .home-view-hero {
    padding: var(--spacing-lg) var(--spacing-sm);
    margin-bottom: var(--spacing-md);
  }

  .home-view-title {
    font-size: var(--font-size-2xl);
  }

  .home-view-subtitle {
    font-size: var(--font-size-base);
  }

  .home-view-stats {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: var(--spacing-sm);
    margin-bottom: var(--spacing-md);
  }

  .home-view-stat-number {
    font-size: var(--font-size-xl);
  }

  .home-view-resources-item {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-sm);
  }

  .home-view-resources-item-extra {
    width: 100%;
    justify-content: space-between;
  }
}
</style>
