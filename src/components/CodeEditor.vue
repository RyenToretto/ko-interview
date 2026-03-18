<template>
  <div class="code-editor-wrapper">
    <CodeMirror
      v-model="internalValue"
      :lang="langExtension"
      :extensions="extensions"
      basic
      :placeholder="placeholder"
      :disabled="readonly"
      class="code-editor-cm"
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
  modelValue: string
  lang?: 'javascript' | 'typescript' | 'css' | 'html'
  readonly?: boolean
  placeholder?: string
}>(), {
  lang: 'javascript',
  readonly: false,
  placeholder: '',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const internalValue = computed({
  get: () => props.modelValue,
  set: (val: string) => emit('update:modelValue', val),
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
.code-editor-wrapper {
  border-radius: 8px;
  overflow: hidden;
  font-size: 14px;
  line-height: 1.5;
  border: 1px solid var(--border-color);
}

.code-editor-cm :deep(.cm-editor) {
  min-height: 120px;
  max-height: 400px;
}

.code-editor-cm :deep(.cm-scroller) {
  overflow: auto;
}
</style>
