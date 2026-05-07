<template>
  <div class="code-runner">
    <div class="code-runner-header">
      <span class="code-runner-traffic-lights" aria-hidden="true">
        <span class="code-runner-traffic-light close"></span>
        <span class="code-runner-traffic-light minimize"></span>
        <span class="code-runner-traffic-light maximize"></span>
      </span>
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
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}

.code-runner-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  background: var(--code-header-bg);
  color: var(--code-text);
  border-bottom: 1px solid var(--code-border);
}

.code-runner-traffic-lights {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
}

.code-runner-traffic-light {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
  box-shadow: inset 0 0 0 0.5px rgba(0, 0, 0, 0.25);
}

.code-runner-traffic-light.close { background: #ff5f56; }
.code-runner-traffic-light.minimize { background: #ffbd2e; }
.code-runner-traffic-light.maximize { background: #27c93f; }

.code-runner-title {
  flex: 1;
  font-size: var(--font-size-sm);
  font-weight: 600;
  text-align: center;
  letter-spacing: 0.5px;
}

.code-runner-output {
  border-top: 1px solid var(--code-border);
}

.code-runner-output-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-xs) var(--spacing-md);
  background: var(--code-output-bg);
  color: var(--code-text);
  font-size: var(--font-size-sm);
  opacity: 0.8;
}

.code-runner-output-body {
  background: var(--code-output-body-bg);
  color: var(--code-text);
  padding: var(--spacing-sm) var(--spacing-md);
  min-height: 60px;
  max-height: 220px;
  overflow-y: auto;
  font-family: 'Fira Code', 'Consolas', monospace;
  font-size: var(--font-size-sm);
  line-height: 1.6;
}

.code-runner-log-line {
  display: flex;
  gap: var(--spacing-sm);
  padding: 2px var(--spacing-sm);
  border-left: 3px solid transparent;
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  margin-left: -8px;
}

.code-runner-log-type {
  color: #585b70;
  min-width: 40px;
  flex-shrink: 0;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 11px;
}

.code-runner-log-log {
  color: #cdd6f4;
  border-left-color: rgba(205, 214, 244, 0.3);
}

.code-runner-log-warn {
  color: #f9e2af;
  border-left-color: #f9e2af;
  background: rgba(249, 226, 175, 0.08);
}

.code-runner-log-error {
  color: #f38ba8;
  border-left-color: #f38ba8;
  background: rgba(243, 139, 168, 0.08);
}

.code-runner-log-info {
  color: #89b4fa;
  border-left-color: #89b4fa;
  background: rgba(137, 180, 250, 0.08);
}

.code-runner-log-return {
  color: #a6e3a1;
  font-style: italic;
  padding: 2px var(--spacing-sm);
  margin-top: var(--spacing-xs);
}

.code-runner-log-placeholder {
  color: #585b70;
  font-style: italic;
}

.code-runner-log-duration {
  color: #585b70;
  font-size: 12px;
  margin-top: var(--spacing-xs);
  text-align: right;
  font-variant-numeric: tabular-nums;
}
</style>
