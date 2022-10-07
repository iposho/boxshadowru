import React from 'react';

import params from '../../../../configs/parameters';

const Header = ({ className }) => (
  <header className={`${className} container`}>
    <div className="row">
      <div className="col-12 text-center">
        <h1>{params.title}</h1>
      </div>
    </div>
  </header>
);

export default Header;
