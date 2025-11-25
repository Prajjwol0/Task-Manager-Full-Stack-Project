import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Detail from "./pages/TaskDetail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const [auth, setAuth] = useState(!!localStorage.getItem("token"));
  const [showSignup, setShowSignup] = useState(false);

  if (!auth) {
    return showSignup ? (
      <>
        <Signup />
        <p>
          Already have an account?{" "}
          <span
            onClick={() => setShowSignup(false)}
            style={{ cursor: "pointer", color: "blue" }}
          >
            Login
          </span>
        </p>
      </>
    ) : (
      <>
        <Login setAuth={setAuth} />
        <p>
          Don't have an account?{" "}
          <span
            onClick={() => setShowSignup(true)}
            style={{ cursor: "pointer", color: "blue" }}
          >
            Signup
          </span>
        </p>
      </>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
