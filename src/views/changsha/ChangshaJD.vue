<template>
  <QuestionCard title="长沙 Boss 直聘 JD 汇总分析" type="qa">
    <template #description>
      <p>基于 <strong>Boss 直聘 / 猎聘 / 智联招聘</strong> 上长沙地区前端开发岗位 JD 的综合统计分析（2025-2026）。</p>
      <p>本页提供技能要求频率、薪资分布、招聘公司、岗位职责的全方位汇总。</p>
    </template>

    <el-card shadow="never">
      <template #header><strong>1. 核心技能要求频率统计</strong></template>
      <el-table :data="skillData" border style="width: 100%">
        <el-table-column prop="skill" label="技能要求" min-width="160" />
        <el-table-column label="出现频率" width="120">
          <template #default="{ row }">
            <el-tag :type="freqTagType(row.freq)" effect="plain">{{ row.freq }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="category" label="项目分类" min-width="120" />
        <el-table-column label="覆盖状态" width="100">
          <template #default="{ row }">
            <el-tag :type="row.covered ? 'success' : 'danger'">
              {{ row.covered ? '已覆盖' : '已补充' }}
            </el-tag>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <el-card shadow="never">
      <template #header><strong>2. 薪资分布（长沙前端 2025-2026）</strong></template>
      <el-table :data="salaryData" border style="width: 100%">
        <el-table-column prop="level" label="等级" width="160" />
        <el-table-column prop="exp" label="经验" width="120" />
        <el-table-column prop="salary" label="月薪范围" width="160" />
        <el-table-column prop="education" label="学历要求" />
      </el-table>
      <p style="margin-top: 12px; color: var(--text-secondary); font-size: 13px">
        数据来源：Boss 直聘、猎聘、智联招聘 2025-2026 年长沙地区前端岗位汇总
      </p>
    </el-card>

    <el-card shadow="never">
      <template #header><strong>3. 主要招聘公司</strong></template>
      <el-table :data="companyData" border style="width: 100%">
        <el-table-column prop="company" label="公司" min-width="160" />
        <el-table-column prop="industry" label="行业" min-width="140" />
        <el-table-column prop="tech" label="技术栈特点" min-width="240" />
      </el-table>
    </el-card>

    <el-card shadow="never">
      <template #header><strong>4. 通用岗位职责</strong></template>
      <ol class="jd-resp-list">
        <li>负责 Web 前端页面/组件的开发与维护</li>
        <li>与 UI 设计师、后端工程师协作完成产品功能</li>
        <li>优化前端性能，提升用户体验和加载速度</li>
        <li>参与前端架构设计、技术方案选型</li>
        <li>配合后端完成 RESTful API 接口联调和数据交互</li>
        <li>跟进新技术，推动团队技术升级和工程化建设</li>
        <li>编写技术文档，进行代码评审</li>
      </ol>
    </el-card>

    <el-card shadow="never">
      <template #header><strong>5. 长沙特色技能（区别于一线城市）</strong></template>
      <ul class="jd-resp-list">
        <li><strong>Vue 生态为主</strong>：80%+ 公司使用 Vue，React 占比约 20-30%</li>
        <li><strong>大屏可视化</strong>：ECharts/DataV/数字孪生项目多，源于政企客户</li>
        <li><strong>GIS 地图</strong>：CIM/城市大脑/智慧能源项目带火的需求</li>
        <li><strong>微信小程序 / uni-app</strong>：B 端政务和企业内部应用大量使用</li>
        <li><strong>Electron / Tauri</strong>：桌面应用开发岗位 2025 年新增 2879 个</li>
        <li><strong>全栈 Node.js</strong>：中小公司倾向招聘前后端兼顾的人才</li>
      </ul>
    </el-card>

    <el-card shadow="never">
      <template #header><strong>6. 加分项（高级岗位）</strong></template>
      <ul class="jd-resp-list">
        <li>有 3D / WebGL / Three.js / Cesium 经验</li>
        <li>有 Node.js 服务端开发经验</li>
        <li>有 Java / Python / PHP 等后端语言基础</li>
        <li>有微前端 (qiankun / Module Federation) 经验</li>
        <li>有 SSR / Next.js / Nuxt.js 项目经验</li>
        <li>有 Linux / Nginx / Docker 部署经验</li>
        <li>有开源项目或技术博客</li>
      </ul>
    </el-card>
  </QuestionCard>
</template>

<script setup lang="ts">
import QuestionCard from '@/components/QuestionCard.vue'

const skillData = [
  { skill: 'HTML5/CSS3', freq: '100%', category: 'HTML + CSS', covered: true },
  { skill: 'JavaScript/ES6+', freq: '100%', category: 'JavaScript', covered: true },
  { skill: 'Vue2/Vue3', freq: '95%', category: 'Vue3 + Vue 生态', covered: true },
  { skill: 'TypeScript', freq: '80%', category: 'TypeScript', covered: true },
  { skill: 'Git 工作流', freq: '80%', category: '工程化', covered: true },
  { skill: '前端工程化(Webpack/Vite)', freq: '75%', category: '工程化', covered: true },
  { skill: '响应式/移动端适配', freq: '70%', category: 'CSS', covered: true },
  { skill: '微信小程序 / uni-app', freq: '70%', category: '长沙前端面试', covered: false },
  { skill: 'HTTP / 网络 / 跨域', freq: '65%', category: 'HTTP 网络', covered: true },
  { skill: 'ECharts / 数据可视化', freq: '60%', category: '长沙前端面试', covered: false },
  { skill: '性能优化', freq: '60%', category: '性能优化', covered: true },
  { skill: 'RESTful API', freq: '60%', category: '长沙前端面试', covered: false },
  { skill: 'React', freq: '50%', category: 'React', covered: true },
  { skill: 'Node.js 基础', freq: '45%', category: '长沙前端面试', covered: false },
  { skill: '设计模式 / MVC / MVVM', freq: '40%', category: '长沙前端面试', covered: false },
  { skill: 'Electron / 桌面应用', freq: '30%', category: '长沙前端面试', covered: false },
  { skill: 'GIS / 地图开发', freq: '25%', category: '长沙前端面试', covered: false },
  { skill: 'D3.js / Three.js / WebGL', freq: '20%', category: '长沙前端面试', covered: false },
]

const salaryData = [
  { level: '实习生', exp: '在校/应届', salary: '50-60元/天 或 8-10K', education: '本科及以上' },
  { level: '初级', exp: '1-3 年', salary: '6-12K', education: '本科（部分大专）' },
  { level: '中级', exp: '3-5 年', salary: '10-18K', education: '本科' },
  { level: '高级', exp: '5-10 年', salary: '13-25K', education: '本科' },
  { level: '资深 / 架构师', exp: '10 年+', salary: '20-30K+', education: '本科' },
]

const companyData = [
  { company: '万兴科技', industry: '国际化软件', tech: 'React + TS + Electron 桌面应用' },
  { company: '安克创新', industry: '消费电子', tech: 'Vue3 + TS + 大数据可视化' },
  { company: '中联重科', industry: '工程机械', tech: 'Vue2/Vue3 + 大屏 + 工业互联网' },
  { company: '三一重工', industry: '工程机械', tech: 'React + 工业互联网平台' },
  { company: '芒果 TV', industry: '视频娱乐', tech: 'React + Node.js + SSR' },
  { company: '拓维信息', industry: '政企信息化', tech: 'Vue + 大屏 + GIS' },
  { company: '亚信科技', industry: '电信软件', tech: 'Vue + 后台管理系统' },
  { company: '复星财富', industry: '金融科技', tech: 'React + TS + 微前端' },
  { company: '得物', industry: '电商 / 社区', tech: 'React + Node + 小程序' },
  { company: '树根互联', industry: '工业互联网', tech: 'Vue + ECharts + 大屏' },
]

function freqTagType(freq: string) {
  const num = parseInt(freq)
  if (num >= 70) return 'danger'
  if (num >= 40) return 'warning'
  return 'info'
}
</script>

<style scoped>
.jd-resp-list {
  padding-left: 24px;
  line-height: 1.9;
  font-size: 14px;
  color: var(--text-primary);
}

.jd-resp-list li {
  margin-bottom: 4px;
}
</style>
