import React from "react";

const Home = (userDetails) => {
  const user = userDetail.save();
  const logout = () => {
    window.open(`${process.env.REACT_APP_URL}/auth/google/callback`, "self");
  };
  return (
    <div>
      <h1>Profile</h1>
      <div>
        <div>
          <div>
            <label>Username</label>
            <input
              type="text"
              defaultValue={user.name}
              placeholder="Enter Your Username"
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              defaultValue={user.email}
              placeholder="Enter Your Email"
            />
          </div>

          <button onClick={logout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
