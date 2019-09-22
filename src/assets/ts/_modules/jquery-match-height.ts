import 'jquery-match-height-browserify';

declare var jQuery: any;

export default (): void => {
  jQuery('.mh-byrow').matchHeight();
  jQuery('.mh').matchHeight({ byRow: false });
};
