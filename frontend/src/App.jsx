import "./App.css";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Home from "./pages/Home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      // Ensure the environment variable is correctly set and accessed
      const url = `/api/auth/login/success`;
      const { data } = await axios.get(url, { withCredentials: true });
      console.log("Response Data:", data); 
      setUser(data.user._json);
    } catch (error) {
      console.log("Error:", error.message);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={user ? <Home user={user} /> : <Navigate to="/login" />}
        />
        <Route
          exact
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />}
        />
        <Route
          exact
          path="/signup"
          element={user ? <Navigate to="/" /> : <Signup />}
        />
      </Routes>
    </>
  );
}

export default App;
