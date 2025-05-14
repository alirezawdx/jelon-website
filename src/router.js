import { createRouter, createWebHistory } from 'vue-router';

import HomeView from './views/HomeView.vue';
import TeamView from './views/TeamView.vue';

export default createRouter({
  history: createWebHistory(),
  linkActiveClass: 'bg-base-300',
  routes: [
    {
      name: 'home',
      path: '/',
      component: HomeView,
    },
    {
      name: 'team',
      path: '/team',
      component: TeamView,
    },
  ],
});
