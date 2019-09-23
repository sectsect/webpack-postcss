declare var jQuery: any;

export default (): void => {
  jQuery
    .ajax({
      url: '/assets/images/svg/symbol.svg',
    })
    .done((r: any) => {
      const svg = jQuery(r)
        .find('svg')
        .addClass('svg-icon-lib');
      jQuery('body').prepend(svg);
    });
};
