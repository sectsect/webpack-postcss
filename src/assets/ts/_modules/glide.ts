import Glide from '@glidejs/glide';
import { unveil } from './unveil-lazysizes';

export const glide = (): void => {
  const runSlider = (el: HTMLElement) => {
    const obj = {
      type: 'carousel',
      autoplay: 4000,
      animationTimingFunc: 'ease-in-out',
      animationDuration: 600,
      hoverpause: false,
      gap: 0,
      perView: 1,
      // breakpoints: {
      //   767: {
      //     perView: 2,
      //   },
      //   // 1024: {
      //   //   perView: 1,
      //   // },
      // },
    };
    const gl = new Glide(el, obj);
    gl.on('mount.after', () => {
      $(el).addClass('ready');
    });
    gl.mount();
  };

  const asyncSlider = async (self: HTMLElement) => {
    try {
      const result = await unveil($(self).find('figure img'));
      if (result) {
        runSlider(self);
      }
    } catch (err) {
      alert(err);
    }
  };

  $('.glide_wrap').each((_i: number, el: HTMLElement) => {
    asyncSlider(el);
  });
};
