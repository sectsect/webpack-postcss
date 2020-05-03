import 'dotdotdot-js';

export const dotdotdot = () => {
  if ($('.truncation').length) {
    ($('.truncation') as any).dotdotdot({
      watch: 'window',
      height: 'watch',
      truncate: 'letter',
      callback(this: HTMLElement, isTruncated: boolean) {
        console.log(isTruncated);
        $(this).addClass('ready');
      },
    });
  }
};
