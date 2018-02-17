import 'jquery-match-height-browserify';

export default () => {
  jQuery('.mh-byrow').matchHeight();
  jQuery('.mh').matchHeight({ byRow: false });
};
