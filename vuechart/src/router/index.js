import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/pie',
      name: 'pie',
      component: () => import('../views/PieChart.vue')
    },
    {
      path: '/bar',
      name: 'bar',
      component: () => import('../views/homepage.vue')
    },
  ]
})

export default router
