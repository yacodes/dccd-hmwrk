import React, {Component} from 'react';

class LoginButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const $win = window.open('https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.profile&include_granted_scopes=true&state=state_parameter_passthrough_value&redirect_uri=http://localhost:3000&response_type=token&client_id=503384634348-83ficecm71m58csft9l90mdf2q56kp3d.apps.googleusercontent.com')
    const interval = setInterval(() => {
      if ($win.location.origin === 'http://localhost:3000') {
        const data = $win.location.hash;
        const token = data.substr(1).split('&').map(str => str.split('='))[1][1]
        $win.close();
        clearInterval(interval);

        fetch('https://www.googleapis.com/oauth2/v1/userinfo', {
          method:"GET",
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }).then(res => res.json())
          .then(profileData => this.props.onLogin(profileData))
      }
    }, 100);
  }

  render() {
    return (
      <button type="button" onClick={this.handleClick}>Login</button>
    );
  }
}

export default LoginButton;
