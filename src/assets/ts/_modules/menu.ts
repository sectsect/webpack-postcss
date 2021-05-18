import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

export const menu = (): void => {
  const togglePanel = (c: string, t: HTMLElement) => {
    if ($('body').hasClass(c)) {
      enableBodyScroll(t);
    } else {
      disableBodyScroll(t);
    }
    $('body').toggleClass(c);
  };

  $('#nav-toggle').on('click', () => {
    const c = 'menu-opened';
    // Lock the scroll for body
    const t = document.querySelector<HTMLElement>('#nav-panel');
    if (c && t) {
      togglePanel(c, t);
    }
  });
};
