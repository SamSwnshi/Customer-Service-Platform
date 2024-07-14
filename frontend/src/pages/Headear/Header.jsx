import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./Header.css";

const Headers = () => {
  const [userdata, setUserdata] = useState({});
  console.log("response", userdata);

  const getUser = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/auth/login/sucess",
        { withCredentials: true }
      );
      console.log("response", response.data);
      setUserdata(response.data.user);
    } catch (error) {
      console.log("error", error);
    }
  };

  const logout = () => {
    window.open("http://localhost:8000/auth/logout", "_self");
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <header>
      <nav>
        <div className="left">
          <h1 className="header-name">Customer Service</h1>
        </div>
        <div className="right">
          <ul>
            {/* <li>
              <NavLink to="/">Home</NavLink>
            </li> */}
            {Object.keys(userdata).length > 0 ? (
              <>
                <li style={{  fontWeight: "semibold" }}>
                  {userdata.displayName}
                </li>
                <li onClick={logout}>Logout</li>
              </>
            ) : (
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Headers;
