<template>
  <QAQuestion
    title="链表与二叉树"
    :questions="questions"
  >
    <template #description>
      <p>本题考察链表反转、二叉树遍历以及 BFS 与 DFS 的区别。</p>
    </template>
  </QAQuestion>
</template>

<script setup lang="ts">
import QAQuestion from '@/components/QAQuestion.vue'

const questions = [
  {
    q: '链表反转的思路是什么？',
    a: `
      <p><strong>迭代法（推荐）：</strong>维护 prev、curr、next 三个指针，遍历时逐个反转指向。</p>
      <pre>function reverseList(head) {
  let prev = null
  let curr = head
  while (curr) {
    const next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  return prev
}</pre>
      <p><strong>递归法：</strong>先递归反转 head.next 之后的链表，再将 head 接到新链尾，head.next 置空。</p>
    `,
  },
  {
    q: '二叉树前序、中序、后序遍历分别是什么？',
    a: `
      <p>以根节点访问顺序区分：</p>
      <ul>
        <li><strong>前序：</strong>根 → 左 → 右</li>
        <li><strong>中序：</strong>左 → 根 → 右（二叉搜索树中序得到有序序列）</li>
        <li><strong>后序：</strong>左 → 右 → 根</li>
      </ul>
      <pre>// 递归实现
function preorder(root) {
  if (!root) return
  console.log(root.val)
  preorder(root.left)
  preorder(root.right)
}</pre>
    `,
  },
  {
    q: 'BFS 和 DFS 有什么区别？',
    a: `
      <p><strong>BFS（广度优先）：</strong>用队列，按层遍历。适合最短路径、层序遍历。</p>
      <p><strong>DFS（深度优先）：</strong>用栈或递归，先深入到底。适合路径存在性、拓扑排序。</p>
      <pre>// BFS 模板
const queue = [root]
while (queue.length) {
  const node = queue.shift()
  // 处理 node
  if (node.left) queue.push(node.left)
  if (node.right) queue.push(node.right)
}</pre>
    `,
  },
]
</script>
