declare let jQuery: any;

export const inlineSVG = () => {
  jQuery
    .ajax({
      url: '/assets/images/svg/symbol.svg',
    })
    .done((r: HTMLElement) => {
      const svg = jQuery(r)
        .find('svg')
        .addClass('svg-icon-lib');
      jQuery('body').prepend(svg);
    });
};
