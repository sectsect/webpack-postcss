import { detect as detectBrowser } from 'detect-browser';
import isMobile from 'ismobilejs';
import Modernizr from 'modernizr';

const browser = detectBrowser();

export const detect = () => {
  const bn = browser.name;
  const bv = parseInt(browser.version, 10);
  const ww = window.innerWidth;
  const dpr = window.devicePixelRatio;
  const w = dpr * ww;
  const dt = {
    device: {
      desktop: !isMobile().any,
      mobile: isMobile().any,
      phone: isMobile().phone,
      tablet: isMobile().tablet,
      chrome: bn === 'chrome' ? bv : false,
      firefox: bn === 'firefox' ? bv : false,
      safari: bn === 'safari' ? bv : false,
      msie: bn === 'ie' ? bv : false,
      msedge: bn === 'edge' ? bv : false,
      iPhone: isMobile().apple.phone,
      androidphone: isMobile().android.phone,
      iOS: isMobile().apple.device,
      androidOS: isMobile().android.device,
      screen: {
        dpr,
        w, // 'w' unit on 'srcset'
      },
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
  return dt;
};
