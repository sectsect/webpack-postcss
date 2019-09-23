import detect from './detect';

declare let jQuery: any;

export default (): void => {
  if (detect().device.tablet) {
    jQuery('#viewport').attr('content', 'width=1024');
  }
};
