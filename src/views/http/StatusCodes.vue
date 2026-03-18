<template>
  <QAQuestion
    title="HTTP 状态码与方法"
    :questions="questions"
  >
    <template #description>
      <p>本题考察常见 HTTP 状态码、GET 与 POST 的区别以及 RESTful API 设计规范。</p>
    </template>
  </QAQuestion>
</template>

<script setup lang="ts">
import QAQuestion from '@/components/QAQuestion.vue'

const questions = [
  {
    q: '常见 HTTP 状态码有哪些？分别表示什么？',
    a: `
      <ul>
        <li><strong>200：</strong>成功</li>
        <li><strong>301：</strong>永久重定向，资源已永久迁移</li>
        <li><strong>302：</strong>临时重定向</li>
        <li><strong>304：</strong>协商缓存命中，使用本地缓存</li>
        <li><strong>400：</strong>请求错误，客户端参数有问题</li>
        <li><strong>401：</strong>未认证，需要登录</li>
        <li><strong>403：</strong>禁止访问，无权限</li>
        <li><strong>404：</strong>资源不存在</li>
        <li><strong>500：</strong>服务器内部错误</li>
        <li><strong>502：</strong>网关错误，上游服务不可用</li>
        <li><strong>503：</strong>服务不可用，过载或维护</li>
      </ul>
    `,
  },
  {
    q: 'GET 和 POST 有什么区别？',
    a: `
      <ul>
        <li><strong>语义：</strong>GET 获取资源，POST 提交/创建资源</li>
        <li><strong>参数位置：</strong>GET 在 URL 查询字符串，POST 通常在请求体</li>
        <li><strong>安全性：</strong>GET 参数暴露在 URL，易被缓存、日志记录；POST 相对更安全（但不加密本身）</li>
        <li><strong>幂等性：</strong>GET 幂等，POST 非幂等</li>
        <li><strong>缓存：</strong>GET 可被缓存，POST 一般不被缓存</li>
        <li><strong>长度：</strong>GET 受 URL 长度限制，POST 受服务端限制</li>
      </ul>
    `,
  },
  {
    q: 'RESTful API 设计规范有哪些？',
    a: `
      <ul>
        <li><strong>资源用名词表示：</strong>/users、/orders，而非 /getUsers</li>
        <li><strong>HTTP 方法表示操作：</strong>GET 获取、POST 创建、PUT 全量更新、PATCH 部分更新、DELETE 删除</li>
        <li><strong>状态码：</strong>200/201/204/400/401/403/404/500 等</li>
        <li><strong>版本：</strong>URL 或 Header 中体现版本，如 /api/v1/users</li>
        <li><strong>过滤：</strong>用查询参数，如 /users?role=admin</li>
        <li><strong>嵌套：</strong>/users/1/orders 表示用户 1 的订单</li>
      </ul>
    `,
  },
]
</script>
