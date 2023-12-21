import{Link} from 'react-router-dom';
import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="center">
      <h1>Login</h1>
      <form>
        <div className="txt_field">
          <input type="text" required />
          <span></span>
          <label>Username</label>
        </div>
        <div className="txt_field">
          <input type="password" required />
          <span></span>
          <label>Password</label>
        </div>
        <input type="submit" value="Login" />
        <br/>
        <div className="pass">Forgot Password?</div>
        
        <div className="signup_link">
        
          you are not a member ? <a href="reg.html"><Link to="/Signup">Signup</Link></a>
        </div>
      </form>
    </div>
  );
}

export default Login;