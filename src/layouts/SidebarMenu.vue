<template>
  <div class="sidebar-menu">
    <div class="sidebar-menu-logo">
      <h1>Interview</h1>
    </div>
    <div class="sidebar-menu-search">
      <el-input
        v-model="searchKeywordModel"
        placeholder="搜索题目..."
        clearable
        size="small"
        :prefix-icon="Search"
      />
      <el-select
        v-model="filterDifficultyModel"
        placeholder="难度"
        clearable
        size="small"
        class="sidebar-menu-filter-select"
      >
        <el-option label="简单" value="easy" />
        <el-option label="中等" value="medium" />
        <el-option label="困难" value="hard" />
      </el-select>
    </div>
    <el-scrollbar class="sidebar-menu-scroll">
      <el-menu
        ref="menuRef"
        :default-openeds="filteredOpenedMenus"
        :default-active="currentRoute"
        :unique-opened="false"
        router
        @select="handleSelect"
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
                class="sidebar-menu-badge"
              />
            </template>
            <el-menu-item
              v-for="q in category.questions"
              :key="q.id"
              :index="q.path"
            >
              <span class="sidebar-menu-question-title">{{ q.title }}</span>
              <el-tag
                :type="difficultyTagType(q.difficulty)"
                size="small"
                class="sidebar-menu-question-tag"
                effect="plain"
              >
                {{ difficultyLabel(q.difficulty) }}
              </el-tag>
            </el-menu-item>
          </el-sub-menu>
        </template>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { HomeFilled, Search } from '@element-plus/icons-vue'
import { categories } from '@/config/questions'
import type { Difficulty } from '@/config/questions'

interface MenuInstance {
  open: (index: string) => void
  close: (index: string) => void
}

const props = defineProps<{
  searchKeyword: string
  filterDifficulty: Difficulty | ''
}>()

const emit = defineEmits<{
  'update:searchKeyword': [value: string]
  'update:filterDifficulty': [value: Difficulty | '']
  select: [path: string]
}>()

const route = useRoute()
const currentRoute = computed(() => route.path)

const searchKeywordModel = computed({
  get: () => props.searchKeyword,
  set: (v: string) => emit('update:searchKeyword', v),
})

const filterDifficultyModel = computed({
  get: () => props.filterDifficulty,
  set: (v: Difficulty | '') => emit('update:filterDifficulty', v),
})

const filteredCategories = computed(() => {
  const keyword = props.searchKeyword.trim().toLowerCase()
  const diff = props.filterDifficulty
  return categories.map((cat) => ({
    ...cat,
    questions: cat.questions.filter((q) => {
      const matchKeyword = !keyword || q.title.toLowerCase().includes(keyword)
      const matchDiff = !diff || q.difficulty === diff
      return matchKeyword && matchDiff
    }),
  }))
})

const filteredOpenedMenus = computed(() => {
  const isSearching = !!props.searchKeyword.trim() || !!props.filterDifficulty
  if (!isSearching) return []
  return filteredCategories.value.filter((c) => c.questions.length).map((c) => c.id)
})

const menuRef = ref<MenuInstance | null>(null)
const previouslyOpened = ref<Set<string>>(new Set())

watch(
  filteredOpenedMenus,
  async (next) => {
    await nextTick()
    if (!menuRef.value) return
    const nextSet = new Set(next)
    for (const id of next) {
      if (!previouslyOpened.value.has(id)) menuRef.value.open(id)
    }
    for (const id of previouslyOpened.value) {
      if (!nextSet.has(id)) menuRef.value.close(id)
    }
    previouslyOpened.value = nextSet
  }
)

function difficultyTagType(d: Difficulty) {
  return d === 'easy' ? 'success' : d === 'medium' ? 'warning' : 'danger'
}

function difficultyLabel(d: Difficulty) {
  return d === 'easy' ? '简单' : d === 'medium' ? '中等' : '困难'
}

function handleSelect(path: string) {
  emit('select', path)
}
</script>

<style scoped>
.sidebar-menu {
  background: var(--sidebar-bg);
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
}

.sidebar-menu-logo {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--border-color);
  flex-shrink: 0;
}

.sidebar-menu-logo h1 {
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--primary-color);
  letter-spacing: 2px;
}

.sidebar-menu-search {
  padding: var(--spacing-sm) var(--spacing-sm) var(--spacing-xs);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  flex-shrink: 0;
}

.sidebar-menu-filter-select {
  width: 100%;
}

.sidebar-menu-scroll {
  flex: 1;
  overflow: hidden;
}

.sidebar-menu-badge {
  margin-left: var(--spacing-sm);
}

.sidebar-menu-question-title {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.sidebar-menu-question-tag {
  margin-left: var(--spacing-sm);
  flex-shrink: 0;
}
</style>
