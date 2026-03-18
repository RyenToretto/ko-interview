<template>
  <QuestionCard title="Promise 与 async/await" type="code">
    <template #description>
      <p>请完成以下异步编程任务：</p>
      <ol>
        <li>实现一个 <code>delay</code> 函数，返回 Promise，在指定毫秒后 resolve</li>
        <li>使用 async/await 串行执行多个异步操作</li>
        <li>使用 Promise.all 并行执行多个异步操作</li>
        <li>使用 Promise.race 实现超时控制</li>
      </ol>
    </template>

    <el-card shadow="never">
      <template #header>
        <strong>操作面板</strong>
      </template>
      <el-space wrap>
        <el-button type="primary" @click="runTask1" :loading="loading1">
          任务1: delay 函数
        </el-button>
        <el-button type="success" @click="runTask2" :loading="loading2">
          任务2: 串行执行
        </el-button>
        <el-button type="warning" @click="runTask3" :loading="loading3">
          任务3: Promise.all 并行
        </el-button>
        <el-button type="danger" @click="runTask4" :loading="loading4">
          任务4: Promise.race 超时
        </el-button>
      </el-space>
    </el-card>

    <el-card shadow="never">
      <template #header>
        <strong>执行日志</strong>
        <el-button text type="info" @click="logs = []" style="float: right">清空</el-button>
      </template>
      <div class="promise-demo-logs">
        <p v-if="logs.length === 0" style="color: #909399">点击上方按钮执行任务...</p>
        <p v-for="(log, i) in logs" :key="i" class="promise-demo-log-item">
          <el-tag size="small" type="info">{{ log.time }}</el-tag>
          {{ log.msg }}
        </p>
      </div>
    </el-card>
  </QuestionCard>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import QuestionCard from '@/components/QuestionCard.vue'

const logs = ref<Array<{ time: string; msg: string }>>([])
const loading1 = ref(false)
const loading2 = ref(false)
const loading3 = ref(false)
const loading4 = ref(false)

function log(msg: string) {
  logs.value.push({ time: new Date().toLocaleTimeString(), msg })
}

// TODO 任务1: 实现 delay 函数，接收毫秒数，返回一个 Promise
// 在指定时间后 resolve，resolve 的值为传入的毫秒数
function delay(ms: number): Promise<number> {
  // 请实现
  void ms
  return Promise.resolve(0)
}

async function runTask1() {
  loading1.value = true
  log('开始执行 delay(1000)...')
  const result = await delay(1000)
  log(`delay 完成，返回值: ${result}`)
  loading1.value = false
}

// TODO 任务2: 使用 async/await 串行执行三个 delay
// 依次等待 500ms、800ms、300ms，记录每一步的完成信息
async function runTask2() {
  loading2.value = true
  log('串行执行开始...')

  // 请实现：依次调用 delay(500)、delay(800)、delay(300)
  // 每次 await 完后调用 log() 记录信息

  log('串行执行完成')
  loading2.value = false
}

// TODO 任务3: 使用 Promise.all 并行执行多个 delay
// 同时执行 delay(1000)、delay(800)、delay(1200)
async function runTask3() {
  loading3.value = true
  log('并行执行开始...')

  // 请实现：使用 Promise.all 并行执行，并记录总耗时

  log('并行执行完成')
  loading3.value = false
}

// TODO 任务4: 使用 Promise.race 实现超时控制
// 如果 delay(2000) 超过 1000ms 没返回，则报超时
async function runTask4() {
  loading4.value = true
  log('超时控制测试开始...')

  // 请实现：使用 Promise.race 竞争 delay(2000) 和超时 Promise

  log('超时控制测试完成')
  loading4.value = false
}

void delay
</script>

<style scoped>
.promise-demo-logs {
  max-height: 300px;
  overflow-y: auto;
}

.promise-demo-log-item {
  padding: 4px 0;
  font-size: 14px;
  line-height: 1.6;
}
</style>
