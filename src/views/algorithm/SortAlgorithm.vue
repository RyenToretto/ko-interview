<template>
  <QAQuestion
    title="排序算法"
    :questions="questions"
  >
    <template #description>
      <p>本题考察常见排序算法的时间复杂度、特点，以及 QuickSort 的实现思路。</p>
    </template>

    <template #extra>
      <el-divider>在线练习区</el-divider>
      <CodeRunner
        title="QuickSort 实现"
        :initial-code="playgroundCode"
      />
    </template>
  </QAQuestion>
</template>

<script setup lang="ts">
import QAQuestion from '@/components/QAQuestion.vue'
import CodeRunner from '@/components/CodeRunner.vue'

const playgroundCode = `function quickSort(arr) {
  if (arr.length <= 1) return arr
  const pivot = arr[Math.floor(arr.length / 2)]
  const left = arr.filter(x => x < pivot)
  const mid = arr.filter(x => x === pivot)
  const right = arr.filter(x => x > pivot)
  return [...quickSort(left), ...mid, ...quickSort(right)]
}

const arr = [3, 6, 8, 10, 1, 2, 1]
console.log('原数组:', arr)
console.log('排序后:', quickSort(arr))
`

const questions = [
  {
    q: '冒泡、选择、插入、快排、归并的时间复杂度和特点分别是什么？',
    a: `
      <table border="1" cellpadding="8" style="border-collapse: collapse;">
        <tr><th>算法</th><th>平均</th><th>最坏</th><th>空间</th><th>特点</th></tr>
        <tr><td>冒泡</td><td>O(n²)</td><td>O(n²)</td><td>O(1)</td><td>稳定，简单</td></tr>
        <tr><td>选择</td><td>O(n²)</td><td>O(n²)</td><td>O(1)</td><td>不稳定，每次选最小</td></tr>
        <tr><td>插入</td><td>O(n²)</td><td>O(n²)</td><td>O(1)</td><td>稳定，小规模或近似有序时快</td></tr>
        <tr><td>快排</td><td>O(n log n)</td><td>O(n²)</td><td>O(log n)</td><td>不稳定，原地分区，常用</td></tr>
        <tr><td>归并</td><td>O(n log n)</td><td>O(n log n)</td><td>O(n)</td><td>稳定，需额外空间</td></tr>
      </table>
    `,
  },
  {
    q: 'QuickSort 的实现思路是什么？',
    a: `
      <p><strong>分治思想：</strong></p>
      <ol>
        <li>选基准（pivot）：通常取中间或首/尾元素</li>
        <li>分区：将小于 pivot 的放左边，等于的放中间，大于的放右边</li>
        <li>递归：对左右子数组分别递归快排</li>
        <li>合并：左 + 中间 + 右</li>
      </ol>
      <pre>function quickSort(arr) {
  if (arr.length <= 1) return arr
  const pivot = arr[Math.floor(arr.length / 2)]
  const left = arr.filter(x => x < pivot)
  const mid = arr.filter(x => x === pivot)
  const right = arr.filter(x => x > pivot)
  return [...quickSort(left), ...mid, ...quickSort(right)]
}</pre>
      <p>原地版本通过 swap 实现分区，空间 O(log n)；上述写法简洁但空间 O(n)。</p>
    `,
  },
]
</script>
