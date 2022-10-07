import React from 'react';
import PropTypes from 'prop-types';

import * as appData from '../../../package.json';

import GithubLink from '../GithubLink';

import css from './style.scss';

const Index = ({ children }) => (
  <>
    <header className={`${css.header} container`}>
      <div className="row">
        <div className="col-12 text-center">
          <h1>Box Shadow Generator</h1>
        </div>
      </div>
    </header>
    {children}
    <GithubLink />
    <footer className={css.footer}>
      <div className="row">
        <div className="col-12 text-center">
          <small>
            © 2020–
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

Index.defaultProps = {
  children: {},
};

Index.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Index;
