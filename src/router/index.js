import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      component: () => import('@/layouts/DefaultLayout.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/pages/HomePage.vue'),
        },
        {
          path: '/projects',
          name: 'projects',
          component: () => import('@/pages/ProjectPage.vue'),
        },
        {
          path: '/technologies',
          name: 'technologies',
          component: () => import('@/pages/TechnologyPage.vue'),
        },
        {
          path: '/contact',
          name: 'contact',
          component: () => import('@/pages/ContactPage.vue'),
        },
      ],
    },
  ],
})

export default router
