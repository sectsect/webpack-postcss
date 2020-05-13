import 'core-js/modules/es.object.assign';
import 'core-js/modules/es.array.from';
import MicroModal from 'micromodal';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

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
    // onShow: modal => console.info(`${modal.id} is shown`), // [1]
    // onClose: modal => console.info(`${modal.id} is hidden`), // [2]
    // openTrigger: 'data-custom-open', // [3]
    // closeTrigger: 'data-custom-close', // [4]
    // disableScroll: true,
    disableFocus: false, // [6]
    awaitCloseAnimation: true, // [7]
    // debugMode: true, // [8]
    onShow: modal => {
      if (modal && modal.id) {
        toggleBodyScrol(modal.id, 'show');
      }
    },
    onClose: modal => {
      if (modal && modal.id) {
        toggleBodyScrol(modal.id, 'close');
      }
    },
  });
};
