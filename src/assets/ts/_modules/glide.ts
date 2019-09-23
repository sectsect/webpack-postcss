import Glide from '@glidejs/glide';
// import unveil from './unveil-lazysizes';

declare let jQuery: any;

export default (): void => {
  jQuery('.glide_wrap').each(function(): void {
    const c = jQuery(this).attr('data-glide-count');
    if (c !== '1') {
      const glide = new Glide(this, {
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
      glide.on('mount.after', (): void => {
        jQuery(this).addClass('ready');
        // unveil(jQuery(this).find('.glide__slide img'));
      });
      glide.mount();
    } else {
      jQuery(this).addClass('ready');
    }
  });
};
