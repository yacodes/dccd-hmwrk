import React from 'react';
import T from 'prop-types';
import * as Components from './components';

export const App = ({teams}) => {
  const max = Math.max.apply(null, Object.keys(teams).map(team => teams[team].reduce((acc, student) => acc + student.score, 0)));

  return (
    <main className="container">
      {Object.keys(teams).map(team => (
        <Components.Team max={max} score={teams[team].reduce((acc, student) => acc + student.score, 0)} key={team} color={team} image={team} name={team}>
          {teams[team].slice(0, 3).map((student, index) => (
            <Components.Student key={index} index={index} {...student}/>
          ))}
        </Components.Team>
      ))}
    </main>
  );
};

App.propTypes = {
  teams: T.object.isRequired
};

export default App;
