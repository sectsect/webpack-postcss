import 'es6-promise/auto';
import 'lazysizes/plugins/unveilhooks/ls.unveilhooks';
import lazySizes from 'lazysizes';

declare let jQuery: any;

export const unveil = (el: JQuery<HTMLElement>): any => {
  const promises: any[] = [];
  jQuery(el).each((_i: number, e: Element): void => {
    promises.push(
      new Promise<string>((resolve: any): void => {
        lazySizes.loader.unveil(e);
        resolve('resolved');
      }),
    );
  });

  return Promise.all(promises).then(responses => {
    return responses[0]; // @ https://stackoverflow.com/a/46650142/4542456
  });
};
