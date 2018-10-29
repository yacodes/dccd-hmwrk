import React from 'react';
import T from 'prop-types';

export const medals = {
  0: '🥇',
  1: '🥈',
  2: '🥉',
};

export const Student = ({name, score, index}) => (
  <li className="column__footer-item"><span>{medals[index]} {name}</span><span>{score}</span></li>
);

Student.propTypes = {
  index: T.number.isRequired,
  name: T.string.isRequired,
  score: T.number.isRequired,
};

export default Student;
