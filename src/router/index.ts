import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  // {
  //   path: '/detail',
  //   name: 'Detail',
  //   component: () => import(/* webpackChunkName: "detail" */ '../views/Detail.vue'),
  // },
];

const router = new VueRouter({
  routes,
});

export default router;
