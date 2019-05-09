import 'dotdotdot-js';

export default () => {
  if (jQuery('.truncation').length) {
    jQuery('.truncation').dotdotdot({
      watch: 'window',
      height: 'watch',
      truncate: 'letter',
      callback(isTruncated) {
        jQuery(this).addClass('ready');
      },
    });
  }
};
