<template>
  <QuestionCard title="手写防抖与节流" type="code">
    <template #description>
      <p>请手动实现 <code>debounce</code>（防抖）和 <code>throttle</code>（节流）函数：</p>
      <ul>
        <li><strong>防抖</strong>：事件触发后延迟执行，若在延迟期间再次触发则重新计时</li>
        <li><strong>节流</strong>：事件触发后在指定间隔内只执行一次</li>
      </ul>
    </template>

    <el-card shadow="never">
      <template #header><strong>防抖测试</strong> — 停止输入 500ms 后才触发</template>
      <el-input
        v-model="debounceInput"
        placeholder="请输入内容（防抖 500ms）"
        @input="onDebounceInput"
      />
      <p style="margin-top: 12px">
        触发次数: <el-tag>{{ debounceCount }}</el-tag>
        最后值: <el-tag type="success">{{ debounceValue }}</el-tag>
      </p>
    </el-card>

    <el-card shadow="never">
      <template #header><strong>节流测试</strong> — 快速点击按钮，每 1000ms 只触发一次</template>
      <el-button type="primary" @click="onThrottleClick">
        快速点击我！（已点击 {{ clickCount }} 次）
      </el-button>
      <p style="margin-top: 12px">
        实际触发次数: <el-tag>{{ throttleCount }}</el-tag>
      </p>
    </el-card>
  </QuestionCard>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import QuestionCard from '@/components/QuestionCard.vue'

// ========== TODO: 实现 debounce 函数 ==========
// 参数: fn (要防抖的函数), delay (延迟毫秒数)
// 返回: 防抖后的新函数
// 要求: 事件触发后延迟执行，若延迟期间再次触发则重新计时
function debounce<T extends (...args: any[]) => any>(fn: T, delay: number): (...args: Parameters<T>) => void {
  // 请实现
  void delay
  return (...args: Parameters<T>) => {
    fn(...args)
  }
}

// ========== TODO: 实现 throttle 函数 ==========
// 参数: fn (要节流的函数), interval (间隔毫秒数)
// 返回: 节流后的新函数
// 要求: 在指定间隔内只执行一次
function throttle<T extends (...args: any[]) => any>(fn: T, interval: number): (...args: Parameters<T>) => void {
  // 请实现
  void interval
  return (...args: Parameters<T>) => {
    fn(...args)
  }
}

// ===== 防抖测试 =====
const debounceInput = ref('')
const debounceCount = ref(0)
const debounceValue = ref('')

const debouncedHandler = debounce((val: string) => {
  debounceCount.value++
  debounceValue.value = val
}, 500)

function onDebounceInput(val: string | number) {
  debouncedHandler(String(val))
}

// ===== 节流测试 =====
const clickCount = ref(0)
const throttleCount = ref(0)

const throttledHandler = throttle(() => {
  throttleCount.value++
}, 1000)

function onThrottleClick() {
  clickCount.value++
  throttledHandler()
}
</script>
