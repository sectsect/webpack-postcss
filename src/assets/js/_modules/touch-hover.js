export const touchHover = elem => {
  elem.push('.touch_hover');
  const el = elem.join(',');
  if (el) {
    // we use touchstart and touchend events on buttons
    let enterEvent = 'touchstart';
    let leaveEvent = 'touchend';
    // we use mousedown and mouseup events on big items
    let enterBigEvent = 'mousedown';
    let leaveBigEvent = 'mouseup';
    if (!('ontouchstart' in window)) {
      enterEvent = 'mouseenter';
      enterBigEvent = 'mouseenter';
      leaveEvent = 'mouseleave';
      leaveBigEvent = 'mouseleave';
    }
    jQuery(el).on(enterEvent, e => {
      jQuery(e.currentTarget).addClass('on');
    });
    jQuery(el).on(leaveEvent, e => {
      jQuery(e.currentTarget).removeClass('on');
    });
  }
};
