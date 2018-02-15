import 'jquery.dotdotdot';

export default () => {
  if (jQuery('.truncation').length) {
    jQuery('.truncation').dotdotdot({
      watch: 'window',
      truncate: 'letter',
      callback(isTruncated) {
        jQuery(this).addClass('ready');
      },
    });
  }
};
