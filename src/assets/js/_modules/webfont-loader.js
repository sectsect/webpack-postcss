import WebFont from 'webfontloader';

export const WebFontLoader = () => {
  WebFont.load({
    // custom: {
    //   families: ['NotoSansCJKjp:n4,n7'],
    //   urls: ['/assets/css/fonts.css'],
    //   // urls: [`${wp_data.template_dir_uri}/assets/css/fonts.css?v=${wp_data.theme_version}`],
    // },
    google: {
      families: ['Noto+Sans+JP:400,700'],
      // families: ['Josefin Sans:400,600,700'],
      // families: ['Raleway:300,400,500,600,700'],
      // families: ['Crimson+Text::latin', 'Cinzel::latin', 'Italianno::latin', 'Pinyon+Script::latin'],
    },
  });
};
