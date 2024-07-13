
import login from "./styles.module.css";
import { Link } from "react-router-dom";
const Signup = () => {
  const googleAuth = () =>{
    window.open(
      `/api/auth/google/callback`,"self"
    )
  }
  return (
    <div className={login.container}>
      <h1>Sign Up Form</h1>
      <div>
        <div>
          <div>
            <label>Username</label>
            <input type="text" placeholder="Enter Your Username" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" placeholder="Enter Your Email" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" placeholder="Enter Your Password" />
          </div>
          <button onClick={googleAuth}>
            <span>Sing Up with Google</span>
          </button>
          <p>
             Already have Account? {" "}<Link to="/login">{"Login"}</Link>
          </p>

          <button>SignUp</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
