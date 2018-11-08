import React from 'react';
import ReactDOM from 'react-dom';
import loadScript from 'load-script';
import {compose, reverse, sortBy, prop, map, groupBy} from 'ramda';
import './index.css';
import {clientId, apiKey, discoveryDocs, scope, range, spreadsheetId} from './credentials';
import App from './App';

const groupByTeam = groupBy(student => student.team);
const mapToStudent = map(student => ({name: student[0], score: Number(student[1]), team: student[2]}));
const getStudents = compose(
  groupByTeam,
  reverse,
  sortBy(prop('score')),
  mapToStudent,
);

loadScript('https://apis.google.com/js/api.js', () => {
  window.gapi.load('client:auth2', () => {
    window.gapi.client.init({apiKey, clientId, discoveryDocs, scope}).then(() => {
      if (!window.gapi.auth2.getAuthInstance().isSignedIn.get()) {
        window.gapi.auth2.getAuthInstance().signIn();
      }

      window.gapi.client.sheets.spreadsheets.values.get({spreadsheetId, range}).then(data => {
        ReactDOM.render(
          <App teams={getStudents(data.result.values)}/>,
          document.getElementById('root')
        );
      });
    });
  });
});

