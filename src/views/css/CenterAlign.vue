<template>
  <QuestionCard title="水平垂直居中" type="code">
    <template #description>
      <p>请用尽可能多的方式，实现让子元素在父容器中 <strong>水平垂直居中</strong>。</p>
      <p>每种方式写在对应的容器中，修改下方 style 即可查看效果。</p>
      <p>常见方式：flex、grid、absolute + transform、absolute + margin、table-cell 等。</p>
    </template>

    <h3>方式一：Flexbox</h3>
    <div class="center-demo-box center-demo-flex">
      <div class="center-demo-inner">Flex 居中</div>
    </div>

    <h3>方式二：Grid</h3>
    <div class="center-demo-box center-demo-grid">
      <div class="center-demo-inner">Grid 居中</div>
    </div>

    <h3>方式三：absolute + transform</h3>
    <div class="center-demo-box center-demo-absolute">
      <div class="center-demo-inner">Absolute 居中</div>
    </div>

    <h3>方式四：请自行实现更多方式</h3>
    <div class="center-demo-box center-demo-custom">
      <!-- TODO: 请在此处添加需要居中的子元素，并在 style 中编写居中样式 -->
    </div>

    <el-divider>在线练习区</el-divider>
    <CssRunner
      title="水平垂直居中在线练习"
      :html="previewHtml"
      :initial-css="initialCss"
    />
  </QuestionCard>
</template>

<script setup lang="ts">
import QuestionCard from '@/components/QuestionCard.vue'
import CssRunner from '@/components/CssRunner.vue'

const previewHtml = `<div class="container">
  <div class="child">居中我</div>
</div>`

const initialCss = `.container {
  width: 100%;
  height: 240px;
  border: 2px dashed #409eff;
  border-radius: 8px;
  background: #f0f9ff;

  /* TODO: 请写出居中方式，例如 Flex: */
  display: flex;
  justify-content: center;
  align-items: center;
}

.child {
  width: 120px;
  height: 60px;
  background: #409eff;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  font-size: 14px;
}`
</script>

<style scoped>
.center-demo-box {
  width: 100%;
  height: 200px;
  border: 2px dashed #409eff;
  border-radius: 8px;
  background: #f0f9ff;
  position: relative;
}

.center-demo-inner {
  width: 120px;
  height: 60px;
  background: #409eff;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  font-size: 14px;
}

/* ========== 方式一：Flexbox ========== */
/* TODO: 请实现 flex 居中 */
.center-demo-flex {
  /* 提示：使用 display: flex 配合对齐属性 */
}

/* ========== 方式二：Grid ========== */
/* TODO: 请实现 grid 居中 */
.center-demo-grid {
  /* 提示：使用 display: grid 配合 place-items */
}

/* ========== 方式三：absolute + transform ========== */
/* TODO: 请实现 absolute 定位居中 */
.center-demo-absolute {
  /* 父容器已经是 position: relative */
}

/* TODO: 子元素配合定位 */

/* ========== 方式四：自定义实现 ========== */
/* TODO: 请用其他方式实现居中 */
.center-demo-custom {
  /* 在此编写你的居中方案 */
}
</style>
