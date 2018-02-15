export default (detect) => {
  if (detect.tablet) {
    jQuery('#viewport').attr('content', 'width=1024');
  }
};
