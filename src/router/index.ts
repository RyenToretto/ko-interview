import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/HomeView.vue'),
      },
      // ========== CSS（按必问程度排序）==========
      {
        path: 'css/why-traps',
        name: 'CssWhyTraps',
        component: () => import('@/views/css/CssWhyTraps.vue'),
      },
      {
        path: 'css/box-model',
        name: 'CssBoxModel',
        component: () => import('@/views/css/BoxModel.vue'),
      },
      {
        path: 'css/center',
        name: 'CssCenter',
        component: () => import('@/views/css/CenterAlign.vue'),
      },
      {
        path: 'css/flex',
        name: 'CssFlex',
        component: () => import('@/views/css/FlexLayout.vue'),
      },
      {
        path: 'css/position',
        name: 'CssPosition',
        component: () => import('@/views/css/PositionLayout.vue'),
      },
      {
        path: 'css/selector',
        name: 'CssSelector',
        component: () => import('@/views/css/SelectorPriority.vue'),
      },
      {
        path: 'css/responsive',
        name: 'CssResponsive',
        component: () => import('@/views/css/Responsive.vue'),
      },
      {
        path: 'css/mobile',
        name: 'CssMobile',
        component: () => import('@/views/css/MobileAdapt.vue'),
      },
      {
        path: 'css/units',
        name: 'CssUnits',
        component: () => import('@/views/css/CssUnits.vue'),
      },
      {
        path: 'css/blocking',
        name: 'CssBlocking',
        component: () => import('@/views/css/CssBlocking.vue'),
      },
      {
        path: 'css/less',
        name: 'CssLess',
        component: () => import('@/views/css/LessFeatures.vue'),
      },
      {
        path: 'css/scss',
        name: 'CssScss',
        component: () => import('@/views/css/ScssFeatures.vue'),
      },
      {
        path: 'css/transform-perf',
        name: 'CssTransformPerf',
        component: () => import('@/views/css/TransformPerf.vue'),
      },
      {
        path: 'css/animation',
        name: 'CssAnimation',
        component: () => import('@/views/css/CssAnimation.vue'),
      },
      // ========== JavaScript（1️⃣原型链 → 2️⃣this → 3️⃣闭包 → 4️⃣Promise+EventLoop → 5️⃣其他）==========
      // 1️⃣ 原型链
      {
        path: 'js/prototype',
        name: 'JsPrototype',
        component: () => import('@/views/javascript/PrototypeChain.vue'),
      },
      // 2️⃣ this
      {
        path: 'js/this',
        name: 'JsThis',
        component: () => import('@/views/javascript/ThisBinding.vue'),
      },
      // 3️⃣ 闭包
      {
        path: 'js/closure',
        name: 'JsClosure',
        component: () => import('@/views/javascript/ClosureScope.vue'),
      },
      {
        path: 'js/closure-why',
        name: 'JsClosureWhy',
        component: () => import('@/views/javascript/ClosureWhy.vue'),
      },
      // 4️⃣ Promise + Event Loop
      {
        path: 'js/promise',
        name: 'JsPromise',
        component: () => import('@/views/javascript/PromiseAsync.vue'),
      },
      {
        path: 'js/event-loop',
        name: 'JsEventLoop',
        component: () => import('@/views/javascript/EventLoop.vue'),
      },
      {
        path: 'js/single-thread',
        name: 'JsSingleThread',
        component: () => import('@/views/javascript/SingleThreadAsync.vue'),
      },
      // 5️⃣ 其他
      {
        path: 'js/es6',
        name: 'JsES6',
        component: () => import('@/views/javascript/ES6Features.vue'),
      },
      {
        path: 'js/iterator',
        name: 'JsIterator',
        component: () => import('@/views/javascript/Iterator.vue'),
      },
      {
        path: 'js/array',
        name: 'JsArray',
        component: () => import('@/views/javascript/ArrayMethods.vue'),
      },
      {
        path: 'js/object',
        name: 'JsObject',
        component: () => import('@/views/javascript/ObjectMethods.vue'),
      },
      {
        path: 'js/debounce',
        name: 'JsDebounce',
        component: () => import('@/views/javascript/DebounceThrottle.vue'),
      },
      {
        path: 'js/call-apply-bind',
        name: 'JsCallApplyBind',
        component: () => import('@/views/javascript/CallApplyBind.vue'),
      },
      {
        path: 'js/deep-clone',
        name: 'JsDeepClone',
        component: () => import('@/views/javascript/DeepClone.vue'),
      },
      {
        path: 'js/gc',
        name: 'JsGC',
        component: () => import('@/views/javascript/GarbageCollection.vue'),
      },
      {
        path: 'js/v8',
        name: 'JsV8',
        component: () => import('@/views/javascript/V8Engine.vue'),
      },
      // ========== Vue3（按必问程度排序）==========
      {
        path: 'vue3/vs-vue2',
        name: 'VueVsVue2',
        component: () => import('@/views/vue3/Vue3VsVue2.vue'),
      },
      {
        path: 'vue3/reactive',
        name: 'VueReactive',
        component: () => import('@/views/vue3/ReactiveRef.vue'),
      },
      {
        path: 'vue3/lifecycle',
        name: 'VueLifecycle',
        component: () => import('@/views/vue3/Lifecycle.vue'),
      },
      {
        path: 'vue3/communication',
        name: 'VueCommunication',
        component: () => import('@/views/vue3/ComponentComm.vue'),
      },
      {
        path: 'vue3/computed',
        name: 'VueComputed',
        component: () => import('@/views/vue3/ComputedWatch.vue'),
      },
      {
        path: 'vue3/virtual-dom',
        name: 'VueVirtualDom',
        component: () => import('@/views/vue3/VirtualDom.vue'),
      },
      {
        path: 'vue3/next-tick',
        name: 'VueNextTick',
        component: () => import('@/views/vue3/NextTick.vue'),
      },
      {
        path: 'vue3/directive',
        name: 'VueDirective',
        component: () => import('@/views/vue3/CustomDirective.vue'),
      },
      {
        path: 'vue3/slots',
        name: 'VueSlots',
        component: () => import('@/views/vue3/SlotsUsage.vue'),
      },
      // ========== Vue 生态 ==========
      {
        path: 'vue-eco/router-guard',
        name: 'VueEcoRouter',
        component: () => import('@/views/vue-eco/RouterGuard.vue'),
      },
      {
        path: 'vue-eco/pinia',
        name: 'VueEcoPinia',
        component: () => import('@/views/vue-eco/PiniaStore.vue'),
      },
      {
        path: 'vue-eco/keep-alive',
        name: 'VueEcoKeepAlive',
        component: () => import('@/views/vue-eco/KeepAlive.vue'),
      },
      {
        path: 'vue-eco/composables',
        name: 'VueEcoComposables',
        component: () => import('@/views/vue-eco/Composables.vue'),
      },
      // ========== TypeScript ==========
      {
        path: 'ts/flat-to-tree',
        name: 'TsFlatToTree',
        component: () => import('@/views/typescript/FlatToTree.vue'),
      },
      {
        path: 'ts/basic',
        name: 'TsBasic',
        component: () => import('@/views/typescript/BasicTypes.vue'),
      },
      {
        path: 'ts/generics',
        name: 'TsGenerics',
        component: () => import('@/views/typescript/Generics.vue'),
      },
      {
        path: 'ts/utility',
        name: 'TsUtility',
        component: () => import('@/views/typescript/TypeUtility.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
