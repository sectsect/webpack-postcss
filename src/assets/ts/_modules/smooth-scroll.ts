import MoveTo from 'moveto';

export const smoothScroll = () => {
  const runSmoothScroll = (id: string, ofs: number) => {
    const moveTo = new MoveTo({
      duration: 600,
      tolerance: ofs,
    });
    const target = document.getElementById(id) as HTMLElement;
    moveTo.move(target);
  };

  const hd: JQuery = $('#header');
  const oh = hd.outerHeight(true);
  const pos = hd.css('position');

  $("a[href^='#']").on('click', (e: { currentTarget: HTMLElement }): boolean => {
    const h = pos === 'fixed' && oh !== undefined ? oh * -1 : 0;
    const ofs = $(e.currentTarget).parent().hasClass('page-top') ? 0 : h;
    const href = $(e.currentTarget).attr('href');
    if (href) {
      const id: string = href.replace('#', '');
      runSmoothScroll(id, ofs);
    }

    return false;
  });

  // Run scroll on page load, if the URL has the query parameter of 'id'.
  const url = $(window.location).attr('href');
  if (url && url.includes('?id=')) {
    const spl: string[] = url.split('?id=');
    const id = spl[spl.length - 1];
    setTimeout(() => {
      const h = pos === 'fixed' && oh !== undefined ? oh : 0;
      const ofs = h;
      runSmoothScroll(id, ofs);
    }, 300);
  }
};
