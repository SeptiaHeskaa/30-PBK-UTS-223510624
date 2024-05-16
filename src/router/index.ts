import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
<<<<<<< HEAD
    redirect: { name: 'todoList' },
=======
    redirect: { name: 'MY Activity' },
>>>>>>> 11054b7bd8c7598d222c8ffda395ef3b18a97d5b
  },
  {
    path: '/todo',
    name: 'todoList',
    component: () => import('../views/TodoListPage.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutPage.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/views/NotFoundPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
