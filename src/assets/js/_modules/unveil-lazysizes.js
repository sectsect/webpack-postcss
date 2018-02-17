export default (el) => {
  jQuery(el).each((i, e) => {
    lazySizes.loader.unveil(e);
  });
};
