<template>
  <QAQuestion
    title="HTTP/1.1 vs HTTP/2 vs HTTP/3"
    :questions="questions"
  >
    <template #description>
      <p>本题考察 HTTP 各版本的特点、演进与差异。</p>
    </template>
  </QAQuestion>
</template>

<script setup lang="ts">
import QAQuestion from '@/components/QAQuestion.vue'

const questions = [
  {
    q: 'HTTP/1.1 存在哪些问题？',
    a: `
      <ul>
        <li><strong>队头阻塞：</strong>同一 TCP 连接上，前一个请求未完成时，后续请求需等待</li>
        <li><strong>并发限制：</strong>浏览器对同一域名最多 6 个并发连接</li>
        <li><strong>头部冗余：</strong>每次请求都携带大量重复的 Header（Cookie、User-Agent 等）</li>
        <li><strong>明文传输：</strong>HTTP 本身不加密，需配合 HTTPS</li>
      </ul>
    `,
  },
  {
    q: 'HTTP/2 做了哪些改进？',
    a: `
      <ul>
        <li><strong>多路复用：</strong>同一连接上多个请求/响应并行，解决队头阻塞</li>
        <li><strong>头部压缩：</strong>HPACK 算法压缩头部，减少冗余</li>
        <li><strong>二进制分帧：</strong>将 HTTP 消息拆成二进制帧，便于多路复用</li>
        <li><strong>服务器推送：</strong>服务端可主动推送资源</li>
        <li><strong>流优先级：</strong>可为不同流设置优先级</li>
      </ul>
    `,
  },
  {
    q: 'HTTP/3 基于 QUIC，有什么特点？',
    a: `
      <p>HTTP/3 基于 <strong>QUIC（Quick UDP Internet Connection）</strong>，传输层使用 UDP 而非 TCP。</p>
      <ul>
        <li><strong>无队头阻塞：</strong>QUIC 在连接层面实现多路复用，单个流丢包不影响其他流</li>
        <li><strong>快速建立：</strong>0-RTT 或 1-RTT 握手，减少延迟</li>
        <li><strong>连接迁移：</strong>切换网络（如 WiFi→4G）时连接可保持</li>
        <li><strong>内置加密：</strong>QUIC 默认使用 TLS 1.3</li>
      </ul>
    `,
  },
]
</script>
