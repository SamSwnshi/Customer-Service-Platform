
import { Link } from "react-router-dom";
import  "./signup.css"
const Signup = () => {
  const googleAuth = () => {
    window.open("http://localhost:8000/auth/google/callback", "_self");
  };

  return (
    <div className="container">
      <div className="box">
        <h1 className="title">Sign Up</h1>
        <div className="inputGroup">
          <label className="label">Username</label>
          <input type="text" placeholder="Enter Your Username" className="input" />
        </div>
        <div className="inputGroup">
          <label className="label">Email</label>
          <input type="email" placeholder="Enter Your Email" className="input" />
        </div>
        <div className="inputGroup">
          <label className="label">Password</label>
          <input type="password" placeholder="Enter Your Password" className="input" />
        </div>
        <div className="inputGroup">
          <label className="label">Confirm Password</label>
          <input type="password" placeholder="Enter Your Password" className="input" />
        </div>
        <button className="googleButton" onClick={googleAuth}>
          <span>Sign Up with Google</span>
        </button>
        <p className="loginPrompt">
          Already have an account?{" "}
          <Link to="/login" className="loginLink">Login</Link>
        </p>
        <button className="signupButton">Sign Up</button>
      </div>
    </div>
  );
};

export default Signup;
