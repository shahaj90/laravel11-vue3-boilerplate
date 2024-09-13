import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/parent',
    component: () => import('@/layouts/FullLayout.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/pages/Home.vue'),
      },

      {
        path: '/about',
        name: 'About',
        component: () => import('@/pages/About.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
