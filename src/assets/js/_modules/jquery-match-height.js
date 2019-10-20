import 'jquery-match-height-browserify';

export const matchHeight = () => {
  jQuery('.mh-byrow').matchHeight();
  jQuery('.mh').matchHeight({ byRow: false });
};
