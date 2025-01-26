import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import List from '@/components/List.vue';
import NotFoundView from '../views/NotFound.vue';

const routes = [
  { path: '/', name: 'Default', component: HomeView },
  { path: '/:listName', name: 'ListView', component: List },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
