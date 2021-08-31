// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import Vue from 'vue';
import './_modules/commons';
import App from '../../components/App.vue';
import router from '../../router';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const app = new Vue({
  el: '#app',
  components: { App },
  router,
  render: h => h(App),
});
