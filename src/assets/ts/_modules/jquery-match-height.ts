import 'jquery-match-height-browserify';

declare let jQuery: any;

export const matchHeight = (): void => {
  jQuery('.mh-byrow').matchHeight();
  jQuery('.mh').matchHeight({ byRow: false });
};
