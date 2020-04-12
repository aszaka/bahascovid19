import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/views/dashboard/Index'),
      children: [
        // Dashboard
        {
          name: 'Dashboard',
          path: '',
          component: () => import('@/views/dashboard/Dashboard'),
        },
        // Pages
        {
          name: 'Provinsi',
          path: 'provinsi',
          component: () => import('@/views/dashboard/pages/Provinsi'),
        },
        {
          name: 'Donasi',
          path: 'donasi',
          component: () => import('@/views/dashboard/pages/Donasi'),
        },
        {
          name: 'FAQ',
          path: 'faq',
          component: () => import('@/views/dashboard/pages/Faq'),
        },
        {
          name: 'Timeline',
          path: 'timeline',
          component: () => import('@/views/dashboard/pages/Timeline'),
        },
      ],
    },
  ],
})
