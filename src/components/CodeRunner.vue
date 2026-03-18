<template>
  <div class="code-runner">
    <div class="code-runner-header">
      <span class="code-runner-title">{{ title || '在线代码练习' }}</span>
      <el-space>
        <el-button type="primary" size="small" @click="handleRun" :loading="running">
          运行
        </el-button>
        <el-button size="small" @click="handleReset">重置</el-button>
      </el-space>
    </div>

    <CodeEditor v-model="code" :lang="lang" />

    <div class="code-runner-output">
      <div class="code-runner-output-header">
        <span>控制台输出</span>
        <el-button text size="small" @click="logs = []" v-if="logs.length">清空</el-button>
      </div>
      <div class="code-runner-output-body">
        <div v-if="error" class="code-runner-log-error">{{ error }}</div>
        <div
          v-for="(log, i) in logs"
          :key="i"
          :class="'code-runner-log-' + log.type"
          class="code-runner-log-line"
        >
          <span class="code-runner-log-type">{{ log.type }}</span>
          <span>{{ log.args.join(' ') }}</span>
        </div>
        <div v-if="returnValue !== undefined" class="code-runner-log-return">
          ← {{ returnValue }}
        </div>
        <div v-if="!logs.length && !error && returnValue === undefined" class="code-runner-log-placeholder">
          点击"运行"执行代码...
        </div>
        <div v-if="duration > 0" class="code-runner-log-duration">
          耗时: {{ duration }}ms
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CodeEditor from './CodeEditor.vue'
import { runCodeInSandbox } from '@/utils/sandbox-runner'
import type { RunResult } from '@/utils/sandbox-runner'

const props = withDefaults(defineProps<{
  initialCode?: string
  lang?: 'javascript' | 'typescript' | 'css' | 'html'
  title?: string
}>(), {
  initialCode: '',
  lang: 'javascript',
  title: '',
})

const code = ref(props.initialCode)
const running = ref(false)
const logs = ref<RunResult['logs']>([])
const error = ref<string>()
const returnValue = ref<string>()
const duration = ref(0)

async function handleRun() {
  running.value = true
  logs.value = []
  error.value = undefined
  returnValue.value = undefined
  duration.value = 0

  try {
    const result = await runCodeInSandbox(code.value)
    logs.value = result.logs
    error.value = result.error
    returnValue.value = result.result
    duration.value = result.duration
  } catch (e) {
    error.value = String(e)
  } finally {
    running.value = false
  }
}

function handleReset() {
  code.value = props.initialCode
  logs.value = []
  error.value = undefined
  returnValue.value = undefined
  duration.value = 0
}
</script>

<style scoped>
.code-runner {
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
}

.code-runner-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background: var(--code-header-bg);
  color: var(--code-text);
}

.code-runner-title {
  font-size: 14px;
  font-weight: 600;
}

.code-runner-output {
  border-top: 1px solid var(--code-border);
}

.code-runner-output-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 12px;
  background: var(--code-output-bg);
  color: var(--code-text);
  font-size: 13px;
  opacity: 0.8;
}

.code-runner-output-body {
  background: var(--code-output-body-bg);
  color: var(--code-text);
  padding: 8px 12px;
  min-height: 60px;
  max-height: 200px;
  overflow-y: auto;
  font-family: 'Fira Code', 'Consolas', monospace;
  font-size: 13px;
  line-height: 1.6;
}

.code-runner-log-line {
  display: flex;
  gap: 8px;
}

.code-runner-log-type {
  color: #585b70;
  min-width: 40px;
  flex-shrink: 0;
}

.code-runner-log-log { color: #cdd6f4; }
.code-runner-log-warn { color: #f9e2af; }
.code-runner-log-error { color: #f38ba8; }
.code-runner-log-info { color: #89b4fa; }
.code-runner-log-return { color: #a6e3a1; font-style: italic; }
.code-runner-log-placeholder { color: #585b70; font-style: italic; }

.code-runner-log-duration {
  color: #585b70;
  font-size: 12px;
  margin-top: 4px;
  text-align: right;
}
</style>
