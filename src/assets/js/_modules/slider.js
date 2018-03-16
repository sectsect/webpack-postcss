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
  });
};
