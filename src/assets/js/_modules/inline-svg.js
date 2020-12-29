export const inlineSVG = () => {
  jQuery
    .ajax({
      url: '/assets/images/svg/symbol.svg',
    })
    .done(r => {
      const svg = jQuery(r).find('svg');
      jQuery('body').prepend(svg);
    });
};
