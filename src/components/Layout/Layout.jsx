import React from 'react';
import PropTypes from 'prop-types';

import * as appData from '../../../package.json';

import GithubLink from '../GithubLink/GithubLink';

import './Layout.css';

const Layout = ({ children }) => (
  <>
    <header className="header container">
      <div className="row">
        <div className="col-12 text-center">
          <h1>Box Shadow Generator</h1>
        </div>
      </div>
    </header>
    {children}
    <GithubLink />
    <footer className="footer">
      <div className="row">
        <div className="col-12 text-center">
          <small>
            ©
            {new Date().getFullYear()}
            {' '}
            From Russia with Love, v.
            {appData.default.version}
          </small>
        </div>
      </div>
    </footer>
  </>
);

Layout.defaultProps = {
  children: {},
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Layout;
