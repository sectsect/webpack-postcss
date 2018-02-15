export default () => {
  jQuery('#nav_toggle').on('click', () => {
    jQuery('body').toggleClass('menu-opened');
  });
};
