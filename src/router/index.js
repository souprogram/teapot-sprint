import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HackathonView from '@/views/HackathonView.vue'
import BlogView from '@/views/BlogView.vue'
import LokacijaView from '@/views/LokacijaView.vue'
import NagradeView from '@/views/NagradeView.vue'
import ProgramView from '@/views/ProgramView.vue'
import ScoreboardView from '@/views/ScoreboardView.vue'
import SponzoriView from '@/views/SponzoriView.vue'
import LoginView from '@/views/LoginView.vue'
import RegistracijaView from '@/views/RegistracijaView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: HackathonView,
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    },
    {
      path: '/lokacija',
      name: 'lokacija',
      component: LokacijaView,
    },
    {
      path: '/nagrade',
      name: 'nagrade',
      component: NagradeView,
    },
    {
      path: '/program',
      name: 'program',
      component: ProgramView,
    },
    {
      path: '/scoreboard',
      name: 'scoreboard',
      component: ScoreboardView,
    },
    {
      path: '/sponzori',
      name: 'sponzori',
      component: SponzoriView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/registracija',
      name: 'registracija',
      component:  RegistracijaView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if(to.hash) {
      return {
        el: to.hash, 
        behavior: 'smooth'
      }
    }
    return { top: 0 }
  }
})

export default router
