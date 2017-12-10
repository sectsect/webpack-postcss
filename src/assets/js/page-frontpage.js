import slick from 'slick-carousel';
import commons from './_commons';

const hello = 'Hello!!';
console.log(hello);

const sect = 'SECT!!';
console.log(sect);


jQuery(() => {
  jQuery('.slider_wrap').each(function () {
    const parentid = `#${jQuery(this).attr('id')}`;
    jQuery('.slider').on('init', function (event, slick) {
      jQuery(this).closest('.slider_wrap').addClass('ready');
    });
    jQuery(`${parentid} .slider-for`).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 200,
      arrows: true,
      fade: false,
      asNavFor: `${parentid} .slider-nav`,
    });
    jQuery(`${parentid} .slider-nav`).slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      speed: 200,
      asNavFor: `${parentid} .slider-for`,
      arrows: false,
      dots: false,
      //	centerMode		  : true,
      focusOnSelect: true,
      responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      }],
    });
  });
});
