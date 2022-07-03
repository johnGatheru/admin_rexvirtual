import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TopNavigation from '../views/TopNavigation.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'TopNavigation',
      component: TopNavigation,
      children:[
        {
          path:'',
          redirect:'/HomeView',
          
        },
        {
          path:'/HomeView',
          name:'HomeView',
          component:HomeView
        },
        {
          path: '/AboutView',
          name: 'AboutView',
          component: () => import('../views/AboutView.vue')
        },
        {
          path: '/careers',
          name: 'Careers',
          component: () => import('../views/Careers.vue')
        },
        {
          path: '/Contact',
          name: 'Contact',
          component: () => import('../views/Contact.vue')
        },
        {
          path: '/Gethired',
          name: 'Gethired',
          component: () => import('../views/Gethired.vue')
        }
      ]
      
    },
   
  ]
})

export default router
