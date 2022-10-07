import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const rootElement = document.getElementById('app');

if (rootElement) {
  ReactDOM.render(
    <App />,
    rootElement,
  );
} else {
  throw new Error('No root element');
}
