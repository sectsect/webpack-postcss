// import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

export const menu = () => {
  const togglePanel = (c, t) => {
    // Toggle Body Scroll
    // eslint-disable-next-line no-unused-vars
    const r = jQuery('body').hasClass(c) ? enableBodyScroll(t) : disableBodyScroll(t);
    // Add class to body
    jQuery('body').toggleClass(c);
  };
  jQuery('#nav-toggle').on('click', () => {
    // Lock the scroll for body
    const t = document.querySelector('#nav-panel');
    const c = 'menu-opened';
    togglePanel(c, t);
  });
};
