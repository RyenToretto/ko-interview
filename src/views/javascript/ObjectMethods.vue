<template>
  <QuestionCard title="对象常用方法" type="code">
    <template #description>
      <p>给定以下对象，请使用 Object 的静态方法和展开运算符完成每个任务：</p>
      <pre>const person = { name: '张三', age: 25, city: '北京' }
const job = { title: '前端工程师', company: 'ABC公司' }</pre>
    </template>

    <el-card shadow="never">
      <template #header>
        <strong>任务区域</strong> — 请在 script 中的 TODO 处编写代码
      </template>

      <el-descriptions :column="1" border>
        <el-descriptions-item label="任务1: Object.keys — 获取 person 的所有键">
          {{ task1Result }}
        </el-descriptions-item>
        <el-descriptions-item label="任务2: Object.values — 获取 person 的所有值">
          {{ task2Result }}
        </el-descriptions-item>
        <el-descriptions-item label="任务3: Object.entries — 将 person 转为键值对数组">
          {{ task3Result }}
        </el-descriptions-item>
        <el-descriptions-item label="任务4: 展开运算符 — 合并 person 和 job">
          {{ task4Result }}
        </el-descriptions-item>
        <el-descriptions-item label="任务5: 解构赋值 — 从 person 中解构出 name 和 age">
          {{ task5Result }}
        </el-descriptions-item>
        <el-descriptions-item label="任务6: Object.freeze — 冻结对象并尝试修改">
          {{ task6Result }}
        </el-descriptions-item>
      </el-descriptions>
    </el-card>

    <el-divider>在线练习区</el-divider>
    <CodeRunner
      title="对象方法在线练习"
      :initial-code="playgroundCode"
    />
  </QuestionCard>
</template>

<script setup lang="ts">
import QuestionCard from '@/components/QuestionCard.vue'
import CodeRunner from '@/components/CodeRunner.vue'

const playgroundCode = `const person = { name: '张三', age: 25, city: '北京' }
const job = { title: '前端工程师', company: 'ABC公司' }

// Object.keys / values / entries
console.log('keys:', Object.keys(person))
console.log('values:', Object.values(person))
console.log('entries:', Object.entries(person))

// 展开运算符合并
const merged = { ...person, ...job }
console.log('merged:', merged)

// 解构赋值
const { name, age } = person
console.log('解构:', name, age)

// Object.freeze
const frozen = Object.freeze({ x: 1 })
frozen.x = 2  // 静默失败
console.log('freeze后:', frozen.x)
`

const person = { name: '张三', age: 25, city: '北京' }
const job = { title: '前端工程师', company: 'ABC公司' }

// TODO 任务1: 使用 Object.keys 获取 person 的所有键
const task1Result = JSON.stringify(/* 在此编写 */'请实现')

// TODO 任务2: 使用 Object.values 获取 person 的所有值
const task2Result = JSON.stringify(/* 在此编写 */'请实现')

// TODO 任务3: 使用 Object.entries 将 person 转为键值对数组
const task3Result = JSON.stringify(/* 在此编写 */'请实现')

// TODO 任务4: 使用展开运算符合并 person 和 job 为一个新对象
const task4Result = JSON.stringify(/* 在此编写 */'请实现')

// TODO 任务5: 使用解构赋值从 person 中取出 name 和 age，并展示
const task5Result = /* 在此编写 */'请实现'

// TODO 任务6: 使用 Object.freeze 冻结对象，尝试修改并输出结果
const task6Result = /* 在此编写 */'请实现'

void person
void job
</script>
