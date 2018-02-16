import isMobile from 'ismobilejs';
import bowser from 'bowser';
import Modernizr from 'modernizr';

export default () => {
  const detect = {
    device: {
      desktop: !isMobile.any,
      mobile: isMobile.any,
      phone: isMobile.phone,
      tablet: isMobile.tablet,
      chrome: (bowser.chrome) ? parseInt(bowser.version, 10) : false,
      firefox: (bowser.firefox) ? parseInt(bowser.version, 10) : false,
      safari: (bowser.safari) ? parseInt(bowser.version, 10) : false,
      msie: (bowser.msie) ? parseInt(bowser.version, 10) : false,
      msedge: (bowser.msedge) ? parseInt(bowser.version, 10) : false,
      iPhone: isMobile.apple.phone,
      androidphone: isMobile.android.phone,
      iOS: isMobile.apple.device,
      androidOS: isMobile.android.device,
    },
    css: {
      cssgrid: Modernizr.cssgrid,
      flexbox: Modernizr.flexbox,
      flexboxtweener: Modernizr.flexboxtweener,
      objectfit: Modernizr.objectfit,
    },
    breakpoint: 768,
  };
  return detect;
};
