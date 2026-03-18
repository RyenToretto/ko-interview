<template>
  <QAQuestion
    title="HTTPS 与 TCP"
    :questions="questions"
  >
    <template #description>
      <p>本题考察 HTTPS 握手过程、TCP 三次握手与四次挥手，以及其设计原因。</p>
    </template>
  </QAQuestion>
</template>

<script setup lang="ts">
import QAQuestion from '@/components/QAQuestion.vue'

const questions = [
  {
    q: 'HTTPS 是什么？TLS 握手过程是怎样的？',
    a: `
      <p><strong>HTTPS = HTTP + TLS</strong>，在 HTTP 之上增加加密层，保证传输安全。</p>
      <p><strong>TLS 握手过程（简化）：</strong></p>
      <ol>
        <li>客户端发送 Client Hello，包含支持的加密套件、随机数</li>
        <li>服务端返回 Server Hello，选定加密套件、证书、随机数</li>
        <li>客户端验证证书，生成预主密钥，用证书公钥加密后发送</li>
        <li>双方根据随机数和预主密钥生成会话密钥</li>
        <li>后续通信使用对称加密加密数据</li>
      </ol>
    `,
  },
  {
    q: 'TCP 三次握手和四次挥手的过程是什么？',
    a: `
      <p><strong>三次握手（建立连接）：</strong></p>
      <ol>
        <li>客户端 → 服务端：SYN</li>
        <li>服务端 → 客户端：SYN + ACK</li>
        <li>客户端 → 服务端：ACK</li>
      </ol>
      <p><strong>四次挥手（断开连接）：</strong></p>
      <ol>
        <li>客户端 → 服务端：FIN</li>
        <li>服务端 → 客户端：ACK</li>
        <li>服务端 → 客户端：FIN</li>
        <li>客户端 → 服务端：ACK</li>
      </ol>
    `,
  },
  {
    q: '为什么需要三次握手？为什么需要四次挥手？',
    a: `
      <p><strong>三次握手：</strong></p>
      <ul>
        <li>防止历史连接：若客户端发旧的 SYN，服务端可拒绝，客户端可发送 RST 终止</li>
        <li>同步序列号：双方确认彼此的初始序列号，保证后续可靠传输</li>
        <li>两次不够：服务端需确认客户端能收到自己的响应，否则可能单方面建立连接</li>
      </ul>
      <p><strong>四次挥手：</strong></p>
      <p>TCP 全双工，连接断开需双方各自关闭。一方发 FIN 表示不再发送，但还可接收。因此服务端收到 FIN 后先 ACK，等自己数据发完再发 FIN，客户端再 ACK。所以是四次。</p>
    `,
  },
]
</script>
