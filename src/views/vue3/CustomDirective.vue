<template>
  <QuestionCard title="自定义指令" type="code">
    <template #description>
      <p>请实现以下自定义指令：</p>
      <ol>
        <li><code>v-focus</code> — 元素挂载时自动获取焦点</li>
        <li><code>v-color</code> — 根据绑定值设置元素文字颜色</li>
        <li><code>v-click-outside</code> — 点击元素外部时触发回调</li>
      </ol>
    </template>

    <el-card shadow="never">
      <template #header><strong>任务1: v-focus 自动聚焦</strong></template>
      <p style="margin-bottom: 8px">输入框应在页面加载时自动获取焦点</p>
      <el-input v-focus placeholder="我应该自动获取焦点" />
    </el-card>

    <el-card shadow="never">
      <template #header><strong>任务2: v-color 动态颜色</strong></template>
      <el-radio-group v-model="currentColor" style="margin-bottom: 12px">
        <el-radio value="#409eff">蓝色</el-radio>
        <el-radio value="#67c23a">绿色</el-radio>
        <el-radio value="#f56c6c">红色</el-radio>
        <el-radio value="#e6a23c">橙色</el-radio>
      </el-radio-group>
      <p v-color="currentColor" style="font-size: 20px; font-weight: 600">
        我的颜色会随选择变化
      </p>
    </el-card>

    <el-card shadow="never">
      <template #header><strong>任务3: v-click-outside 点击外部</strong></template>
      <p style="margin-bottom: 8px">点击蓝色区域外部会触发回调</p>
      <div
        v-click-outside="handleClickOutside"
        class="custom-directive-click-area"
      >
        点击我外面试试
      </div>
      <p style="margin-top: 8px">
        外部点击次数: <el-tag type="warning">{{ outsideClickCount }}</el-tag>
      </p>
    </el-card>
  </QuestionCard>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Directive } from 'vue'
import QuestionCard from '@/components/QuestionCard.vue'

// TODO: 实现 v-focus 指令
// 元素挂载到 DOM 时自动调用 el.focus()
const vFocus: Directive = {
  mounted(el) {
    // 请实现
    void el
  },
}

// TODO: 实现 v-color 指令
// 根据绑定值设置 el.style.color
// 注意：值更新时也需要生效（mounted + updated）
const vColor: Directive = {
  mounted(el, binding) {
    // 请实现
    void el
    void binding
  },
  updated(el, binding) {
    // 请实现
    void el
    void binding
  },
}

// TODO: 实现 v-click-outside 指令
// 点击元素外部时执行绑定的回调函数
// 提示：在 mounted 时给 document 添加 click 事件，在 unmounted 时移除
const vClickOutside: Directive = {
  mounted(el, binding) {
    // 请实现
    void el
    void binding
  },
  unmounted(el) {
    // 请清理事件监听
    void el
  },
}

const currentColor = ref('#409eff')
const outsideClickCount = ref(0)

function handleClickOutside() {
  outsideClickCount.value++
}
</script>

<style scoped>
.custom-directive-click-area {
  width: 200px;
  height: 100px;
  background: #409eff;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
}
</style>
