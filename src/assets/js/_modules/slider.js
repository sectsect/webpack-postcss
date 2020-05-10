import 'slick-carousel';
import { unveil } from './unveil-lazysizes';

export const slider = () => {
  const runSlider = parentid => {
    jQuery(`${parentid} .slider-for`).on('init', function (event, slick) {
      jQuery(this).closest('.slider_wrap').addClass('ready');
      // unveil(jQuery(this).find('.slick-slide img'));
    });
    // jQuery(`${parentid} .slider`).slick({
    //   dots: true,
    //   infinite: true,
    //   speed: 800,
    //   fade: true,
    //   pauseOnHover: false,
    //   cssEase: 'ease-in-out',
    //   autoplay: true,
    //   autoplaySpeed: 3000,
    //   responsive: [
    //     {
    //       breakpoint: 767,
    //       settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 2,
    //       },
    //     },
    //   ],
    // });

    jQuery(`${parentid} .slider-for`).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 600,
      dots: true,
      arrows: true,
      fade: false,
      asNavFor: `${parentid} .slider-nav`,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: false,
      // adaptiveHeight: !detect().device.androidphone, // Disable 'adaptiveHeight' option on Android Phone only / See issue: #166
      // lazyLoad: 'progressive',
    });
    jQuery(`${parentid} .slider-nav`).slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      speed: 600,
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
    jQuery(`${parentid} .slider`).on('touchstart', e => {
      jQuery(e.currentTarget).slick('slickPlay');
    });

    // Restart autoplay (Autoplay is stopped after clicking the slick-dot)
    // @ https://github.com/kenwheeler/slick/issues/2655#issuecomment-313923749
    jQuery(`${parentid} .slider`).on('beforeChange', (event, slick, currentSlide, nextSlide) => {
      jQuery(`${parentid} .slider .slick-dots li`).removeClass('slick-active');
      jQuery(`${parentid} .slider .slick-dots li button`)
        .attr('aria-pressed', 'false')
        .focus(function () {
          this.blur();
        });
    });
  };

  const asyncSlider = async (parentid, self) => {
    try {
      const result = await unveil(jQuery(self).find('figure img'));
      if (result) {
        runSlider(parentid);
      }
    } catch (err) {
      alert(err);
    }
  };

  jQuery('.slider_wrap').each((index, element) => {
    const parentid = `#${jQuery(element).attr('id')}`;
    asyncSlider(parentid, element);
  });
};
