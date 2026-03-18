<template>
  <QuestionCard title="组件通信" type="code">
    <template #description>
      <p>请实现以下三种 Vue 3 组件通信方式：</p>
      <ol>
        <li><strong>Props / Emit</strong>：父子组件双向数据传递</li>
        <li><strong>Provide / Inject</strong>：跨层级组件通信</li>
        <li><strong>v-model</strong>：组件上的 v-model 双向绑定</li>
      </ol>
      <p>
        本题的子组件直接定义在同一文件中（使用 defineComponent）。
        候选人需要补全通信逻辑。
      </p>
    </template>

    <el-card shadow="never">
      <template #header><strong>任务1: Props / Emit</strong></template>
      <p style="margin-bottom: 12px">
        父组件传递 message 给子组件显示，子组件点击按钮后通过 emit 通知父组件更新
      </p>
      <p>父组件 message: <el-tag type="primary">{{ parentMessage }}</el-tag></p>
      <ChildProps :message="parentMessage" @update="handleUpdate" />
    </el-card>

    <el-card shadow="never">
      <template #header><strong>任务2: Provide / Inject</strong></template>
      <p style="margin-bottom: 12px">
        父组件 provide 一个主题色，深层子组件 inject 使用
      </p>
      <el-radio-group v-model="themeColor" style="margin-bottom: 12px">
        <el-radio value="#409eff">蓝色</el-radio>
        <el-radio value="#67c23a">绿色</el-radio>
        <el-radio value="#f56c6c">红色</el-radio>
      </el-radio-group>
      <GrandChild />
    </el-card>

    <el-card shadow="never">
      <template #header><strong>任务3: v-model 双向绑定</strong></template>
      <p style="margin-bottom: 12px">实现一个自定义评分组件的 v-model</p>
      <p>当前评分: <el-tag type="warning" size="large">{{ rating }}</el-tag></p>
      <RatingInput v-model="rating" />
    </el-card>
  </QuestionCard>
</template>

<script setup lang="ts">
import { ref, provide, defineComponent, h, inject } from 'vue'
import QuestionCard from '@/components/QuestionCard.vue'

// ========== 任务1: Props / Emit ==========
const parentMessage = ref('Hello from Parent!')

function handleUpdate(newMsg: string) {
  parentMessage.value = newMsg
}

// TODO: 补全子组件，接收 message prop 并展示
// 点击按钮时 emit('update', newValue)
const ChildProps = defineComponent({
  name: 'ChildProps',
  props: {
    message: { type: String, required: true },
  },
  emits: ['update'],
  setup(props, { emit }) {
    return () =>
      h('div', {
        style: 'padding: 12px; border: 1px dashed #409eff; border-radius: 6px; margin-top: 8px',
      }, [
        h('p', {}, `子组件收到: ${props.message}`),
        h('button', {
          style: 'padding: 6px 16px; cursor: pointer; margin-top: 8px; background: #409eff; color: #fff; border: none; border-radius: 4px;',
          onClick: () => {
            // TODO: 通过 emit 发送新消息给父组件
            void emit
          },
        }, '点击更新父组件消息'),
      ])
  },
})

// ========== 任务2: Provide / Inject ==========
const themeColor = ref('#409eff')

// TODO: 使用 provide 向后代组件提供 themeColor
// provide('themeColor', themeColor)

const DeepChild = defineComponent({
  name: 'DeepChild',
  setup() {
    // TODO: 使用 inject 获取 themeColor
    const color = inject('themeColor', ref('#409eff'))
    return () =>
      h('div', {
        style: `padding: 16px; border: 2px solid ${color.value}; border-radius: 6px; color: ${color.value}; font-weight: 600;`,
      }, `深层子组件 — 主题色: ${color.value}`)
  },
})

const GrandChild = defineComponent({
  name: 'GrandChild',
  components: { DeepChild },
  setup() {
    return () => h('div', {
      style: 'padding: 12px; background: #f5f7fa; border-radius: 6px',
    }, [
      h('p', { style: 'margin-bottom: 8px; color: #909399' }, '中间层组件（不传递 props）'),
      h(DeepChild),
    ])
  },
})

// ========== 任务3: v-model ==========
const rating = ref(3)

// TODO: 实现支持 v-model 的评分组件
// 接收 modelValue prop，emit('update:modelValue', newValue)
const RatingInput = defineComponent({
  name: 'RatingInput',
  props: {
    modelValue: { type: Number, default: 0 },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    return () =>
      h('div', { style: 'display: flex; gap: 4px; margin-top: 8px' },
        [1, 2, 3, 4, 5].map((star) =>
          h('span', {
            style: `cursor: pointer; font-size: 28px; color: ${star <= props.modelValue ? '#e6a23c' : '#c0c4cc'}`,
            onClick: () => {
              // TODO: emit 新的评分值
              void emit
              void star
            },
          }, '★')
        )
      )
  },
})
</script>
