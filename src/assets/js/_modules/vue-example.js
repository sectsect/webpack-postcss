import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';
import VueMatchHeights from 'vue-match-heights';

export const vueExample = () => {
  Vue.use(VueScrollTo, {
    container: 'body',
    duration: 500,
    easing: 'ease',
    offset: 0,
    cancelable: true,
    onDone: false,
    onCancel: false,
    x: false,
    y: true,
  });

  Vue.use(VueMatchHeights);

  new Vue({
    el: '#wrap',
    methods: {},
  });
};
