<template>
  <QuestionCard title="扁平数组转树形结构" type="code">
    <template #description>
      <p>给定以下类型定义和扁平数组，请实现 <code>flatToTree</code> 函数，将扁平数据转为树形结构。</p>
      <p><strong>要求：</strong>使用 TypeScript 实现，不允许使用 <code>any</code> 类型。</p>
      <CodeBlock :code="typeDefinition" lang="typescript" />
    </template>

    <el-card shadow="never">
      <template #header><strong>测试用例</strong></template>
      <el-button type="primary" @click="runTests">运行测试</el-button>
      <el-descriptions :column="1" border style="margin-top: 12px">
        <el-descriptions-item
          v-for="(t, i) in testResults"
          :key="i"
          :label="t.label"
        >
          <el-tag :type="t.pass ? 'success' : 'danger'">
            {{ t.pass ? '通过' : '未通过' }}
          </el-tag>
          <span style="margin-left: 8px">{{ t.detail }}</span>
        </el-descriptions-item>
      </el-descriptions>
    </el-card>

    <el-card shadow="never">
      <template #header><strong>Case 1 期望输出</strong></template>
      <CodeBlock :code="case1Expected" />
    </el-card>

    <el-card shadow="never">
      <template #header><strong>Case 2 期望输出</strong></template>
      <CodeBlock :code="case2Expected" />
    </el-card>

    <el-divider>在线练习区</el-divider>
    <CodeRunner
      title="扁平转树在线验证（JS 运行时）"
      :initial-code="playgroundCode"
    />
  </QuestionCard>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import QuestionCard from '@/components/QuestionCard.vue'
import CodeBlock from '@/components/CodeBlock.vue'
import CodeRunner from '@/components/CodeRunner.vue'

const typeDefinition = `type CustomNode = {
  id: number;
  parentId: number | null;
  name?: string;
};

type TreeNode = CustomNode & {
  children: TreeNode[];
};

function flatToTree(list: CustomNode[]): TreeNode[] {
  // TODO: 请实现，不允许使用 any
}`

const case1Expected = `// Case 1 输入
const input = [
  { id: 1, name: "A", parentId: null },
  { id: 2, name: "B", parentId: 1 },
  { id: 3, name: "C", parentId: 1 },
  { id: 4, name: "D", parentId: 2 },
  { id: 5, name: "E", parentId: 2 },
  { id: 6, name: "F", parentId: 3 }
];

// 期望输出
[{
  id: 1, name: "A", parentId: null,
  children: [
    { id: 2, name: "B", parentId: 1, children: [
      { id: 4, name: "D", parentId: 2, children: [] },
      { id: 5, name: "E", parentId: 2, children: [] }
    ]},
    { id: 3, name: "C", parentId: 1, children: [
      { id: 6, name: "F", parentId: 3, children: [] }
    ]}
  ]
}]`

const case2Expected = `// Case 2 输入（链式结构）
const input = [
  { id: 1, parentId: null },
  { id: 2, parentId: 1 },
  { id: 3, parentId: 2 },
  { id: 4, parentId: 3 }
];

// 期望输出
[{
  id: 1, parentId: null,
  children: [{
    id: 2, parentId: 1,
    children: [{
      id: 3, parentId: 2,
      children: [{
        id: 4, parentId: 3,
        children: []
      }]
    }]
  }]
}]`

// ==========================================
// 类型定义
// ==========================================
type CustomNode = {
  id: number
  parentId: number | null
  name?: string
}

type TreeNode = CustomNode & {
  children: TreeNode[]
}

// ==========================================
// TODO: 请实现 flatToTree 函数
// 要求：不使用 any 类型
// ==========================================
function flatToTree(list: CustomNode[]): TreeNode[] {
  // 请实现
  void list
  return []
}

// ==========================================
// 测试数据
// ==========================================
const caseA: CustomNode[] = [
  { id: 1, name: 'A', parentId: null },
  { id: 2, name: 'B', parentId: 1 },
  { id: 3, name: 'C', parentId: 1 },
  { id: 4, name: 'D', parentId: 2 },
  { id: 5, name: 'E', parentId: 2 },
  { id: 6, name: 'F', parentId: 3 },
]

const caseB: CustomNode[] = [
  { id: 1, parentId: null },
  { id: 2, parentId: 1 },
  { id: 3, parentId: 2 },
  { id: 4, parentId: 3 },
]

// 期望结果
const expectedA: TreeNode[] = [
  {
    id: 1, name: 'A', parentId: null,
    children: [
      {
        id: 2, name: 'B', parentId: 1,
        children: [
          { id: 4, name: 'D', parentId: 2, children: [] },
          { id: 5, name: 'E', parentId: 2, children: [] },
        ],
      },
      {
        id: 3, name: 'C', parentId: 1,
        children: [
          { id: 6, name: 'F', parentId: 3, children: [] },
        ],
      },
    ],
  },
]

const expectedB: TreeNode[] = [
  {
    id: 1, parentId: null,
    children: [{
      id: 2, parentId: 1,
      children: [{
        id: 3, parentId: 2,
        children: [{
          id: 4, parentId: 3,
          children: [],
        }],
      }],
    }],
  },
]

interface TestResult {
  label: string
  pass: boolean
  detail: string
}

const testResults = ref<TestResult[]>([])

function deepEqual(a: unknown, b: unknown): boolean {
  return JSON.stringify(a) === JSON.stringify(b)
}

function runTests() {
  const results: TestResult[] = []

  const resultA = flatToTree(caseA)
  results.push({
    label: 'Case 1: 多层嵌套（A→B→D/E, A→C→F）',
    pass: deepEqual(resultA, expectedA),
    detail: deepEqual(resultA, expectedA)
      ? '结构正确，所有节点归位'
      : `不匹配。得到 ${resultA.length} 个根节点，期望 1 个`,
  })

  const resultB = flatToTree(caseB)
  results.push({
    label: 'Case 2: 链式结构（1→2→3→4）',
    pass: deepEqual(resultB, expectedB),
    detail: deepEqual(resultB, expectedB)
      ? '链式嵌套正确'
      : `不匹配。深度: ${JSON.stringify(resultB).split('children').length - 1}`,
  })

  const resultEmpty = flatToTree([])
  results.push({
    label: 'Case 3: 空数组',
    pass: deepEqual(resultEmpty, []),
    detail: deepEqual(resultEmpty, []) ? '正确返回空数组' : `得到 ${JSON.stringify(resultEmpty)}`,
  })

  const singleNode: CustomNode[] = [{ id: 1, parentId: null }]
  const resultSingle = flatToTree(singleNode)
  results.push({
    label: 'Case 4: 单节点',
    pass: resultSingle.length === 1 && resultSingle[0].children.length === 0,
    detail: resultSingle.length === 1 ? '单根节点，无子节点' : `根节点数: ${resultSingle.length}`,
  })

  testResults.value = results
}

const playgroundCode = `// 扁平数组转树形结构
function flatToTree(list) {
  const map = new Map()
  const roots = []

  // 第一遍：创建所有节点（带 children）
  for (const item of list) {
    map.set(item.id, { ...item, children: [] })
  }

  // 第二遍：建立父子关系
  for (const item of list) {
    const node = map.get(item.id)
    if (item.parentId === null) {
      roots.push(node)
    } else {
      const parent = map.get(item.parentId)
      if (parent) parent.children.push(node)
    }
  }

  return roots
}

// 测试 Case 1
const caseA = [
  { id: 1, name: "A", parentId: null },
  { id: 2, name: "B", parentId: 1 },
  { id: 3, name: "C", parentId: 1 },
  { id: 4, name: "D", parentId: 2 },
  { id: 5, name: "E", parentId: 2 },
  { id: 6, name: "F", parentId: 3 }
]
console.log('Case 1:', JSON.stringify(flatToTree(caseA), null, 2))

// 测试 Case 2
const caseB = [
  { id: 1, parentId: null },
  { id: 2, parentId: 1 },
  { id: 3, parentId: 2 },
  { id: 4, parentId: 3 }
]
console.log('Case 2:', JSON.stringify(flatToTree(caseB), null, 2))
`
</script>
