import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: require('../components/home/product.vue').default,
    name: 'home'
  },
  {
    path: '/products',
    component: require('../components/products/product.vue').default,
    name: 'products'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
