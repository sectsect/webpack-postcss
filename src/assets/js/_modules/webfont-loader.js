import WebFont from 'webfontloader';

export default () => {
  WebFont.load({
    google: {
      families: ['Josefin Sans:400,600,700'],
      // families: ['Crimson+Text::latin', 'Cinzel::latin', 'Italianno::latin', 'Pinyon+Script::latin'],
    },
  });
};
