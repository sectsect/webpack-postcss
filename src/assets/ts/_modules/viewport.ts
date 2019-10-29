import { detection as detect } from './detect';

declare let jQuery: any;

export const viewPort = (): void => {
  const d: any = detect();
  if (d.device.tablet) {
    jQuery('#viewport').attr('content', 'width=1024');
  }
};
