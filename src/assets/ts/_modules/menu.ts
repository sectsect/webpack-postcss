import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

declare let jQuery: any;

export const menu = () => {
  const togglePanel = (c: string, t: any) => {
    if (jQuery('body').hasClass(c)) {
      enableBodyScroll(t);
    } else {
      disableBodyScroll(t);
    }
    jQuery('body').toggleClass(c);
  };

  jQuery('#nav-toggle').on('click', () => {
    // Lock the scroll for body
    const t = document.querySelector<HTMLElement>('#nav-panel');
    const c = 'menu-opened';
    togglePanel(c, t);
  });
};
