import 'es6-promise/auto';

export const unveil = el => {
  const promises = [];
  // jQuery(el).forEach(e => {
  jQuery(el).each((i, e) => {
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
