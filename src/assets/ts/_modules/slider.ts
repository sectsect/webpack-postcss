import 'slick-carousel';
import loadImage from 'image-promise';
import { unveil } from './unveil-lazysizes';

/**
 * Slider
 *
 * @returns void
 */
export const slider = (): void => {
  /**
   * Run Slick Slider
   *
   * @param  parentid - The parent element ID
   */
  const runSlider = (parentid: string) => {
    const $slickElement = $(`${parentid} .slider-for`);

    $slickElement.on('init', e => {
      // $slickElement.on('init', (e, slick: { slideCount: number }) => {
      // Re-execute 'unveil' on lazyload for missing image in last slide on 'infinite' mode
      unveil($(e.currentTarget).find('figure img'));
      setTimeout(() => {
        $(e.currentTarget).closest('.slider_wrap').addClass('ready');
      }, 300);
    });

    // Restart autoplay (Slick Slider autoplay stops when touched on mobile/tablet)
    // @ https://stackoverflow.com/questions/48402481/slick-slider-autoplay-stops-when-touched-on-mobile-tablet
    $(`${parentid} .slider`).on('touchstart', e => {
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
  };

  /**
   * Run slider asynchronously
   *
   * @param  parentid - The ID of the slider container
   * @param  self - The object instance
   */
  const asyncSlider = async (parentid: string, self: HTMLElement) => {
    try {
      const result = (await unveil($(self).find('figure img'))) as HTMLImageElement[];
      if (result) {
        const images = result.filter(img => img.dataset.srcset !== undefined);
        // await loadImage(images);
        await loadImage(images)
          .then(allImgs => {
            console.log(allImgs.length, 'images loaded!', allImgs);
            allImgs.forEach(img => {
              console.log($(img).attr('data-srcset'));
            });
          })
          .catch((e: unknown) => {
            // console.error('One or more images have failed to load :(');
            // console.error(e.errored);
            // console.info('But these loaded fine:');
            // console.info(e.loaded);
            if (e instanceof ReferenceError) {
              console.error(e.stack);
            } else if (e instanceof Error) {
              console.log(e.stack);
            } else {
              throw e;
            }
          });
        runSlider(parentid);
      }
    } catch (e: unknown) {
      if (e instanceof ReferenceError) {
        console.error(e.stack);
      } else if (e instanceof Error) {
        console.log(e.stack);
      } else {
        throw e;
      }
    }
  };

  $('.slider_wrap').each((_index: number, element: HTMLElement) => {
    const parentid = `#${$(element).attr('id')}`;
    asyncSlider(parentid, element);
  });
};
