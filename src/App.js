import React from 'react';

import ErrorBoundary from './components/ErrorBoundary';
import Layout from './components/Layout';
import Canvas from './components/Canvas';

import './assets/styles/global.scss';

const App = () => (
  <ErrorBoundary>
    <Layout>
      <Canvas />
    </Layout>
  </ErrorBoundary>
);

export default App;
