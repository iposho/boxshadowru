import React from 'react';

import image from '../../assets/images/right-graphite@2x.png';
import './GithubLink.scss';

const GithubLink = () => (
  <div className="githubLink">
    <a
      href="https://github.com/iposho/boxshadowru"
      target="_blank"
      rel="noreferrer"
    >
      <img src={image} alt="Github Link" />
    </a>
  </div>
);

export default GithubLink;
