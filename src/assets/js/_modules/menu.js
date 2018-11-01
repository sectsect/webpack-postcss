import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

export default () => {
  const runModal = (c, t) => {
    // Toggle Body Scroll
    const r = (jQuery('body').hasClass(c)) ? enableBodyScroll(t) : disableBodyScroll(t);
    // Add class to body
    jQuery('body').toggleClass(c);
  };
  jQuery('#nav-toggle').on('click', () => {
    // Lock the scroll for body
    const t = document.querySelector('#nav-panel');
    const c = 'menu-opened';
    runModal(c, t);

    // if (jQuery('body').hasClass('menu-opened')) {
    //   jQuery('body').removeClass('menu-opened');
    // } else {
    //   jQuery('body').addClass('menu-opened');
    // }
  });
};
