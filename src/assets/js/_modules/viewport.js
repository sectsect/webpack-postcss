export default (detect) => {
  if (detect.device.tablet) {
    jQuery('#viewport').attr('content', 'width=1024');
  }
};
