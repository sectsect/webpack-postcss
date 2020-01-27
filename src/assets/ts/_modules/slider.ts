import 'slick-carousel';
import { unveil } from './unveil-lazysizes';

declare let jQuery: any;

export const slider = () => {
  const runSlider = (parentid: string) => {
    const $slickElement = jQuery(`${parentid} .slider-for`);
    $slickElement.on('init', function(
      this: HTMLElement,
      // _event: any,
      // _slick: { slideCount: number },
      // _currentSlide: any,
      // _nextSlide: any,
    ) {
      jQuery(this)
        .closest('.slider_wrap')
        .addClass('ready');
    });

    jQuery(`${parentid} .slider-for`).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 200,
      arrows: true,
      fade: true,
      asNavFor: `${parentid} .slider-nav`,
      infinite: true,
      adaptiveHeight: true,
      // lazyLoad: 'progressive',
    });
    jQuery(`${parentid} .slider-nav`).slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      speed: 200,
      asNavFor: `${parentid} .slider-for`,
      arrows: false,
      dots: false,
      infinite: true,
      // lazyLoad: 'progressive',
      focusOnSelect: true,
      // responsive: [{
      //     breakpoint: 768,
      //     settings: {
      //         slidesToShow: 4,
      //         slidesToScroll: 1,
      //     }
      // }]
    });

    // Restart autoplay (Slick Slider autoplay stops when touched on mobile/tablet)
    // @ https://stackoverflow.com/questions/48402481/slick-slider-autoplay-stops-when-touched-on-mobile-tablet
    jQuery(`${parentid} .slider`).on('touchstart', (e: { currentTarget: HTMLElement }) => {
      jQuery(e.currentTarget).slick('slickPlay');
    });

    // Restart autoplay (Autoplay is stopped after clicking the slick-dot)
    // @ https://github.com/kenwheeler/slick/issues/2655#issuecomment-313923749
    jQuery(`${parentid} .slider`).on(
      'beforeChange',
      // (_event: any, _slick: any, _currentSlide: number, _nextSlide: any) => {
      () => {
        jQuery(`${parentid} .slider .slick-dots li`).removeClass('slick-active');
        jQuery(`${parentid} .slider .slick-dots li button`)
          .attr('aria-pressed', 'false')
          .focus(function(this: HTMLElement) {
            this.blur();
          });
      },
    );

    // $slickElement.on(
    //   'afterChange',
    //   (_event: any, _slick: any, currentSlide: number, _nextSlide: any) => {
    //     // For GA Tracking
    //     const slidenum: number = currentSlide + 1;
    //     const slider: string = parentid.replace('#slider_', '');
    //   },
    // );
  };

  const asyncSlider = async (parentid: string, self: HTMLElement) => {
    try {
      const result = await unveil(jQuery(self).find('figure img'));
      if (result) {
        runSlider(parentid);
      }
    } catch (err) {
      alert(err);
    }
  };

  jQuery('.slider_wrap').each((_index: number, element: HTMLElement) => {
    const parentid = `#${jQuery(element).attr('id')}`;
    asyncSlider(parentid, element);
  });
};
