import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/pie',
      name: 'pie',
      component: () => import('../views/PieChart.vue')
    },
    // {
    //   path: '/bar',
    //   name: 'bar',
    //   component: () => import('../views/BarChart.vue')
    // },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomePage.vue')
    },
  ]
})

export default router
