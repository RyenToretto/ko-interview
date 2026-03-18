<template>
  <QuestionCard title="CSS 单位 rem/em/px/vw/vh" type="code">
    <template #description>
      <p>请理解不同 CSS 单位的含义和区别，并在在线练习区验证效果。</p>
    </template>

    <el-card shadow="never">
      <template #header><strong>单位对比表</strong></template>
      <el-descriptions :column="1" border>
        <el-descriptions-item label="px（像素）">
          {{ answers.px }}
        </el-descriptions-item>
        <el-descriptions-item label="em（相对父元素）">
          {{ answers.em }}
        </el-descriptions-item>
        <el-descriptions-item label="rem（相对根元素）">
          {{ answers.rem }}
        </el-descriptions-item>
        <el-descriptions-item label="vw（视口宽度%）">
          {{ answers.vw }}
        </el-descriptions-item>
        <el-descriptions-item label="vh（视口高度%）">
          {{ answers.vh }}
        </el-descriptions-item>
        <el-descriptions-item label="%（相对父元素）">
          {{ answers.percent }}
        </el-descriptions-item>
      </el-descriptions>
    </el-card>

    <el-divider>在线练习区</el-divider>
    <CssRunner
      title="CSS 单位对比在线练习"
      :html="previewHtml"
      :initial-css="initialCss"
    />
  </QuestionCard>
</template>

<script setup lang="ts">
import QuestionCard from '@/components/QuestionCard.vue'
import CssRunner from '@/components/CssRunner.vue'

// TODO: 请填写各单位的含义
const answers = {
  px: '请填写...',
  em: '请填写...',
  rem: '请填写...',
  vw: '请填写...',
  vh: '请填写...',
  percent: '请填写...',
}

const previewHtml = `<div class="demo">
  <p class="px-demo">我是 16px 字体</p>
  <p class="em-demo">我是 1.5em 字体（相对父元素）</p>
  <p class="rem-demo">我是 1.2rem 字体（相对根元素）</p>
  <div class="vw-demo">我的宽度是 50vw</div>
  <div class="vh-demo">我的高度是 20vh</div>
  <div class="percent-parent">
    <div class="percent-child">我是父元素 50% 宽</div>
  </div>
</div>`

const initialCss = `html { font-size: 16px; }

.demo {
  font-size: 14px;
  padding: 8px;
}

.px-demo {
  font-size: 16px;
  color: #409eff;
  margin-bottom: 4px;
}

.em-demo {
  /* 1.5em = 1.5 * 父元素 14px = 21px */
  font-size: 1.5em;
  color: #67c23a;
  margin-bottom: 4px;
}

.rem-demo {
  /* 1.2rem = 1.2 * 根元素 16px = 19.2px */
  font-size: 1.2rem;
  color: #e6a23c;
  margin-bottom: 8px;
}

.vw-demo {
  width: 50vw;
  background: #409eff;
  color: #fff;
  padding: 8px;
  border-radius: 4px;
  margin-bottom: 8px;
  text-align: center;
}

.vh-demo {
  height: 20vh;
  background: #67c23a;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin-bottom: 8px;
}

.percent-parent {
  width: 300px;
  background: #f0f0f0;
  padding: 8px;
  border-radius: 4px;
}

.percent-child {
  width: 50%;
  background: #f56c6c;
  color: #fff;
  padding: 8px;
  border-radius: 4px;
  text-align: center;
}`
</script>
