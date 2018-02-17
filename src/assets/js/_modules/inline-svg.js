const __svg__ = {
  path: '../../../../src/assets/images/svg/raw/**/*.svg',
  name: '../../assets/images/svg/symbol.svg',
};
require('webpack-svgstore-plugin/src/helpers/svgxhr')(__svg__);

export default (detect) => {
  /*= =================================================
  Fix bug that inline svg does not inserted on IE10
  ================================================== */
  if (detect.device.msie && detect.device.msie <= 10) {
    jQuery.ajax({
      type: 'get',
      url: '/assets/images/svg/symbol.svg',
    }).done((data) => {
      const svg = jQuery(data).find('svg');
      jQuery('body').prepend(svg);
    });
  }
};
