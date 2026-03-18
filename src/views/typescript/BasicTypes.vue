<template>
  <QuestionCard title="基础类型与接口" type="code">
    <template #description>
      <p>请完成以下 TypeScript 类型定义任务：</p>
      <ol>
        <li>定义 <code>interface</code> 和 <code>type</code>，描述用户和产品数据结构</li>
        <li>使用联合类型和交叉类型</li>
        <li>完成类型安全的函数实现</li>
      </ol>
    </template>

    <el-card shadow="never">
      <template #header><strong>任务区域</strong></template>
      <el-descriptions :column="1" border>
        <el-descriptions-item label="任务1: 用户信息（类型验证）">
          {{ userDisplay }}
        </el-descriptions-item>
        <el-descriptions-item label="任务2: 联合类型（形状面积）">
          {{ shapeResults }}
        </el-descriptions-item>
        <el-descriptions-item label="任务3: 交叉类型（带时间戳的用户）">
          {{ timestampedUserDisplay }}
        </el-descriptions-item>
      </el-descriptions>
    </el-card>

    <el-divider>在线练习区（JS 运行时验证逻辑）</el-divider>
    <CodeRunner
      title="类型逻辑在线验证"
      :initial-code="playgroundCode"
    />
  </QuestionCard>
</template>

<script setup lang="ts">
import QuestionCard from '@/components/QuestionCard.vue'
import CodeRunner from '@/components/CodeRunner.vue'

const playgroundCode = `// 联合类型 + 类型收窄的 JS 运行时等价
function getArea(shape) {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2
    case 'rectangle':
      return shape.width * shape.height
    case 'triangle':
      return (shape.base * shape.height) / 2
  }
}

const shapes = [
  { kind: 'circle', radius: 5 },
  { kind: 'rectangle', width: 4, height: 6 },
  { kind: 'triangle', base: 3, height: 8 },
]

shapes.forEach(s => {
  console.log(s.kind + ':', getArea(s).toFixed(2))
})
`

// ========== 任务1: 定义接口 ==========
// TODO: 定义 User 接口，包含以下字段：
// - id: number
// - name: string
// - email: string
// - age?: number (可选)
// - role: 'admin' | 'user' | 'guest'

interface User {
  // 请实现
  [key: string]: any
}

const user: User = {
  id: 1,
  name: '张三',
  email: 'zhangsan@example.com',
  role: 'admin',
}

const userDisplay = JSON.stringify(user)

// ========== 任务2: 联合类型 ==========
// TODO: 定义 Shape 联合类型
// Circle: { kind: 'circle', radius: number }
// Rectangle: { kind: 'rectangle', width: number, height: number }
// Triangle: { kind: 'triangle', base: number, height: number }

type Circle = { kind: 'circle'; radius: number }
type Rectangle = { kind: 'rectangle'; width: number; height: number }
type Triangle = { kind: 'triangle'; base: number; height: number }
type Shape = Circle | Rectangle | Triangle

// TODO: 实现 getArea 函数，根据 shape.kind 计算面积
// 使用类型收窄（switch 或 if 判断 kind）
function getArea(shape: Shape): number {
  // 请实现
  void shape
  return 0
}

const shapes: Shape[] = [
  { kind: 'circle', radius: 5 },
  { kind: 'rectangle', width: 4, height: 6 },
  { kind: 'triangle', base: 3, height: 8 },
]

const shapeResults = shapes
  .map((s) => `${s.kind}: ${getArea(s).toFixed(2)}`)
  .join(' | ')

// ========== 任务3: 交叉类型 ==========
// TODO: 定义 Timestamped 类型（包含 createdAt 和 updatedAt）
// 然后用交叉类型定义 TimestampedUser = User & Timestamped

type Timestamped = {
  // 请实现
  [key: string]: any
}

type TimestampedUser = User & Timestamped

const timestampedUser: TimestampedUser = {
  ...user,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}

const timestampedUserDisplay = JSON.stringify(timestampedUser)
</script>
