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
      // ========== CSS ==========
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
        path: 'css/selector',
        name: 'CssSelector',
        component: () => import('@/views/css/SelectorPriority.vue'),
      },
      {
        path: 'css/box-model',
        name: 'CssBoxModel',
        component: () => import('@/views/css/BoxModel.vue'),
      },
      {
        path: 'css/animation',
        name: 'CssAnimation',
        component: () => import('@/views/css/CssAnimation.vue'),
      },
      // ========== JavaScript ==========
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
        path: 'js/promise',
        name: 'JsPromise',
        component: () => import('@/views/javascript/PromiseAsync.vue'),
      },
      {
        path: 'js/closure',
        name: 'JsClosure',
        component: () => import('@/views/javascript/ClosureScope.vue'),
      },
      {
        path: 'js/event-loop',
        name: 'JsEventLoop',
        component: () => import('@/views/javascript/EventLoop.vue'),
      },
      {
        path: 'js/debounce',
        name: 'JsDebounce',
        component: () => import('@/views/javascript/DebounceThrottle.vue'),
      },
      {
        path: 'js/deep-clone',
        name: 'JsDeepClone',
        component: () => import('@/views/javascript/DeepClone.vue'),
      },
      // ========== Vue3 ==========
      {
        path: 'vue3/reactive',
        name: 'VueReactive',
        component: () => import('@/views/vue3/ReactiveRef.vue'),
      },
      {
        path: 'vue3/computed',
        name: 'VueComputed',
        component: () => import('@/views/vue3/ComputedWatch.vue'),
      },
      {
        path: 'vue3/communication',
        name: 'VueCommunication',
        component: () => import('@/views/vue3/ComponentComm.vue'),
      },
      {
        path: 'vue3/lifecycle',
        name: 'VueLifecycle',
        component: () => import('@/views/vue3/Lifecycle.vue'),
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
      // ========== TypeScript ==========
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
