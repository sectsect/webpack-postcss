export const inlineSVG = (): void => {
  $.ajax({
    url: '/assets/images/svg/symbol.svg',
  }).done((r: HTMLElement) => {
    const svg: JQuery<SVGSVGElement> = $(r).find('svg');
    $('body').prepend(svg);
  });
};
