<template>
  <QuestionCard title="ES6+ 新特性" type="code">
    <template #description>
      <p>请展示以下 ES6+ 新特性的使用，完成每个任务中的 TODO：</p>
      <ul>
        <li>let/const vs var 的区别</li>
        <li>解构赋值（数组 + 对象）</li>
        <li>展开运算符与剩余参数</li>
        <li>模板字符串</li>
        <li>可选链与空值合并</li>
      </ul>
    </template>

    <el-card shadow="never">
      <template #header><strong>任务1: let/const vs var</strong></template>
      <el-button type="primary" @click="testVarLetConst">运行测试</el-button>
      <p style="margin-top: 12px">{{ varResult }}</p>
    </el-card>

    <el-card shadow="never">
      <template #header><strong>任务2: 解构赋值</strong></template>
      <el-descriptions :column="1" border>
        <el-descriptions-item label="数组解构：提取前两个元素和剩余部分">
          {{ task2a }}
        </el-descriptions-item>
        <el-descriptions-item label="对象解构：重命名 + 默认值">
          {{ task2b }}
        </el-descriptions-item>
        <el-descriptions-item label="嵌套解构：提取深层属性">
          {{ task2c }}
        </el-descriptions-item>
      </el-descriptions>
    </el-card>

    <el-card shadow="never">
      <template #header><strong>任务3: 展开运算符与剩余参数</strong></template>
      <el-descriptions :column="1" border>
        <el-descriptions-item label="合并数组">{{ task3a }}</el-descriptions-item>
        <el-descriptions-item label="合并对象（后者覆盖）">{{ task3b }}</el-descriptions-item>
        <el-descriptions-item label="剩余参数求和">{{ task3c }}</el-descriptions-item>
      </el-descriptions>
    </el-card>

    <el-card shadow="never">
      <template #header><strong>任务4: 可选链与空值合并</strong></template>
      <el-descriptions :column="1" border>
        <el-descriptions-item label="安全访问深层属性">{{ task4a }}</el-descriptions-item>
        <el-descriptions-item label="空值合并提供默认值">{{ task4b }}</el-descriptions-item>
      </el-descriptions>
    </el-card>
  </QuestionCard>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import QuestionCard from '@/components/QuestionCard.vue'

// ========== 任务1: let/const vs var ==========
const varResult = ref('')

function testVarLetConst() {
  const results: string[] = []

  // TODO: 用 var 声明的循环变量，setTimeout 后输出什么？
  // 用 let 声明又输出什么？请补全代码并运行

  // var 版本
  const varOutputs: number[] = []
  for (var i = 0; i < 3; i++) {
    setTimeout(() => varOutputs.push(i), 0)
  }

  // let 版本
  const letOutputs: number[] = []
  for (let j = 0; j < 3; j++) {
    setTimeout(() => letOutputs.push(j), 0)
  }

  setTimeout(() => {
    results.push(`var: [${varOutputs}] (全是3，因为var没有块级作用域)`)
    results.push(`let: [${letOutputs}] (0,1,2，let有块级作用域)`)
    varResult.value = results.join(' | ')
  }, 100)
}

// ========== 任务2: 解构赋值 ==========
const colors = ['red', 'green', 'blue', 'yellow', 'purple']
const user = { name: '张三', age: 25, city: '北京' }
const nested = { data: { user: { name: '李四', scores: [90, 85, 92] } } }

// TODO 2a: 从 colors 中解构出前两个元素和剩余部分
// const [first, second, ...rest] = colors
const task2a = '请实现'

// TODO 2b: 从 user 中解构，将 name 重命名为 userName，给 phone 设默认值
// const { name: userName, phone = '未填写' } = user
const task2b = '请实现'

// TODO 2c: 从 nested 中提取 user.name 和 scores 的第一个元素
const task2c = '请实现'

// ========== 任务3: 展开运算符 ==========
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const obj1 = { a: 1, b: 2 }
const obj2 = { b: 3, c: 4 }

// TODO 3a: 合并 arr1 和 arr2
const task3a = JSON.stringify('请实现')

// TODO 3b: 合并 obj1 和 obj2（后者属性覆盖前者）
const task3b = JSON.stringify('请实现')

// TODO 3c: 实现一个使用剩余参数的求和函数
function sum(..._nums: number[]): number {
  // 请实现
  return 0
}
const task3c = `sum(1,2,3,4,5) = ${sum(1, 2, 3, 4, 5)}`

// ========== 任务4: 可选链与空值合并 ==========
const config: any = { db: { host: 'localhost' }, cache: null }

// TODO 4a: 安全访问 config.db.port（不存在时不报错）
const task4a = '请实现'

// TODO 4b: config.cache ?? '默认缓存' 的结果是？与 || 的区别？
const task4b = '请实现'

void colors
void user
void nested
void arr1
void arr2
void obj1
void obj2
void config
</script>
