import React from 'react';
import * as appData from '../../../package.json';

import './Layout.css';

const Layout = ({ children }) => {
  return (
      <>
        <header className="header container">
          <div className="row">
            <div className="col-12 text-center">
              <h1>Box Shadow Generator</h1>
            </div>
          </div>
        </header>
          {children}
        <footer className="footer">
          <div className="row">
            <div className="col-12 text-center">
              <small>© {new Date().getFullYear()} From Russia with Love, v.{appData.default.version}</small>
            </div>
          </div>
        </footer>
      </>
  )
}

export default Layout;
