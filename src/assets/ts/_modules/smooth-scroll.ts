import MoveTo from 'moveto';

declare let jQuery: any;

export const smoothScroll = (): void => {
  const runSmoothScroll = (id: string, ofs: number) => {
    const moveTo = new MoveTo({
      duration: 600,
      tolerance: ofs,
    });
    const target = document.getElementById(id) as HTMLElement;
    moveTo.move(target);
  };

  const hd = jQuery('#header');
  const pos = hd.css('position');

  jQuery("a[href^='#']").on('click', (e: any): boolean => {
    const h = pos === 'fixed' ? +hd.outerHeight(true) * -1 : 0;
    const ofs = jQuery(e.currentTarget)
      .parent()
      .hasClass('page-top')
      ? 0
      : h;
    const id = jQuery(e.currentTarget)
      .attr('href')
      .replace('#', '');
    runSmoothScroll(id, ofs);

    return false;
  });

  // Run scroll on page load, if the URL has the query parameter of 'id'.
  const url = jQuery(window.location).attr('href');
  if (url.includes('?id=')) {
    const spl = url.split('?id=');
    const id = spl[spl.length - 1];
    setTimeout(() => {
      const h = pos === 'fixed' ? parseInt(hd.outerHeight(true), 10) : 0;
      const ofs = h;
      runSmoothScroll(id, ofs);
    }, 300);
  }
};
