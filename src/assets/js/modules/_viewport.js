export default (detect) => {
  console.log(detect);
  const vp = (detect.tablet) ? 'width=1024' : 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no';
  const AppMeta = new Vue({
    el: '#head',
    data: {
      viewport: vp,
    },
    methods: {},
  });
};
