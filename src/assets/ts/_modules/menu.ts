import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

/**
 * Drawer Menu
 *
 * @returns void
 */
export const menu = (): void => {
  /**
   * Toggle `aria-hidden` attribute
   *
   * @param  t - The element
   * @param  bool - The status to toggle
   */
  const toggleAriaHidden = (t: HTMLElement, bool: string) => {
    $(t).attr('aria-hidden', bool);
  };

  const togglePanel = (c: string, t: HTMLElement) => {
    let ariaHidden: 'true' | 'false' = 'true';
    if ($('body').hasClass(c)) {
      enableBodyScroll(t);
    } else {
      disableBodyScroll(t);
      ariaHidden = 'false';
    }

    toggleAriaHidden(t, ariaHidden);
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
