import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './_App';
import './_modules/commons';

const el = document.getElementById('root');
if (el === null) throw new Error('Root container missing in index.html');

const root = ReactDOM.createRoot(el);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
