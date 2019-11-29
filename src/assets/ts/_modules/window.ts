interface MyWindow extends Window {
  detect: any;
}
declare const window: MyWindow;

// eslint-disable-next-line import/no-default-export
export default window;
