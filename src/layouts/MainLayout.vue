<template>
  <el-container class="main-layout">
    <el-aside class="main-layout-sidebar" width="260px">
      <div class="main-layout-logo">
        <h1>Interview</h1>
      </div>
      <div class="main-layout-search">
        <el-input
          v-model="searchKeyword"
          placeholder="搜索题目..."
          clearable
          size="small"
          :prefix-icon="Search"
        />
        <el-select
          v-model="filterDifficulty"
          placeholder="难度"
          clearable
          size="small"
          class="main-layout-filter-select"
        >
          <el-option label="简单" value="easy" />
          <el-option label="中等" value="medium" />
          <el-option label="困难" value="hard" />
        </el-select>
      </div>
      <el-scrollbar class="main-layout-menu-scroll">
        <el-menu
          :default-openeds="filteredOpenedMenus"
          :default-active="currentRoute"
          router
        >
          <el-menu-item index="/">
            <el-icon><HomeFilled /></el-icon>
            <span>首页</span>
          </el-menu-item>
          <template v-for="category in filteredCategories" :key="category.id">
            <el-sub-menu
              v-if="category.questions.length"
              :index="category.id"
            >
              <template #title>
                <el-icon><component :is="category.icon" /></el-icon>
                <span>{{ category.label }}</span>
                <el-badge
                  :value="category.questions.length"
                  type="info"
                  class="main-layout-badge"
                />
              </template>
              <el-menu-item
                v-for="q in category.questions"
                :key="q.id"
                :index="q.path"
              >
                <span class="main-layout-question-title">{{ q.title }}</span>
                <el-tag
                  :type="difficultyTagType(q.difficulty)"
                  size="small"
                  class="main-layout-question-tag"
                  effect="plain"
                >
                  {{ difficultyLabel(q.difficulty) }}
                </el-tag>
              </el-menu-item>
            </el-sub-menu>
          </template>
        </el-menu>
      </el-scrollbar>
    </el-aside>
    <el-container direction="vertical" class="main-layout-right">
      <div class="main-layout-toolbar">
        <el-button
          :icon="theme === 'dark' ? Sunny : Moon"
          circle
          size="small"
          @click="toggleTheme"
        />
        <el-switch
          v-model="isInterviewerMode"
          active-text="面试官"
          inactive-text="候选人"
          inline-prompt
          style="--el-switch-on-color: #409eff; --el-switch-off-color: #67c23a"
        />
      </div>
      <el-main class="main-layout-content">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { HomeFilled, Search, Sunny, Moon, Tickets, Brush, Coffee, Connection, Document, SetUp, ChromeFilled, Platform, Setting, Timer, Monitor, Link, DataAnalysis } from '@element-plus/icons-vue'
import { categories } from '@/config/questions'
import type { Difficulty } from '@/config/questions'
import { useInterviewMode } from '@/composables/useInterviewMode'
import { useTheme } from '@/composables/useTheme'

const route = useRoute()
const currentRoute = computed(() => route.path)

const searchKeyword = ref('')
const filterDifficulty = ref<Difficulty | ''>('')

const filteredCategories = computed(() => {
  const keyword = searchKeyword.value.trim().toLowerCase()
  const diff = filterDifficulty.value
  return categories.map((cat) => ({
    ...cat,
    questions: cat.questions.filter((q) => {
      const matchKeyword = !keyword || q.title.toLowerCase().includes(keyword)
      const matchDiff = !diff || q.difficulty === diff
      return matchKeyword && matchDiff
    }),
  }))
})

const filteredOpenedMenus = computed(() =>
  filteredCategories.value.filter((c) => c.questions.length).map((c) => c.id)
)

const { mode, setMode } = useInterviewMode()
const { theme, toggleTheme } = useTheme()

function difficultyTagType(d: Difficulty) {
  return d === 'easy' ? 'success' : d === 'medium' ? 'warning' : 'danger'
}

function difficultyLabel(d: Difficulty) {
  return d === 'easy' ? '简单' : d === 'medium' ? '中等' : '困难'
}
const isInterviewerMode = computed({
  get: () => mode.value === 'interviewer',
  set: (val: boolean) => setMode(val ? 'interviewer' : 'candidate'),
})
</script>

<style scoped>
.main-layout {
  height: 100vh;
}

.main-layout-sidebar {
  background: var(--sidebar-bg);
  border-right: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.main-layout-logo {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--border-color);
  flex-shrink: 0;
}

.main-layout-logo h1 {
  font-size: 18px;
  font-weight: 600;
  color: var(--primary-color);
  letter-spacing: 2px;
}

.main-layout-search {
  padding: 10px 12px 6px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex-shrink: 0;
}

.main-layout-filter-select {
  width: 100%;
}

.main-layout-menu-scroll {
  flex: 1;
  overflow: hidden;
}

.main-layout-badge {
  margin-left: 8px;
}

.main-layout-question-title {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.main-layout-question-tag {
  margin-left: 8px;
  flex-shrink: 0;
}

.main-layout-right {
  flex: 1;
  overflow: hidden;
}

.main-layout-toolbar {
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  padding: 0 24px;
  background: var(--toolbar-bg);
  border-bottom: 1px solid var(--border-color);
  flex-shrink: 0;
}

.main-layout-content {
  background: var(--bg-color);
  padding: 24px;
  overflow-y: auto;
}
</style>
