import React from 'react';
import ReactDOM from 'react-dom';
import commons from './_modules/commons';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app'),
);


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
