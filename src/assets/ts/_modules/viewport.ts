import { detection as detect } from './detect';

export const viewPort = (): void => {
  if (detect().device.tablet) {
    const target = '#viewport';
    const el = document.querySelector(target);
    if (!el) {
      throw new ReferenceError(`Element #${target} not found.`);
    }
    el.setAttribute('content', 'width=1024');
  }
};
