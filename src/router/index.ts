import Vue from 'vue';
import VueRouter, { RouterOptions } from 'vue-router';
// import Home from '@/views/Home.vue';
import { RouteConfig } from 'vue-router/types/router';

Vue.use(VueRouter);

// https://alligator.io/vuejs/lazy-loading-vue-cli-3-webpack/
function loadView(view: string) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`)
}

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'home',
    // component: Home,
    // components: { Home },
    component: loadView('Home'),
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    component: loadView('About'),
  },
];

const options: RouterOptions = {
  base: process.env.BASE_URL,
  mode: 'history',
  routes,
};

export default new VueRouter(options);
