<template>
  <QuestionCard title="computed 与 watch" type="code">
    <template #description>
      <p>请完成以下 computed 和 watch 的使用任务：</p>
      <ol>
        <li>使用 <code>computed</code> 实现价格计算</li>
        <li>使用 <code>watch</code> 监听搜索输入，模拟实时搜索</li>
        <li>使用 <code>watchEffect</code> 自动追踪依赖</li>
      </ol>
    </template>

    <el-card shadow="never">
      <template #header><strong>任务1: computed 价格计算器</strong></template>
      <el-form label-width="80px" inline>
        <el-form-item label="单价">
          <el-input-number v-model="price" :min="0" :precision="2" />
        </el-form-item>
        <el-form-item label="数量">
          <el-input-number v-model="quantity" :min="0" />
        </el-form-item>
        <el-form-item label="折扣">
          <el-slider v-model="discount" :min="0" :max="100" style="width: 200px" />
          <span style="margin-left: 8px">{{ discount }}%</span>
        </el-form-item>
      </el-form>
      <el-descriptions :column="2" border style="margin-top: 16px">
        <el-descriptions-item label="原价合计">{{ subtotal }}</el-descriptions-item>
        <el-descriptions-item label="折后价格">{{ finalPrice }}</el-descriptions-item>
      </el-descriptions>
    </el-card>

    <el-card shadow="never">
      <template #header><strong>任务2: watch 实时搜索</strong></template>
      <el-input
        v-model="searchQuery"
        placeholder="请输入搜索关键词"
        clearable
      />
      <div style="margin-top: 12px">
        <p v-if="searching">搜索中...</p>
        <p v-else-if="searchResults.length > 0">
          搜索结果:
          <el-tag v-for="r in searchResults" :key="r" style="margin: 4px">{{ r }}</el-tag>
        </p>
        <p v-else-if="searchQuery" style="color: #909399">无结果</p>
      </div>
    </el-card>

    <el-card shadow="never">
      <template #header><strong>任务3: watchEffect 自动日志</strong></template>
      <el-form inline>
        <el-form-item label="名字">
          <el-input v-model="firstName" placeholder="名" />
        </el-form-item>
        <el-form-item label="姓">
          <el-input v-model="lastName" placeholder="姓" />
        </el-form-item>
      </el-form>
      <p>全名: <el-tag type="success" size="large">{{ fullName }}</el-tag></p>
      <div style="margin-top: 12px">
        <p style="color: #909399">watchEffect 日志:</p>
        <p v-for="(log, i) in effectLogs" :key="i" style="font-size: 13px">{{ log }}</p>
      </div>
    </el-card>
  </QuestionCard>
</template>

<script setup lang="ts">
import { ref, computed, watch, watchEffect } from 'vue'
import QuestionCard from '@/components/QuestionCard.vue'

// ========== 任务1: computed 价格计算器 ==========
const price = ref(99.9)
const quantity = ref(2)
const discount = ref(80)

// TODO: 使用 computed 计算原价合计 (price * quantity)
const subtotal = computed(() => {
  // 请实现
  return 0
})

// TODO: 使用 computed 计算折后价格 (subtotal * discount / 100)
const finalPrice = computed(() => {
  // 请实现
  return 0
})

// ========== 任务2: watch 实时搜索 ==========
const searchQuery = ref('')
const searchResults = ref<string[]>([])
const searching = ref(false)

const mockData = ['Vue.js', 'React', 'Angular', 'Svelte', 'TypeScript', 'JavaScript', 'Node.js', 'Vite', 'Webpack', 'Element Plus']

// TODO: 使用 watch 监听 searchQuery 变化
// 要求：延迟 300ms 搜索（防抖效果），从 mockData 中筛选包含关键词的结果
// 搜索时设置 searching = true，完成后设为 false

// ========== 任务3: watchEffect 自动追踪 ==========
const firstName = ref('')
const lastName = ref('')
const effectLogs = ref<string[]>([])

// TODO: 使用 computed 计算全名 (lastName + firstName)
const fullName = computed(() => {
  // 请实现
  return ''
})

// TODO: 使用 watchEffect 自动追踪 fullName 变化并记录日志
// 每次变化时 push 一条日志到 effectLogs
</script>
