import React from "react";
import login from "./styles.module.css";
import { Link } from "react-router-dom";
const Login = () => {
  const googleAuth = () =>{
    window.open(
      `/api/auth/google/callback`,"self"
    )
  }
  return (
    <div className={login.container}>
      <h1>Login Form</h1>
      <div>
        <div>
          <div>
            <label>Enter Email</label>
            <input type="email" placeholder="Enter Your Email" />
          </div>
          <div>
            <label>Enter Email</label>
            <input type="password" placeholder="Enter Your Password" />
          </div>
          <button onClick={googleAuth}>
            <span>Sing In with Google</span>
          </button>
          <p>
            New Here? {" "}<Link to="/signup">{"Create a New User"}</Link>
          </p>

          <button>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
