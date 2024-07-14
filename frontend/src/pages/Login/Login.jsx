import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import styles from "./styles.module.css";

const Login = () => {
  const { setUser } = useUser();
  const location = useLocation();

  const googleAuth = () => {
    window.open("http://localhost:8000/auth/google", "_self");
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const userData = params.get("user");

    if (userData) {
      setUser(JSON.parse(userData)); // Set user in context
    }
  }, [location, setUser]);

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1 className={styles.title}>Login Form</h1>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Username</label>
          <input type="text" placeholder="Enter Username" className={styles.input} />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Password</label>
          <input type="password" placeholder="Enter Password" className={styles.input} />
        </div>
        <button className={styles.googleButton} onClick={googleAuth}>
          <span>Sign In with Google</span>
        </button>
        <p className={styles.signupPrompt}>
          New Here?{" "}
          <Link to="/signup" className={styles.signupLink}>
            Create a New User
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
