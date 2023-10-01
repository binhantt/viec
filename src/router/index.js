import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/home',
      name:'home',
      component:()=>import('../views/home.vue')
    },
    {
      path:'/login',
      name:'login',
      component:()=>import('../views/Login.vue')
    },
    {
      path:'/Registerr',
      name:'Registerr',
      component:()=>import('../views/RegisterrView.vue')
    },
    
  ]
})

export default router