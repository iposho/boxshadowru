import React from 'react';

import Layout from './Layout/Layout';
import Canvas from './Canvas/Canvas';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/global.scss';

function App() {
  return (
    <Layout>
      <Canvas />
    </Layout>
  );
}

export default App;
