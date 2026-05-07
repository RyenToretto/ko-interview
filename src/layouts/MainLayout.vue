<template>
  <el-container class="main-layout">
    <el-aside v-if="!isMobile" class="main-layout-sidebar" width="260px">
      <SidebarMenu
        v-model:search-keyword="searchKeyword"
        v-model:filter-difficulty="filterDifficulty"
      />
    </el-aside>

    <el-drawer
      v-else
      v-model="drawerVisible"
      direction="ltr"
      :with-header="false"
      size="80%"
      class="main-layout-drawer"
    >
      <SidebarMenu
        v-model:search-keyword="searchKeyword"
        v-model:filter-difficulty="filterDifficulty"
        @select="handleMobileSelect"
      />
    </el-drawer>

    <el-container direction="vertical" class="main-layout-right">
      <div class="main-layout-toolbar">
        <el-button
          v-if="isMobile"
          :icon="Menu"
          circle
          size="small"
          aria-label="打开菜单"
          @click="drawerVisible = true"
          class="main-layout-hamburger"
        />
        <span class="main-layout-toolbar-spacer"></span>

        <template v-if="!isMobile">
          <el-dropdown @command="setSkin" trigger="click">
            <el-button size="small">
              {{ skinLabel }}
            </el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="default">Default</el-dropdown-item>
                <el-dropdown-item command="apple">Apple</el-dropdown-item>
                <el-dropdown-item command="hero">Hero</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <el-button
            :icon="theme === 'dark' ? Sunny : Moon"
            circle
            size="small"
            :aria-label="theme === 'dark' ? '切换亮色模式' : '切换暗色模式'"
            @click="toggleTheme"
          />
          <el-switch
            v-model="isInterviewerMode"
            active-text="面试官"
            inactive-text="候选人"
            inline-prompt
            style="--el-switch-on-color: #409eff; --el-switch-off-color: #67c23a"
          />
        </template>

        <template v-else>
          <el-button
            :icon="isInterviewerMode ? User : UserFilled"
            circle
            size="small"
            :type="isInterviewerMode ? 'primary' : 'success'"
            :aria-label="isInterviewerMode ? '切换到候选人' : '切换到面试官'"
            @click="isInterviewerMode = !isInterviewerMode"
          />
          <el-button
            :icon="theme === 'dark' ? Sunny : Moon"
            circle
            size="small"
            :aria-label="theme === 'dark' ? '切换亮色模式' : '切换暗色模式'"
            @click="toggleTheme"
          />
          <el-dropdown @command="setSkin" trigger="click">
            <el-button :icon="Brush" circle size="small" aria-label="切换皮肤" />
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="default">Default</el-dropdown-item>
                <el-dropdown-item command="apple">Apple</el-dropdown-item>
                <el-dropdown-item command="hero">Hero</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </template>
      </div>
      <el-main class="main-layout-content">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Sunny, Moon, Menu, Brush, User, UserFilled } from '@element-plus/icons-vue'
import type { Difficulty } from '@/config/questions'
import { useInterviewMode } from '@/composables/useInterviewMode'
import { useTheme } from '@/composables/useTheme'
import { useIsMobile } from '@/composables/useMediaQuery'
import SidebarMenu from './SidebarMenu.vue'

const route = useRoute()

const searchKeyword = ref('')
const filterDifficulty = ref<Difficulty | ''>('')

const { mode, setMode } = useInterviewMode()
const { theme, skinLabel, toggleTheme, setSkin } = useTheme()
const isMobile = useIsMobile()
const drawerVisible = ref(false)

const isInterviewerMode = computed({
  get: () => mode.value === 'interviewer',
  set: (val: boolean) => setMode(val ? 'interviewer' : 'candidate'),
})

function handleMobileSelect() {
  drawerVisible.value = false
}

watch(() => route.path, () => {
  if (isMobile.value) drawerVisible.value = false
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
  padding: 0;
}

.main-layout-right {
  flex: 1;
  overflow: hidden;
}

.main-layout-toolbar {
  height: 48px;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: 0 var(--spacing-lg);
  background: var(--toolbar-bg);
  border-bottom: 1px solid var(--border-color);
  flex-shrink: 0;
}

.main-layout-toolbar-spacer {
  flex: 1;
}

.main-layout-hamburger {
  flex-shrink: 0;
}

.main-layout-content {
  background: var(--bg-color);
  padding: var(--spacing-lg);
  overflow-y: auto;
}

@media (max-width: 768px) {
  .main-layout-toolbar {
    padding: 0 var(--spacing-sm);
    gap: var(--spacing-xs);
  }

  .main-layout-content {
    padding: var(--spacing-sm);
  }
}
</style>

<style>
.main-layout-drawer .el-drawer__body {
  padding: 0;
  overflow: hidden;
}
</style>
