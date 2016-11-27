import React from 'react';

export class Login extends React.Component {
  render() {
    const { auth } = this.props.route;
    return (
      <div className="fukol-grid">
        <h4><a href="#" onClick={auth.login.bind(this)}>Login</a></h4>
      </div>
    );
  }
}

export default Login;
