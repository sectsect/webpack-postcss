export const viewPort = () => {
  if (detect.device.tablet) {
    jQuery('#viewport').attr('content', 'width=1024');
  }
};
