import 'jquery-match-height-browserify';

declare let jQuery: any;

export default (): void => {
  jQuery('.mh-byrow').matchHeight();
  jQuery('.mh').matchHeight({ byRow: false });
};
