import { detect as detectBrowser } from 'detect-browser';
import isMobile from 'ismobilejs';
import Modernizr from 'modernizr';

const browser = detectBrowser();

type Versionable = number | boolean;

interface Detection {
  device: Device;
  htmlcss: Htmlcss;
  breakpoints: Breakpoints;
}

interface Breakpoints {
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

interface Device {
  desktop: boolean;
  mobile: boolean;
  phone: boolean;
  tablet: boolean;
  chrome: Versionable;
  firefox: Versionable;
  safari: Versionable;
  msie: Versionable;
  msedge: Versionable;
  iPhone: boolean;
  androidphone: boolean;
  iOS: boolean;
  androidOS: boolean;
  screen: Screen;
}

interface Htmlcss {
  cssgrid: boolean;
  flexbox: boolean;
  flexboxtweener: boolean;
  objectfit: boolean;
}

interface Screen {
  dpr: number;
  w: number;
}

export const detect = (): Detection => {
  const bn: string = browser?.name ?? '';
  const bv: number = parseInt(browser?.version ?? '0', 10);
  const ww = window.innerWidth;
  const dpr = window.devicePixelRatio;
  const w = dpr * ww;
  const dt: Detection = {
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
