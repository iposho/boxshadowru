import React from 'react';

import params from '../../../../configs/parameters';
import createDateDiapason from '../../../helpers/createDateDiapason';

const Footer = ({ className }) => (
  <footer className={className}>
    <div className="row">
      <div className="col-12 text-center">
        <small>
          ©
          {' '}
          {createDateDiapason(params.since)}
          {' '}
          <a href={params.url}>
            {params.author}
          </a>
          , v.
          {params.version}
        </small>
      </div>
    </div>
  </footer>
);

export default Footer;
