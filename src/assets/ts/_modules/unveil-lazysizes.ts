import 'es6-promise/auto';
// import 'lazysizes/plugins/unveilhooks/ls.unveilhooks';
// import lazySizes from 'lazysizes';

declare let lazySizes: { loader: { unveil(DOMNode: Node): void } };

/**
 * Unveil LazySizes
 *
 * @param  el - The element to unveil
 * @returns Promise
 */
export const unveil = (el: JQuery<Element>): Promise<Node[]> => {
  const promises: Promise<Node>[] = [];
  $(el).each((_i: number, e: Node) => {
    promises.push(
      new Promise(resolve => {
        lazySizes.loader.unveil(e);
        resolve(e);
      }),
    );
  });

  // @ https://stackoverflow.com/a/46650142/4542456
  return Promise.all(promises).then(responses => responses);
};
