import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

declare var jQuery: any;

export default (): void => {
  const togglePanel = (c: string, t: any): any => {
    if (jQuery('body').hasClass(c)) {
      enableBodyScroll(t);
    } else {
      disableBodyScroll(t);
    }
    jQuery('body').toggleClass(c);
  };

  jQuery('#nav-toggle').on('click', (): void => {
    // Lock the scroll for body
    const t = document.querySelector('#nav-panel');

    const c = 'menu-opened';
    togglePanel(c, t);
  });
};
