import 'slick-carousel';
import { unveil } from './unveil-lazysizes';

export const slider = (): void => {
  const runSlider = (parentid: string) => {
    const $slickElement = $(`${parentid} .slider-for`);
    $slickElement.on(
      'init',
      (
        e,
        // _event: any,
        // _slick: { slideCount: number },
        // _currentSlide: any,
        // _nextSlide: any,
      ) => {
        $(e.currentTarget).closest('.slider_wrap').addClass('ready');
      },
    );

    $(`${parentid} .slider-for`).slick({
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
    $(`${parentid} .slider-nav`).slick({
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
    $(`${parentid} .slider`).on('touchstart', (e: { currentTarget: HTMLElement }) => {
      $(e.currentTarget).slick('slickPlay');
    });

    // Restart autoplay (Autoplay is stopped after clicking the slick-dot)
    // @ https://github.com/kenwheeler/slick/issues/2655#issuecomment-313923749
    $(`${parentid} .slider`).on(
      'beforeChange',
      // (_event: any, _slick: any, _currentSlide: number, _nextSlide: any) => {
      () => {
        $(`${parentid} .slider .slick-dots li`).removeClass('slick-active');
        $(`${parentid} .slider .slick-dots li button`)
          .attr('aria-pressed', 'false')
          .focus(e => {
            e.currentTarget.blur();
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
      const result = await unveil($(self).find('figure img'));
      if (result) {
        runSlider(parentid);
      }
    } catch (err) {
      alert(err);
    }
  };

  $('.slider_wrap').each((_index: number, element: HTMLElement) => {
    const parentid = `#${$(element).attr('id')}`;
    asyncSlider(parentid, element);
  });
};
