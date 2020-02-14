import React from 'react';

import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/global.css';

import Layout from './Layout/Layout';
import Canvas from './Canvas/Canvas';

function App() {
  return (
      <Layout>
        <Canvas />
      </Layout>
  );
}

export default App;
