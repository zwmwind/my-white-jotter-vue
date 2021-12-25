import { createRouter, createWebHistory } from 'vue-router'
import Login from "../views/Login";
import AppIndex from "../views/home/AppIndex";

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/index',
    name: 'AppIndex',
    component: AppIndex
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
