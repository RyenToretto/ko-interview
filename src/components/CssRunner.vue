<template>
  <div class="css-runner">
    <div class="css-runner-header">
      <span class="css-runner-traffic-lights" aria-hidden="true">
        <span class="css-runner-traffic-light close"></span>
        <span class="css-runner-traffic-light minimize"></span>
        <span class="css-runner-traffic-light maximize"></span>
      </span>
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
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}

.css-runner-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  background: var(--code-header-bg);
  color: var(--code-text);
  border-bottom: 1px solid var(--code-border);
}

.css-runner-traffic-lights {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
}

.css-runner-traffic-light {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
  box-shadow: inset 0 0 0 0.5px rgba(0, 0, 0, 0.25);
}

.css-runner-traffic-light.close { background: #ff5f56; }
.css-runner-traffic-light.minimize { background: #ffbd2e; }
.css-runner-traffic-light.maximize { background: #27c93f; }

.css-runner-title {
  flex: 1;
  font-size: var(--font-size-sm);
  font-weight: 600;
  text-align: center;
  letter-spacing: 0.5px;
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
  padding: var(--spacing-xs) var(--spacing-md);
  background: var(--code-output-bg);
  color: #a6adc8;
  font-size: var(--font-size-xs);
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  border-bottom: 1px solid var(--code-border);
}

.css-runner-preview-area {
  flex: 1;
  position: relative;
  background: #fff;
}

.css-runner-iframe {
  width: 100%;
  height: 100%;
  min-height: 260px;
  border: none;
  display: block;
}

@media (max-width: 768px) {
  .css-runner-body {
    flex-direction: column;
  }

  .css-runner-editor-pane {
    border-right: none;
    border-bottom: 1px solid var(--border-color);
  }

  .css-runner-iframe {
    min-height: 200px;
  }
}
</style>
