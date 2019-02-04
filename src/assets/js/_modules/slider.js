import slick from 'slick-carousel';
import unveil from './unveil-lazysizes';

export default () => {
  jQuery('.slider_wrap').each(function () {
    const parentid = `#${jQuery(this).attr('id')}`;
    jQuery(`${parentid} .slider`).on('init', function (event, slick) {
      jQuery(this).closest('.slider_wrap').addClass('ready');
      unveil(jQuery(this).find('.slick-slide img'));
    });
    jQuery(`${parentid} .slider`).slick({
      dots: true,
      infinite: true,
      speed: 800,
      fade: true,
      pauseOnHover: false,
      cssEase: 'ease-in-out',
      autoplay: true,
      autoplaySpeed: 3000,
    });

    // Restart autoplay (Slick Slider autoplay stops when touched on mobile/tablet)
    // @ https://stackoverflow.com/questions/48402481/slick-slider-autoplay-stops-when-touched-on-mobile-tablet
    jQuery(`${parentid} .slider`).on('touchstart', e => {
      jQuery(e.currentTarget).slick('slickPlay');
    });

    // Restart autoplay (Autoplay is stopped after clicking the slick-dot)
    // @ https://github.com/kenwheeler/slick/issues/2655#issuecomment-313923749
    jQuery(`${parentid} .slider`).on("beforeChange", function(event, slick, currentSlide, nextSlide) {
      jQuery(`${parentid} .slider .slick-dots li`).removeClass('slick-active');
      jQuery(`${parentid} .slider .slick-dots li button`).attr('aria-pressed', 'false').focus(function() {
        this.blur();
      });
    });
  });
};
