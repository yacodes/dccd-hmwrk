import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from "react-redux";
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import App from './App';
import reducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const localStorageState = JSON.parse(localStorage.getItem('app-state')) || undefined;

const localStorageMiddleware = function(store) {
  return function(next) {
    return function(action) {
      next(action);
      localStorage.setItem('app-state', JSON.stringify(store.getState()));
    };
  };
};

const store = createStore(
  reducer, // 1
  localStorageState, // 2
  composeEnhancers( // 3
    applyMiddleware(
      createLogger({collapsed: true}),
      localStorageMiddleware,
      thunk,
    )
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
document.getElementById('root'));
