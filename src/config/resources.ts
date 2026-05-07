/**
 * 优质学习资源汇总
 *
 * 重要约定: 所有「优质学习资源合集」（视频/书籍/文档/工具/平台）
 * 必须在此文件维护，并在 HomeView.vue 中统一展示。
 * 不允许在题目页面或某个分类下单独建「资源合集」tab。
 */

export interface Resource {
  name: string
  desc: string
  meta?: string
  url: string
}

export interface ResourceGroup {
  id: string
  title: string
  icon?: string
  items: Resource[]
}

export const resourceGroups: ResourceGroup[] = [
  {
    id: 'videos',
    title: '视频教程（B站免费）',
    items: [
      { name: 'HTML+CSS+AI 2025版', desc: 'HTML5/CSS3/Flex/Grid/响应式', meta: 'Pink老师', url: 'https://www.bilibili.com/video/BV1MvaVzUEuz/' },
      { name: 'JS 零基础精英课', desc: 'JS 入门到精通 66集', meta: '渡一教育', url: 'https://www.bilibili.com/video/BV1f4411R7M5/' },
      { name: 'Vue3+TS 系统教程', desc: 'Vue3 全家桶 + TS', meta: 'coderwhy', url: 'https://www.bilibili.com/video/BV1Za4y1r7KE/' },
      { name: 'Vue 零基础到实战', desc: 'Vue3 核心 + 项目实战', meta: '渡一教育', url: 'https://www.bilibili.com/video/BV1wh41197Ja/' },
      { name: 'React 18 教程', desc: 'React 18 + Hooks', meta: '尚硅谷', url: 'https://www.bilibili.com/video/BV1wy4y1D7JT/' },
      { name: 'TypeScript 入门', desc: 'TS 零基础入门', meta: '黑马', url: 'https://www.bilibili.com/video/BV1wR4y1377K/' },
      { name: 'Webpack5 从入门到原理', desc: 'Webpack 完整教程', meta: '尚硅谷', url: 'https://www.bilibili.com/video/BV1YU4y1g745/' },
      { name: '134集全套前端教程', desc: 'HTML+CSS+JS+Vue3', meta: '综合', url: 'https://www.bilibili.com/video/BV1GVLiz5E5a/' },
    ],
  },
  {
    id: 'books',
    title: '经典书籍',
    items: [
      { name: 'CSS 世界', desc: '入门-进阶', meta: '豆瓣 7.7', url: 'https://book.douban.com/subject/25786074/' },
      { name: 'JavaScript 高级程序设计（第5版）', desc: '入门-进阶（红宝书）', meta: '2024 经典', url: 'https://book.douban.com/subject/37143075/' },
      { name: '你不知道的 JavaScript（上）', desc: '进阶', meta: '豆瓣 9.4', url: 'https://book.douban.com/subject/26351021/' },
      { name: 'JavaScript 权威指南（第7版）', desc: '进阶-高级', meta: '豆瓣 9.6', url: 'https://book.douban.com/subject/35396470/' },
      { name: 'Vue.js 设计与实现', desc: '高级（霍春阳）', meta: '豆瓣 9.6', url: 'https://book.douban.com/subject/35768338/' },
      { name: '图解 HTTP', desc: '入门', meta: '豆瓣 7.1', url: 'https://book.douban.com/subject/25863515/' },
    ],
  },
  {
    id: 'docs',
    title: '在线文档与教程',
    items: [
      { name: 'MDN Web Docs', desc: '最权威的 Web 技术文档', url: 'https://developer.mozilla.org/zh-CN/' },
      { name: '现代 JavaScript 教程', desc: '最好的 JS 中文教程', url: 'https://zh.javascript.info/' },
      { name: 'ES6 入门教程', desc: '阮一峰 ES6 教程', url: 'https://es6.ruanyifeng.com/' },
      { name: 'Vue3 官方文档', desc: 'Vue3 中文文档', url: 'https://cn.vuejs.org/' },
      { name: 'React 官方文档', desc: 'React 新版文档', url: 'https://react.dev/' },
      { name: 'TypeScript 文档', desc: 'TS 中文文档', url: 'https://www.typescriptlang.org/zh/' },
      { name: 'CSS-Tricks', desc: 'CSS 技巧与指南', url: 'https://css-tricks.com/' },
      { name: 'Can I Use', desc: '浏览器兼容性查询', url: 'https://caniuse.com/' },
    ],
  },
  {
    id: 'platforms',
    title: '刷题与面试平台',
    items: [
      { name: '力扣 LeetCode', desc: '算法刷题（中文版）', url: 'https://leetcode.cn/' },
      { name: '牛客网', desc: '前端面试真题 + 模拟面试', url: 'https://www.nowcoder.com/' },
      { name: '面试鸭', desc: '前端 200 道热门面试题', url: 'https://www.mianshiya.com/' },
      { name: '前端面试手册', desc: '系统化面试准备', url: 'https://www.frontendinterviewhandbook.com/zh-CN/' },
      { name: '艾编程', desc: '前端学习路线 + 面试题', url: 'https://www.arryblog.com/' },
    ],
  },
  {
    id: 'tools',
    title: '开发工具与效率',
    items: [
      { name: 'VS Code', desc: '代码编辑器', url: 'https://code.visualstudio.com/' },
      { name: 'Cursor', desc: 'AI 代码编辑器', url: 'https://cursor.sh/' },
      { name: 'Chrome DevTools', desc: '浏览器调试工具', url: 'https://developer.chrome.com/docs/devtools/' },
      { name: 'Vue Devtools', desc: 'Vue 调试扩展', url: 'https://devtools.vuejs.org/' },
      { name: 'Postman', desc: 'API 调试工具', url: 'https://www.postman.com/' },
      { name: 'GitHub', desc: '代码托管 + 开源', url: 'https://github.com/' },
    ],
  },
]
