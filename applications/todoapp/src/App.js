import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import LoginButton from './LoginButton';
import Profile from './Profile';
import Todos from './Todos';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {profileData: {}};
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(profileData) {
    this.setState({profileData: profileData});
  }

  render() {
    const {profileData} = this.state;

    return (
      <Router>
        <div>
          <nav>
            <Link to="/">Todos</Link>
            <Link to="/profile">Profile</Link>
          </nav>

          <LoginButton onLogin={this.handleLogin}/>

          <Route path="/" component={Todos}/>
          <Route path="/profile" component={() => <Profile profileData={profileData}/>}/>
        </div>
      </Router>
    );
  }
}

// https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdrive.metadata.readonly&include_granted_scopes=true&state=state_parameter_passthrough_value&redirect_uri=http://localhost:3000&response_type=token& client_id=503384634348-83ficecm71m58csft9l90mdf2q56kp3d.apps.googleusercontent.com
export default App;
