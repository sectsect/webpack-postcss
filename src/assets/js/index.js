import React from 'react';
import ReactDOM from 'react-dom';
import App from './_App';
import './_modules/commons';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// const title = 'My Minimal React Webpack Babel Setup';
//
// ReactDOM.render(
//   <div>{title}</div>,
//   document.getElementById('app'),
// );

// class App extends React.Component {
//   render() {
//     return <p> Hello React project</p>;
//   }
// }
//
// render(<App />, document.getElementById('app'));

// class App extends React.Component {
//   render() {
//     return <div className={styles.hogeHoge}>hello</div>;
//   }
// }
//
// ReactDOM.render(<App />, document.getElementById('app'));
