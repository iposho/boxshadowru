import React from 'react';

import ErrorBoundary from './components/ErrorBoundary';
import Layout from './components/Layout';
import Canvas from './components/Canvas';
import YMetrica from './components/YMetrica';

import './assets/styles/global.scss';

const App = () => (
  <ErrorBoundary>
    <Layout>
      <Canvas />
    </Layout>
    <YMetrica />
  </ErrorBoundary>
);

export default App;
