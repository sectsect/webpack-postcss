import 'lazysizes/plugins/unveilhooks/ls.unveilhooks';
import lazySizes from 'lazysizes';

declare var jQuery: any;

export default (el: Element): void => {
  jQuery(el).each((i: number, e: Element): void => {
    lazySizes.loader.unveil(e);
  });
};
