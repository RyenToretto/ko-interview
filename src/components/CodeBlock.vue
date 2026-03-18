<template>
  <div class="code-block-wrapper">
    <CodeMirror
      :model-value="code"
      :lang="langExtension"
      :extensions="extensions"
      basic
      disabled
      class="code-block-editor"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import CodeMirror from 'vue-codemirror6'
import { javascript } from '@codemirror/lang-javascript'
import { css } from '@codemirror/lang-css'
import { html } from '@codemirror/lang-html'
import { oneDark } from '@codemirror/theme-one-dark'
import { EditorView } from '@codemirror/view'

const props = withDefaults(defineProps<{
  code: string
  lang?: 'javascript' | 'typescript' | 'css' | 'html'
}>(), {
  lang: 'javascript',
})

const langExtension = computed(() => {
  switch (props.lang) {
    case 'typescript': return javascript({ typescript: true })
    case 'css': return css()
    case 'html': return html()
    default: return javascript()
  }
})

const extensions = [
  oneDark,
  EditorView.lineWrapping,
]
</script>

<style scoped>
.code-block-wrapper {
  border-radius: 8px;
  overflow: hidden;
  font-size: 14px;
  line-height: 1.5;
}

.code-block-editor :deep(.cm-editor) {
  border-radius: 8px;
}

.code-block-editor :deep(.cm-gutters) {
  border-radius: 8px 0 0 8px;
}
</style>
