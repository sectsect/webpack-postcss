import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

declare let jQuery: any;

export const menu = () => {
  const togglePanel = (c: string, t: HTMLElement) => {
    if (jQuery('body').hasClass(c)) {
      enableBodyScroll(t);
    } else {
      disableBodyScroll(t);
    }
    jQuery('body').toggleClass(c);
  };

  jQuery('#nav-toggle').on('click', () => {
    const c = 'menu-opened';
    // Lock the scroll for body
    const t = document.querySelector<HTMLElement>('#nav-panel');
    if (c && t) {
      togglePanel(c, t);
    }
  });
};
