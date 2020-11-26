import 'core-js/modules/es.object.assign';
import 'core-js/modules/es.array.from';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import MicroModal from 'micromodal';

export const modal = () => {
  const toggleBodyScrol = (id, action) => {
    const el = document.querySelector(`#${id}`);
    if (action === 'show') {
      disableBodyScroll(el);
    } else {
      enableBodyScroll(el);
    }
  };

  MicroModal.init({
    // onShow: mdl => console.info(`${mdl.id} is shown`), // [1]
    // onClose: mdl => console.info(`${mdl.id} is hidden`), // [2]
    // openTrigger: 'data-custom-open', // [3]
    // closeTrigger: 'data-custom-close', // [4]
    // disableScroll: true,
    disableFocus: false, // [6]
    awaitCloseAnimation: true, // [7]
    // debugMode: true, // [8]
    onShow: mdl => {
      if (mdl && mdl.id) {
        toggleBodyScrol(mdl.id, 'show');
      }
    },
    onClose: mdl => {
      if (mdl && mdl.id) {
        toggleBodyScrol(mdl.id, 'close');
      }
    },
  });
};
