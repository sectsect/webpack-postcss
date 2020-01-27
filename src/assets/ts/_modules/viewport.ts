import { detection as detect } from './detect';

declare let jQuery: any;

export const viewPort = () => {
  if (detect().device.tablet) {
    jQuery('#viewport').attr('content', 'width=1024');
  }
};
