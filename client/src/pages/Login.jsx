import React, { useState } from "react";
import api from "../api/axiosConfig";
import Button from "../components/Button";

function Login({ setAuth }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await api.post("/login", { email, password });
      // store token in localStorage
      localStorage.setItem("token", res.data.token);
      // update App auth state
      setAuth(true);
      alert("Login successful");
    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Welcome to login</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <Button text="Login" />
    </form>
  );
}

export default Login;
