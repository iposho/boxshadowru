import React from 'react';

import image from '../../assets/images/right-graphite_2x.webp';

import css from './GithubLink.module.scss';

const GithubLink = () => (
  <div className={css.githubLink}>
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
