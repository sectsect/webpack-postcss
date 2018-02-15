export default () => {
  const detect = {
    desktop: !isMobile.any,
    mobile: isMobile.any,
    phone: isMobile.phone,
    tablet: isMobile.tablet,
    chrome: (bowser.chrome) ? bowser.version : false,
    firefox: (bowser.firefox) ? bowser.version : false,
    safari: (bowser.safari) ? bowser.version : false,
    msie: (bowser.msie) ? bowser.version : false,
    msedge: (bowser.msedge) ? bowser.version : false,
    iPhone: isMobile.apple.phone,
    androidphone: isMobile.android.phone,
    iOS: isMobile.apple.device,
    androidOS: isMobile.android.device,
    breakpoint: 768,
  };
  return detect;
};
