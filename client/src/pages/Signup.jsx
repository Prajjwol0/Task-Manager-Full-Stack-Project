import React, { useState } from "react";
import api from "../api/axiosConfig";
import Button from "../components/Button";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      await api.post("/signup", { name, email, password });
      alert("Signup successful! Please login.");
      // optionally clear form
      setName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      console.error(err);
      alert("Signup failed");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Welcome! Please signup</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Full Name"
      />
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
      <Button text="SignUp" />
    </form>
  );
}

export default Signup;
