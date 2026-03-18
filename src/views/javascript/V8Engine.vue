<template>
  <QAQuestion
    title="V8 执行机制"
    :questions="questions"
  >
    <template #description>
      <p>本题考察对 V8 引擎如何解析和执行 JavaScript 代码的理解。</p>
    </template>
  </QAQuestion>
</template>

<script setup lang="ts">
import QAQuestion from '@/components/QAQuestion.vue'

const questions = [
  {
    q: 'V8 引擎执行 JS 代码的完整流程是什么？',
    a: `
      <p><strong>V8 执行管线：</strong></p>
      <pre>JS 源码 → 解析器(Parser) → AST → 解释器(Ignition) → 字节码(Bytecode)
                                                         ↓
                                              热点代码检测(Profiler)
                                                         ↓
                                              编译器(TurboFan) → 机器码(Optimized Code)</pre>
      <ol>
        <li><strong>词法分析 + 语法分析</strong>：将源码解析为 AST（抽象语法树）</li>
        <li><strong>Ignition 解释器</strong>：将 AST 编译为字节码（Bytecode），逐行解释执行</li>
        <li><strong>Profiler 热点检测</strong>：收集函数调用频率和类型反馈信息</li>
        <li><strong>TurboFan 编译器</strong>：对热点函数进行 JIT 编译，生成优化后的机器码</li>
        <li><strong>去优化（Deoptimization）</strong>：如果类型假设失败，回退到字节码重新执行</li>
      </ol>
    `,
  },
  {
    q: '什么是 JIT 编译？为什么比纯解释快？',
    a: `
      <p><strong>JIT（Just-In-Time）即时编译</strong>：在运行时将热点代码编译为机器码。</p>
      <p><strong>对比三种执行方式：</strong></p>
      <table border="1" cellpadding="6" style="border-collapse: collapse; width: 100%">
        <tr><th>方式</th><th>启动速度</th><th>运行速度</th><th>代表</th></tr>
        <tr><td>纯解释</td><td>快（逐行执行）</td><td>慢（每次都要翻译）</td><td>早期 JS 引擎</td></tr>
        <tr><td>AOT 编译</td><td>慢（先全部编译）</td><td>快（直接执行机器码）</td><td>C/C++/Rust</td></tr>
        <tr><td>JIT 编译</td><td>较快（先解释执行）</td><td>热点代码接近 AOT</td><td>V8/SpiderMonkey</td></tr>
      </table>
      <p>V8 的策略：<strong>先用 Ignition 快速启动</strong>，发现热点函数后用 <strong>TurboFan 编译优化</strong>，兼顾启动速度和运行性能。</p>
    `,
  },
  {
    q: '什么是隐藏类（Hidden Class）？为什么对性能很重要？',
    a: `
      <p>JS 对象是动态的（可随时添加属性），V8 通过<strong>隐藏类</strong>（也叫 Shape/Map）来优化属性访问。</p>
      <p><strong>原理</strong>：V8 为每种对象结构创建一个隐藏类，记录属性的偏移量。相同结构的对象共享隐藏类，属性访问可以直接用偏移量（类似 C struct）。</p>
      <p><strong>性能陷阱</strong>：</p>
      <pre>// 好 — 属性顺序一致，共享隐藏类
const a = { x: 1, y: 2 }
const b = { x: 3, y: 4 }

// 差 — 属性顺序不同，创建不同隐藏类
const c = { x: 1, y: 2 }
const d = { y: 4, x: 3 }  // 不同的隐藏类！

// 差 — 动态添加属性导致隐藏类转换
const e = {}
e.x = 1  // 隐藏类 H0 → H1
e.y = 2  // H1 → H2（多次转换，性能损耗）</pre>
      <p><strong>建议</strong>：在构造函数/初始化时一次性定义所有属性，保持属性顺序一致。</p>
    `,
  },
  {
    q: 'JS 代码执行时的执行上下文（Execution Context）是什么？',
    a: `
      <p><strong>执行上下文</strong>是 JS 代码执行时的环境，包含三部分：</p>
      <ul>
        <li><strong>变量环境（Variable Environment）</strong>：var 声明的变量和函数声明</li>
        <li><strong>词法环境（Lexical Environment）</strong>：let/const 声明的变量、块级作用域</li>
        <li><strong>this 绑定（This Binding）</strong>：当前 this 的值</li>
      </ul>
      <p><strong>三种执行上下文：</strong></p>
      <ol>
        <li><strong>全局执行上下文</strong>：程序启动时创建，全局唯一</li>
        <li><strong>函数执行上下文</strong>：每次调用函数时创建</li>
        <li><strong>eval 执行上下文</strong>：执行 eval 时创建（不推荐使用）</li>
      </ol>
      <p>执行上下文通过<strong>调用栈（Call Stack）</strong>管理，后进先出。</p>
    `,
  },
]
</script>
