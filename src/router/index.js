import { createRouter, createWebHistory } from 'vue-router';
const List = () => import('@/components/List.vue'); //PRIMJER-lazy loading
const NotFoundView = () => import('../views/NotFound.vue');

const routes = [
  { path: '/', redirect: '/life' },
  {
    path: '/:listName', //PRIMJER-rute, bookmarkable
    name: 'ListView',
    component: List,
    props: (route) => ({ defaultList: route.params.listName || 'life' }),
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView }, //PRIMJER-404
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
