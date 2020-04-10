import Vue from 'vue';
import './_modules/commons';
import router from '../../router';
import App from '../../components/App.vue';

const app = new Vue({
  el: '#app',
  components: { App },
  router,
  render: (h) => h(App),
});
