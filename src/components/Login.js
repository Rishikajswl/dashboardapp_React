import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-section">
      <h1>Login</h1>
      <div className="input-group">
        <div className="input-icon">
          <i className="fa fa-user"></i>
          <input type="text" placeholder="Username" />
        </div>
        <div className="input-icon">
          <i className="fa fa-lock"></i>
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <div className="button-group">
        <button className="signup">SIGNUP</button>
        <button className="login">LOGIN</button>
      </div>
      <p>or connect with <a href="#">Facebook</a></p>
    </div>
  );
};

export default Login;
