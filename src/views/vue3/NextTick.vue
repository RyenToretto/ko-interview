<template>
  <QuestionCard title="nextTick" type="code">
    <template #description>
      <p>Vue 的数据更新是<strong>异步</strong>的，DOM 不会立即更新。<code>nextTick</code> 用于在 DOM 更新完成后执行回调。</p>
      <p>请完成以下任务，理解 nextTick 的原理和使用场景。</p>
    </template>

    <el-card shadow="never">
      <template #header><strong>任务1: 体验异步更新</strong></template>
      <p style="margin-bottom: 12px">
        点击按钮后，count 会 +1，但<strong>立即</strong>读取 DOM 中的值仍然是旧的。
      </p>
      <p ref="countRef" class="next-tick-count-display">计数: {{ count }}</p>
      <el-space>
        <el-button type="primary" @click="incrementWithoutTick">
          直接读取 DOM（不用 nextTick）
        </el-button>
        <el-button type="success" @click="incrementWithTick">
          使用 nextTick 后读取
        </el-button>
      </el-space>
      <p style="margin-top: 12px">{{ tickResult }}</p>
    </el-card>

    <el-card shadow="never">
      <template #header><strong>任务2: 使用 nextTick 操作更新后的 DOM</strong></template>
      <p style="margin-bottom: 12px">
        动态添加输入框后，使用 nextTick 让新输入框<strong>自动获取焦点</strong>。
      </p>
      <el-button @click="addInput">添加输入框</el-button>
      <div style="margin-top: 12px">
        <el-input
          v-for="(item, idx) in inputs"
          :key="idx"
          v-model="item.value"
          :ref="(el: any) => { if (el) inputRefs[idx] = el }"
          :placeholder="'输入框 ' + (idx + 1)"
          style="margin-bottom: 8px"
        />
      </div>
    </el-card>

    <el-card shadow="never">
      <template #header><strong>任务3: nextTick 原理问答</strong></template>
      <el-descriptions :column="1" border>
        <el-descriptions-item label="nextTick 的底层实现机制是什么？">
          {{ answer1 }}
        </el-descriptions-item>
        <el-descriptions-item label="为什么 Vue 选择异步更新 DOM？">
          {{ answer2 }}
        </el-descriptions-item>
      </el-descriptions>
    </el-card>
  </QuestionCard>
</template>

<script setup lang="ts">
import { ref, reactive, nextTick } from 'vue'
import QuestionCard from '@/components/QuestionCard.vue'

// ========== 任务1 ==========
const count = ref(0)
const countRef = ref<HTMLElement>()
const tickResult = ref('')

function incrementWithoutTick() {
  count.value++
  const domText = countRef.value?.textContent || ''
  tickResult.value = `修改后立即读 DOM: "${domText}" ← 仍是旧值！(因为 DOM 还没更新)`
}

// TODO: 使用 nextTick，在 DOM 更新后读取最新的文本内容
async function incrementWithTick() {
  count.value++
  // 请在此处使用 nextTick，等待 DOM 更新后读取 countRef 的 textContent

  const domText = countRef.value?.textContent || ''
  tickResult.value = `nextTick 后读 DOM: "${domText}"`
}

// ========== 任务2 ==========
const inputs = reactive<Array<{ value: string }>>([])
const inputRefs = ref<any[]>([])

// TODO: 添加输入框后，使用 nextTick 让新输入框自动聚焦
async function addInput() {
  inputs.push({ value: '' })
  // 请在此处使用 nextTick，等待新输入框渲染后调用 focus
}

// ========== 任务3: 填写原理 ==========
// TODO: 请填写 nextTick 的底层原理
const answer1 = '请填写...'

// TODO: 请填写为什么 Vue 选择异步更新
const answer2 = '请填写...'
</script>

<style scoped>
.next-tick-count-display {
  font-size: 20px;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 12px;
}
</style>
