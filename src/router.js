import Vue from 'vue';
import Router from 'vue-router';
import About from './components/About.vue';
import Home from './components/Home.vue';

Vue.use(Router);

// eslint-disable-next-line import/no-default-export
export default new Router({
  // mode: 'history',
  base: '/example',
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/about',
      component: About,
    },
  ],
});
