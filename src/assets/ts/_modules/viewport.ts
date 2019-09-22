import detect from './detect';

declare var jQuery: any;

export default (): void => {
  if (detect().device.tablet) {
    jQuery('#viewport').attr('content', 'width=1024');
  }
};
