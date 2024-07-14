import "./App.css";
import Login from "./pages/Login/Login";

import Home from "./pages/Home/Home";
import Dashboard from "./pages/dashboard/Dasboard";
import { Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";

import Headers from "./pages/Headear/Header";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <UserProvider>
      <Headers />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
