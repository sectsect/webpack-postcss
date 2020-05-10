import MoveTo from 'moveto';

export const smoothScroll = () => {
  const runSmoothScroll = (id, ofs) => {
    const moveTo = new MoveTo({
      duration: 600,
      tolerance: ofs,
    });
    const target = document.getElementById(id);
    moveTo.move(target);
  };

  const hd = jQuery('#header');
  const pos = hd.css('position');

  jQuery("a[href^='#']").on('click', e => {
    const h = pos === 'fixed' ? parseInt(hd.outerHeight(true) * -1, 10) : 0;
    const ofs = jQuery(e.currentTarget).parent().hasClass('page-top') ? 0 : h;
    const id = jQuery(e.currentTarget).attr('href').replace('#', '');
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
