import React from 'react';

import Layout from './components/Layout';
import Canvas from './components/Canvas';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/global.scss';

const App = () => (
  <Layout>
    <Canvas />
  </Layout>
);

export default App;
