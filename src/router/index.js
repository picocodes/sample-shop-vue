import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'products',
      component: () => import('../views/Products.vue')
    },
    {
      path: '/products/:id',
      name: 'product',
      component: () => import('../views/Product.vue'),
      props: true,
    }
  ]
})

export default router
