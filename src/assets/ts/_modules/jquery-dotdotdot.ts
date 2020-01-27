import 'dotdotdot-js';

declare let jQuery: any;

export const dotdotdot = () => {
  if (jQuery('.truncation').length) {
    jQuery('.truncation').dotdotdot({
      watch: 'window',
      height: 'watch',
      truncate: 'letter',
      callback(this: HTMLElement, isTruncated: boolean) {
        console.log(isTruncated);
        jQuery(this).addClass('ready');
      },
    });
  }
};
