import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcomepage',
      component: () => import('../views/WelcomePage.vue')
    },
    {
      path: '/characterspage',
      name: 'characterspage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CharactersPage.vue')
    },
    {
      path: '/comicspage',
      name: 'comicspage',      
      component: () => import('../views/ComicsPage.vue')
    },
    {
      path: '/eventspage',
      name: 'eventspage',      
      component: () => import('../views/EventsPage.vue')
    },
    {
      path: '/contactpage',
      name: 'contactpage',      
      component: () => import('../views/ContactPage.vue')
    },
    {
      path: '/chardetail',
      name: 'chardetail',      
      component: () => import('../views/CharacterDetailPage.vue')
    },
  ]
})

export default router
