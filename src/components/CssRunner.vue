<template>
  <div class="css-runner">
    <div class="css-runner-header">
      <span class="css-runner-title">{{ title || 'CSS 在线练习' }}</span>
      <el-space>
        <el-button type="primary" size="small" @click="applyStyle">
          应用样式
        </el-button>
        <el-button size="small" @click="handleReset">重置</el-button>
      </el-space>
    </div>

    <div class="css-runner-body">
      <div class="css-runner-editor-pane">
        <div class="css-runner-pane-label">CSS</div>
        <CodeEditor v-model="cssCode" lang="css" />
      </div>
      <div class="css-runner-preview-pane">
        <div class="css-runner-pane-label">预览</div>
        <div class="css-runner-preview-area">
          <iframe
            ref="previewFrame"
            class="css-runner-iframe"
            sandbox="allow-same-origin"
            :srcdoc="iframeSrc"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import CodeEditor from './CodeEditor.vue'

const props = withDefaults(defineProps<{
  initialCss?: string
  html?: string
  title?: string
}>(), {
  initialCss: '',
  html: '<div class="box"><div class="inner">居中内容</div></div>',
  title: '',
})

const cssCode = ref(props.initialCss)
const appliedCss = ref(props.initialCss)

const iframeSrc = computed(() => `<!DOCTYPE html>
<html>
<head>
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: -apple-system, 'PingFang SC', sans-serif; padding: 12px; background: #fff; }
${appliedCss.value}
</style>
</head>
<body>${props.html}</body>
</html>`)

const previewFrame = ref<HTMLIFrameElement>()

function applyStyle() {
  appliedCss.value = cssCode.value
}

function handleReset() {
  cssCode.value = props.initialCss
  appliedCss.value = props.initialCss
}
</script>

<style scoped>
.css-runner {
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
}

.css-runner-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background: #1e1e2e;
  color: #cdd6f4;
}

.css-runner-title {
  font-size: 14px;
  font-weight: 600;
}

.css-runner-body {
  display: flex;
  min-height: 300px;
}

.css-runner-editor-pane {
  flex: 1;
  min-width: 0;
  border-right: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
}

.css-runner-preview-pane {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
}

.css-runner-pane-label {
  padding: 4px 12px;
  background: #181825;
  color: #a6adc8;
  font-size: 12px;
  font-weight: 600;
}

.css-runner-preview-area {
  flex: 1;
  position: relative;
}

.css-runner-iframe {
  width: 100%;
  height: 100%;
  min-height: 260px;
  border: none;
  display: block;
}
</style>
