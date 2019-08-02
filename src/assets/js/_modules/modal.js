import 'core-js/modules/es.object.assign';
import 'core-js/modules/es.array.from';
import MicroModal from 'micromodal';

export default () => {
  MicroModal.init({
    // onShow: modal => console.info(`${modal.id} is shown`), // [1]
    // onClose: modal => console.info(`${modal.id} is hidden`), // [2]
    // openTrigger: 'data-custom-open', // [3]
    // closeTrigger: 'data-custom-close', // [4]
    disableScroll: true,
    disableFocus: false, // [6]
    awaitCloseAnimation: true, // [7]
    // debugMode: true, // [8]
  });
};
