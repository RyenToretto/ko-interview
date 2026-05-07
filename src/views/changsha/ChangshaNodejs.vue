<template>
  <QAQuestion title="Node.js 基础与 RESTful API" :questions="questions">
    <template #description>
      <p>长沙中小公司倾向招聘前后端兼顾人才，45% JD 中要求 Node.js 基础，60% 要求 RESTful API 对接经验。</p>
    </template>
  </QAQuestion>
</template>

<script setup lang="ts">
import QAQuestion from '@/components/QAQuestion.vue'

const questions = [
  {
    q: 'Node.js 的特点是什么？为什么适合做高并发 IO 密集型应用？',
    a: `
      <p><strong>Node.js 核心特点：</strong></p>
      <ul>
        <li><strong>单线程 + 事件循环</strong>：基于 V8 引擎和 libuv，主线程不阻塞</li>
        <li><strong>非阻塞 IO</strong>：所有 IO 操作（文件/网络/数据库）异步执行</li>
        <li><strong>事件驱动</strong>：基于 EventEmitter，回调/Promise/async-await</li>
        <li><strong>NPM 生态</strong>：全球最大的开源包管理生态</li>
        <li><strong>跨平台</strong>：Windows/Mac/Linux 通用</li>
      </ul>
      <p><strong>适合 IO 密集型的原因：</strong>单线程不需要为每个请求开线程（避免线程切换开销），所有 IO 异步执行不阻塞，适合大量并发请求但每个请求计算量小的场景（如 API 服务、实时通讯）。</p>
      <p><strong>不适合 CPU 密集型</strong>：长时间计算会阻塞主线程，需用 worker_threads 或 cluster 模块。</p>
    `,
  },
  {
    q: 'Express 和 Koa 有什么区别？',
    a: `
      <table border="1" cellpadding="6" style="border-collapse: collapse; width: 100%">
        <tr><th>对比项</th><th>Express</th><th>Koa</th></tr>
        <tr><td>作者</td><td>TJ Holowaychuk</td><td>同一团队（Koa 是 Express 团队的下一代）</td></tr>
        <tr><td>异步</td><td>回调 + 中间件</td><td>async/await + 中间件</td></tr>
        <tr><td>中间件</td><td>线性执行</td><td>洋葱圈模型（双向）</td></tr>
        <tr><td>错误处理</td><td>需要 try-catch + next(err)</td><td>原生 try-catch async/await</td></tr>
        <tr><td>体积</td><td>较大（内置路由、模板等）</td><td>极小（核心只有中间件机制）</td></tr>
        <tr><td>学习成本</td><td>简单上手</td><td>需要理解洋葱圈</td></tr>
      </table>
      <p><strong>Koa 洋葱圈模型示例：</strong></p>
      <pre>app.use(async (ctx, next) => {
  console.log('1 in')
  await next()      // 进入下一个中间件
  console.log('1 out')
})
app.use(async (ctx, next) => {
  console.log('2')
})
// 输出: 1 in → 2 → 1 out</pre>
    `,
  },
  {
    q: 'RESTful API 的设计规范是什么？',
    a: `
      <p><strong>核心原则：</strong></p>
      <ul>
        <li>使用<strong>资源</strong>命名（名词复数），不用动词</li>
        <li>使用 <strong>HTTP 方法</strong>表达操作（GET/POST/PUT/PATCH/DELETE）</li>
        <li>使用 <strong>HTTP 状态码</strong>表达结果（200/201/204/400/401/403/404/500）</li>
        <li>使用<strong>版本号</strong>（/api/v1/...）</li>
        <li>使用 <strong>JSON</strong> 作为数据格式</li>
      </ul>
      <p><strong>示例：</strong></p>
      <pre>GET    /api/v1/users          # 获取用户列表
GET    /api/v1/users/:id      # 获取单个用户
POST   /api/v1/users          # 创建用户
PUT    /api/v1/users/:id      # 完整更新
PATCH  /api/v1/users/:id      # 部分更新
DELETE /api/v1/users/:id      # 删除用户

GET    /api/v1/users/:id/posts    # 用户下的文章（嵌套资源）
GET    /api/v1/users?page=1&limit=10&sort=-created_at  # 查询参数</pre>
    `,
  },
  {
    q: '什么是中间件？Express 中间件的执行机制是什么？',
    a: `
      <p><strong>中间件</strong>：在请求和响应之间执行的函数，可以修改 req/res 或终止响应。</p>
      <pre>// 中间件签名
function middleware(req, res, next) {
  // 处理逻辑
  next()  // 调用 next() 继续下一个中间件，否则请求挂起
}

// 应用中间件
app.use(express.json())              // 全局
app.use('/api', authMiddleware)      // 路径级
app.get('/users', logMiddleware, handler)  // 路由级</pre>
      <p><strong>常见中间件类型：</strong></p>
      <ul>
        <li>应用级中间件（app.use）</li>
        <li>路由级中间件（router.use）</li>
        <li>错误处理中间件（4 个参数：err, req, res, next）</li>
        <li>内置中间件（express.json、express.static）</li>
        <li>第三方中间件（cors、helmet、morgan）</li>
      </ul>
    `,
  },
  {
    q: 'Node.js 常用的核心模块有哪些？',
    a: `
      <ul>
        <li><strong>fs</strong>：文件系统操作（readFile/writeFile/createReadStream）</li>
        <li><strong>path</strong>：路径处理（join/resolve/extname）</li>
        <li><strong>http / https</strong>：创建服务器</li>
        <li><strong>url</strong>：URL 解析</li>
        <li><strong>crypto</strong>：加密（hash/AES/RSA）</li>
        <li><strong>events</strong>：事件 EventEmitter</li>
        <li><strong>stream</strong>：流（处理大文件、数据传输）</li>
        <li><strong>process</strong>：进程信息和控制</li>
        <li><strong>child_process</strong>：子进程（exec/spawn/fork）</li>
        <li><strong>cluster</strong>：多核进程集群</li>
        <li><strong>worker_threads</strong>：工作线程（处理 CPU 密集型）</li>
      </ul>
    `,
  },
]
</script>
