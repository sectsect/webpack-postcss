export const inlineSVG = () => {
  $.ajax({
    url: '/assets/images/svg/symbol.svg',
  }).done((r: HTMLElement) => {
    const svg: JQuery<SVGSVGElement> = $(r).find('svg').addClass('svg-icon-lib');
    $('body').prepend(svg);
  });
};
