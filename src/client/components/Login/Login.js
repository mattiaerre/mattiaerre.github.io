import React from 'react'; // eslint-disable-line

const Login = (props) => {
  const { auth } = props.route;
  return (
    <div className="fukol-grid">
      <h4><a href="#" onClick={auth.login}>Login</a></h4>
    </div>
  );
};

export default Login;
