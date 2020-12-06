import Glide from '@glidejs/glide';
import { unveil } from './unveil-lazysizes';

export const glide = (): void => {
  const runSlider = (el: Element) => {
    const gl = new Glide(el, {
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
    });
    gl.on('mount.after', () => {
      $(el).addClass('ready');
    });
    gl.mount();
  };

  const asyncSlider = async (self: Element) => {
    try {
      const result = await unveil($(self).find('figure img'));
      if (result) {
        runSlider(self);
      }
    } catch (err) {
      alert(err);
    }
  };

  // @ https://github.com/glidejs/glide/issues/202
  const sliders = document.querySelectorAll('.glide_wrap');
  sliders.forEach(slider => {
    asyncSlider(slider);
  });
};
