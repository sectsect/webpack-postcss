import 'lazysizes/plugins/unveilhooks/ls.unveilhooks';
import lazySizes from 'lazysizes';

declare var jQuery: any;

export const unveil = (el: Element): void => {
  jQuery(el).each((_i: number, e: Element): void => {
    lazySizes.loader.unveil(e);
  });
};
