import 'dotdotdot-js';

declare let jQuery: any;

export const dotdotdot = (): void => {
  if (jQuery('.truncation').length) {
    jQuery('.truncation').dotdotdot({
      watch: 'window',
      height: 'watch',
      truncate: 'letter',
      callback(isTruncated: any): void {
        console.log(isTruncated);

        jQuery(this).addClass('ready');
      },
    });
  }
};
