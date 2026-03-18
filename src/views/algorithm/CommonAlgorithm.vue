<template>
  <QuestionCard title="高频算法题" type="code">
    <template #description>
      <p>请实现以下高频算法：数组去重、两数之和、有效括号匹配。</p>
    </template>

    <el-divider>在线练习区</el-divider>
    <CodeRunner
      title="数组去重 / 两数之和 / 有效括号"
      :initial-code="playgroundCode"
    />
  </QuestionCard>
</template>

<script setup lang="ts">
import QuestionCard from '@/components/QuestionCard.vue'
import CodeRunner from '@/components/CodeRunner.vue'

const playgroundCode = `// 1. 数组去重（多种方式）
const arr = [1, 2, 2, 3, 3, 4, 5, 5]
console.log('Set:', [...new Set(arr)])
console.log('filter:', arr.filter((v, i) => arr.indexOf(v) === i))
console.log('reduce:', arr.reduce((a, v) => a.includes(v) ? a : [...a, v], []))

// 2. 两数之和
function twoSum(nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i]
    if (map.has(diff)) return [map.get(diff), i]
    map.set(nums[i], i)
  }
  return []
}
console.log('两数之和:', twoSum([2, 7, 11, 15], 9))

// 3. 有效括号匹配
function isValid(s) {
  const stack = []
  const map = { ')': '(', ']': '[', '}': '{' }
  for (const c of s) {
    if (map[c]) {
      if (stack.pop() !== map[c]) return false
    } else {
      stack.push(c)
    }
  }
  return stack.length === 0
}
console.log('有效括号:', isValid('()[]{}'), isValid('(]'))
`
</script>
