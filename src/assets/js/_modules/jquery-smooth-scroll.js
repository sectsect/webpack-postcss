import 'jquery-smooth-scroll';

export default () => {
  jQuery("a[href^='#']").on('click', e => {
    const h = parseInt(`-${jQuery('#header').outerHeight(true)}`, 10);
    const ofs = jQuery(e.currentTarget)
      .parent()
      .hasClass('pageTop')
      ? 0
      : h;
    const tgt = jQuery(e.currentTarget).attr('href');
    jQuery.smoothScroll({
      easing: 'easeOutQuint',
      speed: 800,
      offset: ofs,
      scrollTarget: tgt,
    });
    return false;
  });

  // Run scroll on page load, if the URL has the parameter of '?id='.
  const url = jQuery(window.location).attr('href');
  if (url.includes('?id=')) {
    const urlsp = url.split('?id=');
    const hash = `#${urlsp[urlsp.length - 1]}`;
    const t = jQuery(hash);
    setTimeout(() => {
      const p = t.offset().top - jQuery('#header').outerHeight(true); // Subtract the height of Header with variable "headerH"
      jQuery('html, body').animate(
        {
          scrollTop: p,
        },
        1000,
        'easeOutQuint',
      );
    }, 300);
  }
};
