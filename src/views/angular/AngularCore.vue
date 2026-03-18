<template>
  <QAQuestion
    title="Angular 核心概念"
    :questions="questions"
  >
    <template #description>
      <p>本题考察对 Angular 模块、组件、服务、依赖注入及变更检测、生命周期等核心概念的理解。</p>
    </template>
  </QAQuestion>
</template>

<script setup lang="ts">
import QAQuestion from '@/components/QAQuestion.vue'

const questions = [
  {
    q: 'Angular 的模块、组件、服务、依赖注入分别是什么？',
    a: `
      <p><strong>模块（NgModule）：</strong></p>
      <ul>
        <li>用于组织应用结构的容器，通过 <code>@NgModule</code> 装饰器定义</li>
        <li>声明组件、指令、管道，导入其他模块，导出供其他模块使用的内容</li>
        <li>根模块 <code>AppModule</code> 通过 <code>bootstrap</code> 指定启动组件</li>
      </ul>
      <p><strong>组件（Component）：</strong></p>
      <ul>
        <li>构成视图的基本单元，包含模板、样式和逻辑</li>
        <li>通过 <code>@Component</code> 装饰器定义 selector、template、styleUrls 等</li>
        <li>负责数据展示和用户交互</li>
      </ul>
      <p><strong>服务（Service）：</strong></p>
      <ul>
        <li>可注入的类，用于封装业务逻辑、数据访问、跨组件共享状态</li>
        <li>通过 <code>@Injectable</code> 装饰器标记，配合 DI 使用</li>
        <li>典型用途：HTTP 请求、日志、认证、状态管理</li>
      </ul>
      <p><strong>依赖注入（DI）：</strong></p>
      <ul>
        <li>Angular 内置的 IoC 容器，负责创建和管理依赖实例</li>
        <li>通过构造函数注入：<code>constructor(private http: HttpClient) {}</code></li>
        <li>提供者（Provider）在模块或组件中配置，支持单例、工厂、多实例等</li>
      </ul>
    `,
  },
  {
    q: 'Angular 的变更检测机制（Zone.js / OnPush）',
    a: `
      <p><strong>Zone.js 与默认变更检测：</strong></p>
      <ul>
        <li>Angular 使用 Zone.js 拦截异步操作（setTimeout、Promise、事件等）</li>
        <li>异步回调执行后自动触发变更检测，遍历组件树检查数据变化</li>
        <li>默认策略：每次异步事件后都会检查整个组件树</li>
      </ul>
      <p><strong>OnPush 策略：</strong></p>
      <ul>
        <li>通过 <code>changeDetection: ChangeDetectionStrategy.OnPush</code> 启用</li>
        <li>仅在以下情况触发变更检测：</li>
        <ul>
          <li>输入属性（@Input）引用发生变化</li>
          <li>组件或子组件触发事件</li>
          <li>Observable 通过 async 管道发出新值</li>
          <li>手动调用 <code>ChangeDetectorRef.detectChanges()</code></li>
        </ul>
        <li>可显著减少不必要的检测，提升性能</li>
      </ul>
      <p><strong>手动控制：</strong></p>
      <ul>
        <li><code>detach()</code> — 脱离变更检测树</li>
        <li><code>reattach()</code> — 重新挂载</li>
        <li><code>markForCheck()</code> — 标记为需检测（配合 OnPush）</li>
      </ul>
    `,
  },
  {
    q: 'Angular 的生命周期钩子',
    a: `
      <p><strong>常用生命周期钩子：</strong></p>
      <ul>
        <li><code>ngOnChanges</code> — 输入属性首次或后续变化时调用，接收 SimpleChanges</li>
        <li><code>ngOnInit</code> — 组件初始化完成（首次 ngOnChanges 之后），适合初始化逻辑</li>
        <li><code>ngDoCheck</code> — 每次变更检测时调用，可自定义变更检测逻辑</li>
        <li><code>ngAfterContentInit</code> — 内容投影（ng-content）初始化后</li>
        <li><code>ngAfterContentChecked</code> — 内容投影检查后</li>
        <li><code>ngAfterViewInit</code> — 视图及子视图初始化后，可安全访问 ViewChild</li>
        <li><code>ngAfterViewChecked</code> — 视图检查后</li>
        <li><code>ngOnDestroy</code> — 组件销毁前，用于取消订阅、清理资源</li>
      </ul>
      <p><strong>执行顺序（挂载）：</strong></p>
      <p>constructor → ngOnChanges → ngOnInit → ngDoCheck → ngAfterContentInit → ngAfterContentChecked → ngAfterViewInit → ngAfterViewChecked</p>
      <p><strong>注意：</strong>在 <code>ngOnDestroy</code> 中务必取消 RxJS 订阅，避免内存泄漏。</p>
    `,
  },
]
</script>
