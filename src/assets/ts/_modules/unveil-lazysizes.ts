import 'es6-promise/auto';
// import 'lazysizes/plugins/unveilhooks/ls.unveilhooks';
// import lazySizes from 'lazysizes';

declare let lazySizes: any;

/**
 * Unveil LazySizes
 *
 * @param  el - The element to unveil
 * @returns Promise
 */
export const unveil = (el: JQuery<Element>): Promise<string> => {
  const promises: Promise<string>[] = [];
  $(el).each((_i: number, e: Element) => {
    promises.push(
      new Promise<string>(resolve => {
        lazySizes.loader.unveil(e);
        resolve('resolved');
      }),
    );
  });

  return Promise.all(promises).then(responses => {
    return responses[0]; // @ https://stackoverflow.com/a/46650142/4542456
  });
};
