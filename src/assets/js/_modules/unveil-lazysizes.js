export const unveil = el => {
  jQuery(el).each((i, e) => {
    lazySizes.loader.unveil(e);
  });
};
