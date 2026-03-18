<template>
  <el-container class="main-layout">
    <el-aside class="main-layout-sidebar" width="260px">
      <div class="main-layout-logo">
        <h1>Interview</h1>
      </div>
      <el-scrollbar class="main-layout-menu-scroll">
        <el-menu
          :default-openeds="openedMenus"
          :default-active="currentRoute"
          router
        >
          <el-menu-item index="/">
            <el-icon><HomeFilled /></el-icon>
            <span>首页</span>
          </el-menu-item>
          <el-sub-menu
            v-for="category in categories"
            :key="category.id"
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
                :type="q.type === 'code' ? 'success' : 'warning'"
                size="small"
                class="main-layout-question-tag"
              >
                {{ q.type === 'code' ? '代码' : '问答' }}
              </el-tag>
            </el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>
    <el-main class="main-layout-content">
      <router-view />
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { HomeFilled, Tickets, Brush, Coffee, Connection, Document, SetUp, ChromeFilled, Platform, Setting, Timer, Monitor, Link, DataAnalysis } from '@element-plus/icons-vue'
import { categories } from '@/config/questions'

const route = useRoute()
const currentRoute = computed(() => route.path)
const openedMenus = categories.map((c) => c.id)
</script>

<style scoped>
.main-layout {
  height: 100vh;
}

.main-layout-sidebar {
  background: #fff;
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

.main-layout-content {
  background: var(--bg-color);
  padding: 24px;
  overflow-y: auto;
}
</style>
