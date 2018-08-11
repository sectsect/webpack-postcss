import isMobile from 'ismobilejs';
import bowser from 'bowser';
import Modernizr from 'modernizr';

export default () => {
  const browser = bowser.getParser(window.navigator.userAgent);
  const browserInfo = browser.getBrowser();
  const bn = browserInfo.name;
  const bv = parseInt(browserInfo.version, 10);
  const detect = {
    device: {
      desktop: !isMobile.any,
      mobile: isMobile.any,
      phone: isMobile.phone,
      tablet: isMobile.tablet,
      chrome: (bn === 'Chrome') ? bv : false,
      firefox: (bn === 'Firefox') ? bv : false,
      safari: (bn === 'Safari') ? bv : false,
      msie: (bn === 'Internet Explorer') ? bv : false,
      msedge: (bn === 'Microsoft Edge') ? bv : false,
      iPhone: isMobile.apple.phone,
      androidphone: isMobile.android.phone,
      iOS: isMobile.apple.device,
      androidOS: isMobile.android.device,
    },
    htmlcss: {
      cssgrid: Modernizr.cssgrid,
      flexbox: Modernizr.flexbox,
      flexboxtweener: Modernizr.flexboxtweener,
      objectfit: Modernizr.objectfit,
    },
    breakpoints: {
      sm: 768,
      md: 992,
      lg: 1920,
      xl: 2048,
    },
  };
  return detect;
};
