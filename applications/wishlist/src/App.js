import React from 'react';
import {connect} from 'react-redux';
import User from './User';
import Wishes from './Wishes';
import * as actions from './actions';

const App = ({isLogged, onLogin, onSignOut}) => (
  <div>
    <h1>Wishlist</h1>
    {isLogged ? (
      <div>
        <User/>
        <Wishes/>
        <button onClick={onSignOut}>Sign out</button>
      </div>
    ) : (
      <button onClick={onLogin}>Login</button>
    )}
  </div>
);

const mapStateToProps = state => ({
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = {
  onLogin: actions.onLogin,
  onSignOut: actions.signOut
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
