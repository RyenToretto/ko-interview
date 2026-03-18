<template>
  <QuestionCard title="数组常用方法" type="code">
    <template #description>
      <p>给定以下数据，请使用数组方法完成每个任务：</p>
      <pre>const users = [
  { name: '张三', age: 25, score: 88 },
  { name: '李四', age: 30, score: 72 },
  { name: '王五', age: 22, score: 95 },
  { name: '赵六', age: 28, score: 60 },
  { name: '孙七', age: 35, score: 83 },
]</pre>
    </template>

    <el-card shadow="never">
      <template #header>
        <strong>任务区域</strong> — 请在 script 中的 TODO 处编写代码，结果会实时显示
      </template>

      <el-descriptions :column="1" border>
        <el-descriptions-item label="任务1: filter — 筛选 age > 25 的用户">
          {{ task1Result }}
        </el-descriptions-item>
        <el-descriptions-item label="任务2: map — 提取所有用户名称数组">
          {{ task2Result }}
        </el-descriptions-item>
        <el-descriptions-item label="任务3: reduce — 计算所有用户的平均分">
          {{ task3Result }}
        </el-descriptions-item>
        <el-descriptions-item label="任务4: find — 找到名字叫'王五'的用户">
          {{ task4Result }}
        </el-descriptions-item>
        <el-descriptions-item label="任务5: some — 是否存在不及格(score < 70)的用户">
          {{ task5Result }}
        </el-descriptions-item>
        <el-descriptions-item label="任务6: every — 是否所有用户都已成年(age >= 18)">
          {{ task6Result }}
        </el-descriptions-item>
        <el-descriptions-item label="任务7: sort — 按分数从高到低排序">
          {{ task7Result }}
        </el-descriptions-item>
      </el-descriptions>
    </el-card>
  </QuestionCard>
</template>

<script setup lang="ts">
import QuestionCard from '@/components/QuestionCard.vue'

const users = [
  { name: '张三', age: 25, score: 88 },
  { name: '李四', age: 30, score: 72 },
  { name: '王五', age: 22, score: 95 },
  { name: '赵六', age: 28, score: 60 },
  { name: '孙七', age: 35, score: 83 },
]

// TODO 任务1: 使用 filter 筛选 age > 25 的用户
const task1Result = JSON.stringify(/* 在此编写 */'请实现')

// TODO 任务2: 使用 map 提取所有用户名称数组
const task2Result = JSON.stringify(/* 在此编写 */'请实现')

// TODO 任务3: 使用 reduce 计算所有用户的平均分
const task3Result = /* 在此编写 */'请实现'

// TODO 任务4: 使用 find 找到名字叫'王五'的用户
const task4Result = JSON.stringify(/* 在此编写 */'请实现')

// TODO 任务5: 使用 some 判断是否存在不及格(score < 70)的用户
const task5Result = /* 在此编写 */'请实现'

// TODO 任务6: 使用 every 判断是否所有用户都已成年(age >= 18)
const task6Result = /* 在此编写 */'请实现'

// TODO 任务7: 使用 sort 按分数从高到低排序（注意不要修改原数组）
const task7Result = JSON.stringify(/* 在此编写 */'请实现')

void users
</script>
