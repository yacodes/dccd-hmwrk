import React from 'react';
import T from 'prop-types';

export const images = {
  TMNT: '/turtles.png',
  SPARTA: '/sparta.png',
  PELMESHKI: '/pelmeshki.png',
};

export const colors = {
  TMNT: '#59ffa0',
  SPARTA: '#800000',
  PELMESHKI: '#1da2d8',
};

export const Team = ({name, color, image, score, max, children}) => (
  <article className="column">
    <h1 className="column__title">{name}</h1>
    <h2 className="column__count">{score}</h2>
    <figure className="column__progress" style={{backgroundColor: colors[color], maxHeight: `calc(${(score / max) * 100}% - 80px - 83px)`}}>
      <img src={images[image]}/>
    </figure>
    <ul className="column__footer">
      {children}
    </ul>
  </article>
);

Team.propTypes = {
  max: T.number.isRequired,
  name: T.string.isRequired,
  color: T.string.isRequired,
  image: T.string.isRequired,
  score: T.number.isRequired,
  children: T.node.isRequired,
};

export default Team;
