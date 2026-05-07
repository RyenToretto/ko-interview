<template>
  <QAQuestion title="微信小程序与 uni-app" :questions="questions">
    <template #description>
      <p>长沙 70% 公司 JD 中要求小程序/uni-app 技能，本题考察小程序开发核心知识。</p>
    </template>
  </QAQuestion>
</template>

<script setup lang="ts">
import QAQuestion from '@/components/QAQuestion.vue'

const questions = [
  {
    q: '微信小程序的目录结构和四个核心文件是什么？',
    a: `
      <p><strong>四个核心文件（每个页面）：</strong></p>
      <ul>
        <li><code>.wxml</code> — 页面结构（类似 HTML）</li>
        <li><code>.wxss</code> — 页面样式（类似 CSS，单位 rpx）</li>
        <li><code>.js</code> — 页面逻辑</li>
        <li><code>.json</code> — 页面配置</li>
      </ul>
      <p><strong>全局文件：</strong></p>
      <ul>
        <li><code>app.js</code> — 应用入口和全局逻辑</li>
        <li><code>app.json</code> — 应用全局配置（页面路径、tabBar、window 等）</li>
        <li><code>app.wxss</code> — 全局样式</li>
        <li><code>project.config.json</code> — 项目配置（appid、编译配置）</li>
      </ul>
    `,
  },
  {
    q: '小程序的生命周期函数有哪些？',
    a: `
      <p><strong>App 生命周期：</strong></p>
      <ul>
        <li><code>onLaunch</code> — 小程序初始化（全局只触发一次）</li>
        <li><code>onShow</code> — 启动或从后台进入前台</li>
        <li><code>onHide</code> — 从前台进入后台</li>
        <li><code>onError</code> — 脚本错误或 API 调用失败</li>
      </ul>
      <p><strong>Page 生命周期：</strong></p>
      <ul>
        <li><code>onLoad</code> — 页面加载（接收路由参数）</li>
        <li><code>onShow</code> — 页面显示</li>
        <li><code>onReady</code> — 页面初次渲染完成</li>
        <li><code>onHide</code> — 页面隐藏</li>
        <li><code>onUnload</code> — 页面卸载</li>
        <li><code>onPullDownRefresh</code> — 下拉刷新</li>
        <li><code>onReachBottom</code> — 上拉触底</li>
      </ul>
    `,
  },
  {
    q: 'uni-app 相比原生小程序有什么优势？跨端原理是什么？',
    a: `
      <p><strong>核心优势：</strong></p>
      <ul>
        <li><strong>一套代码多端发行</strong>：H5/微信/支付宝/百度/字节/QQ/快应用/iOS App/Android App</li>
        <li><strong>使用 Vue 语法</strong>：学习成本低，前端友好</li>
        <li><strong>条件编译</strong>：<code>#ifdef MP-WEIXIN</code> 针对特定平台编写代码</li>
        <li><strong>插件市场丰富</strong>：组件、模板、SDK 应有尽有</li>
      </ul>
      <p><strong>跨端原理：</strong></p>
      <ul>
        <li>编译时：将 Vue 模板转换为各端原生语法（H5 用 Vue Runtime，小程序转 wxml/wxss/js）</li>
        <li>运行时：提供统一 API（uni.xxx），底层调用各端原生 API</li>
        <li>App 端：基于 plus（5+ Runtime）或 nvue（Weex 渲染）</li>
      </ul>
    `,
  },
  {
    q: '小程序的页面通信方式有哪些？',
    a: `
      <ul>
        <li><strong>路由参数</strong>：<code>navigateTo({ url: '/pages/detail?id=1' })</code> + <code>onLoad(options)</code></li>
        <li><strong>EventChannel</strong>（推荐）：navigateTo 时通过 events 选项传递数据</li>
        <li><strong>全局变量</strong>：getApp().globalData</li>
        <li><strong>缓存</strong>：wx.setStorageSync / wx.getStorageSync</li>
        <li><strong>Vuex / Pinia</strong>：uni-app 中可用</li>
        <li><strong>组件通信</strong>：父子用 properties + triggerEvent，跨级用 selectComponent</li>
      </ul>
    `,
  },
  {
    q: '小程序分包加载是什么？什么场景需要使用？',
    a: `
      <p><strong>背景</strong>：微信小程序主包不能超过 2MB，整体不能超过 20MB（普通分包）/ 100MB（独立分包）。</p>
      <p><strong>分包加载</strong>：将小程序代码拆分为主包 + 子包，按需加载。</p>
      <pre>// app.json
{
  "pages": ["pages/index/index"],     // 主包页面
  "subpackages": [
    {
      "root": "pkg-shop",                // 子包根目录
      "pages": ["list/list", "detail/detail"]
    }
  ]
}</pre>
      <p><strong>使用场景：</strong></p>
      <ul>
        <li>包体积超过 2MB 限制</li>
        <li>非首屏功能（如客服中心、个人中心二级页面）</li>
        <li>不同业务模块独立加载（电商分包、活动分包）</li>
      </ul>
      <p><strong>独立分包</strong>：可单独运行，不依赖主包，适合活动页/扫码页直接进入。</p>
    `,
  },
  {
    q: '小程序如何做性能优化？',
    a: `
      <ul>
        <li><strong>包体积优化</strong>：分包加载、压缩图片、移除未使用代码</li>
        <li><strong>首屏优化</strong>：预加载、骨架屏、按需引入组件</li>
        <li><strong>数据更新</strong>：使用 setData 时只更新差异部分（diff），避免大对象一次性更新</li>
        <li><strong>列表渲染</strong>：长列表使用 recycle-view 虚拟列表</li>
        <li><strong>图片优化</strong>：lazy-load 懒加载、使用 CDN、合适尺寸</li>
        <li><strong>网络请求</strong>：合并请求、缓存数据</li>
      </ul>
    `,
  },
]
</script>
