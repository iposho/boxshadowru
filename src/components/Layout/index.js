import React from 'react';
import PropTypes from 'prop-types';

import Header from './parts/Header';
import GithubLink from '../GithubLink';
import Footer from './parts/Footer';

import css from './Layout.module.scss';

const Layout = ({ children }) => (
  <>
    <Header className={css.header} />
    {children}
    <GithubLink />
    <Footer className={css.footer} />
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
