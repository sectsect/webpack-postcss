import 'es6-promise/auto';
// import 'lazysizes/plugins/unveilhooks/ls.unveilhooks';
// import lazySizes from 'lazysizes';

declare let jQuery: any;
declare let lazySizes: any;

export const unveil = (el: JQuery<HTMLElement>): Promise<string> => {
  const promises: Promise<string>[] = [];
  jQuery(el).each((_i: number, e: JQuery) => {
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