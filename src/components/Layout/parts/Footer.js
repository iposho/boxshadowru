import React from 'react';

import params from '../../../../configs/parameters';

const Footer = ({ className }) => (
  <footer className={className}>
    <div className="row">
      <div className="col-12 text-center">
        <small>
          ©
          {' '}
          {params.since}
          —
          {new Date().getFullYear()}
          {' '}
          From Russia with Love, v.
          {params.version}
        </small>
      </div>
    </div>
  </footer>
);

export default Footer;
