<template>
  <QuestionCard title="ref 与 reactive" type="code">
    <template #description>
      <p>请完成以下响应式数据的操作任务：</p>
      <ol>
        <li>使用 <code>ref</code> 创建基本类型响应式数据</li>
        <li>使用 <code>reactive</code> 创建对象类型响应式数据</li>
        <li>使用 <code>toRefs</code> 解构 reactive 对象并保持响应式</li>
      </ol>
    </template>

    <el-card shadow="never">
      <template #header><strong>任务1: ref 基本使用</strong></template>
      <p>当前计数: <el-tag size="large" type="primary">{{ count }}</el-tag></p>
      <el-space style="margin-top: 12px">
        <el-button type="primary" @click="increment">+1</el-button>
        <el-button type="danger" @click="decrement">-1</el-button>
        <el-button @click="reset">重置</el-button>
      </el-space>
    </el-card>

    <el-card shadow="never">
      <template #header><strong>任务2: reactive 对象操作</strong></template>
      <el-form label-width="80px">
        <el-form-item label="姓名">
          <el-input v-model="userInfo.name" placeholder="请输入姓名" />
        </el-form-item>
        <el-form-item label="年龄">
          <el-input-number v-model="userInfo.age" :min="0" :max="150" />
        </el-form-item>
        <el-form-item label="爱好">
          <el-tag
            v-for="(hobby, index) in userInfo.hobbies"
            :key="index"
            closable
            style="margin-right: 8px"
            @close="removeHobby(index)"
          >
            {{ hobby }}
          </el-tag>
          <el-input
            v-model="newHobby"
            size="small"
            style="width: 120px"
            placeholder="添加爱好"
            @keyup.enter="addHobby"
          />
        </el-form-item>
      </el-form>
      <el-tag type="info">实时数据: {{ JSON.stringify(userInfo) }}</el-tag>
    </el-card>

    <el-card shadow="never">
      <template #header><strong>任务3: toRefs 解构</strong></template>
      <p style="margin-bottom: 12px">
        使用 toRefs 解构 reactive 对象，保持响应式绑定
      </p>
      <p>姓名: <el-tag>{{ name }}</el-tag></p>
      <p>年龄: <el-tag>{{ age }}</el-tag></p>
      <p style="color: #909399; margin-top: 8px">
        修改上方任务2的表单，此处的值也应该同步变化
      </p>
    </el-card>
  </QuestionCard>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs } from 'vue'
import QuestionCard from '@/components/QuestionCard.vue'

// TODO 任务1: 使用 ref 创建响应式计数器
// 实现 increment(+1)、decrement(-1)、reset(归零) 方法
const count = ref(0)

function increment() {
  // TODO: 实现 +1
}

function decrement() {
  // TODO: 实现 -1
}

function reset() {
  // TODO: 实现归零
}

// TODO 任务2: 使用 reactive 创建用户信息对象
// 包含 name(string)、age(number)、hobbies(string[])
const userInfo = reactive({
  name: '',
  age: 0,
  hobbies: [] as string[],
})

const newHobby = ref('')

function addHobby() {
  // TODO: 将 newHobby 添加到 userInfo.hobbies 中
}

function removeHobby(index: number) {
  // TODO: 从 userInfo.hobbies 中移除指定索引的爱好
  void index
}

// TODO 任务3: 使用 toRefs 解构 userInfo 对象
// 使得 name 和 age 保持响应式
const { name, age } = toRefs(userInfo)
</script>
