<template>
  <QuestionCard title="插槽" type="code">
    <template #description>
      <p>请完成以下三种插槽的使用：</p>
      <ol>
        <li><strong>默认插槽</strong>：实现一个卡片容器组件</li>
        <li><strong>具名插槽</strong>：实现一个带 header / body / footer 的布局组件</li>
        <li><strong>作用域插槽</strong>：实现一个列表组件，将数据暴露给父组件自定义渲染</li>
      </ol>
    </template>

    <el-card shadow="never">
      <template #header><strong>任务1: 默认插槽</strong></template>
      <SimpleCard>
        <p>这段内容通过默认插槽传入</p>
        <el-button type="primary" size="small">按钮也可以</el-button>
      </SimpleCard>
    </el-card>

    <el-card shadow="never">
      <template #header><strong>任务2: 具名插槽</strong></template>
      <PageLayout>
        <template #header>
          <h3 style="margin: 0">页面标题</h3>
        </template>
        <template #default>
          <p>这是页面主体内容区域</p>
        </template>
        <template #footer>
          <p style="text-align: center; color: #909399">© 2024 面试考察系统</p>
        </template>
      </PageLayout>
    </el-card>

    <el-card shadow="never">
      <template #header><strong>任务3: 作用域插槽</strong></template>
      <DataList :items="fruits">
        <template #default="{ item, index }">
          <div class="slots-usage-fruit-item">
            <el-tag type="success">{{ index + 1 }}</el-tag>
            <span>{{ item.name }}</span>
            <span style="color: #e6a23c">¥{{ item.price }}</span>
          </div>
        </template>
      </DataList>
    </el-card>
  </QuestionCard>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'
import type { Slot } from 'vue'
import QuestionCard from '@/components/QuestionCard.vue'

// TODO 任务1: 实现 SimpleCard 组件，带默认插槽
// 渲染一个带边框和 padding 的容器，内部渲染默认插槽内容
const SimpleCard = defineComponent({
  name: 'SimpleCard',
  setup(_props, { slots }) {
    return () =>
      h('div', {
        style: 'border: 1px solid #e4e7ed; border-radius: 8px; padding: 16px; background: #fafafa',
      }, [
        // TODO: 渲染默认插槽内容
        // 提示：使用 slots.default?.()
      ])
  },
})

// TODO 任务2: 实现 PageLayout 组件，带具名插槽 header / default / footer
const PageLayout = defineComponent({
  name: 'PageLayout',
  setup(_props, { slots }) {
    return () =>
      h('div', {
        style: 'border: 1px solid #e4e7ed; border-radius: 8px; overflow: hidden',
      }, [
        // TODO: 渲染 header 插槽
        h('div', { style: 'padding: 12px 16px; background: #f5f7fa; border-bottom: 1px solid #e4e7ed' }, [
          // slots.header?.()
        ]),
        // TODO: 渲染默认插槽
        h('div', { style: 'padding: 16px; min-height: 60px' }, [
          // slots.default?.()
        ]),
        // TODO: 渲染 footer 插槽
        h('div', { style: 'padding: 12px 16px; background: #f5f7fa; border-top: 1px solid #e4e7ed' }, [
          // slots.footer?.()
        ]),
      ])
  },
})

// TODO 任务3: 实现 DataList 组件，带作用域插槽
// 接收 items prop，遍历 items 并通过作用域插槽暴露 { item, index }
const DataList = defineComponent({
  name: 'DataList',
  props: {
    items: { type: Array, default: () => [] },
  },
  setup(props, { slots }) {
    return () =>
      h('div', {
        style: 'border: 1px solid #e4e7ed; border-radius: 8px; padding: 8px',
      },
        // TODO: 遍历 props.items，对每项调用作用域插槽
        // 提示：(props.items as any[]).map((item, index) => slots.default?.({ item, index }))
        (slots as Record<string, Slot>).default
          ? []  // 替换这里
          : [h('p', { style: 'color: #909399; text-align: center' }, '暂无数据')]
      )
  },
})

const fruits = [
  { name: '苹果', price: 8.5 },
  { name: '香蕉', price: 5.0 },
  { name: '樱桃', price: 35.0 },
  { name: '芒果', price: 15.0 },
]
</script>

<style scoped>
.slots-usage-fruit-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  border-bottom: 1px solid #f0f0f0;
}

.slots-usage-fruit-item:last-child {
  border-bottom: none;
}
</style>
