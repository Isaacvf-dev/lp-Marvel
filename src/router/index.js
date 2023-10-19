import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/WelcomePage.vue')
    },
    {
      path: '/characters',
      name: 'Characters',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CharactersPage.vue')
    },
    {
      path: '/comics',
      name: 'Comics',      
      component: () => import('../views/ComicsPage.vue')
    },
    {
      path: '/events',
      name: 'Events',      
      component: () => import('../views/EventsPage.vue')
    },
    {
      path: '/contact',
      name: 'Contact',      
      component: () => import('../views/ContactPage.vue')
    },
    {
      path: '/chardetail/:id',
      name: 'chardetail',      
      component: () => import('../views/CharacterDetailPage.vue')
    },
  ]
})

export default router
