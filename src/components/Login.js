import React from 'react';
import "./Login.css";
import Button from 'react-bootstrap/Button';
function Login() {
  return <div className='Login'>
      <a className='btn btn-primary loginbutton' href=''>Login</a>
      <a className='btn btn-primary signupbutton' href=''>Already have an account/signup</a>

  </div>;
}

export default Login;
