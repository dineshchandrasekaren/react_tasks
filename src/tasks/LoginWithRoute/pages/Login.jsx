import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const reset = { username: "", email: "", password: "" };
const Login = () => {
  const [credential, setCredential] = useState(reset);
  const navigate = useNavigate();
  const handleChange = ({ target }) => {
    const { id, value } = target;
    setCredential((p) => ({ ...p, [id]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, username } = credential;
    if (email.trim() && password.trim() && username.trim()) {
      if (email === "admin@email.com") {
        navigate(`/profile/${username}/${email}`);
        setCredential(reset);
      } else {
        alert("You are not admin");
      }
    } else {
      alert("Please enter all the values");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" onChange={handleChange} />
      </div>{" "}
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" onChange={handleChange} />
      </div>{" "}
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" onChange={handleChange} />
      </div>
      <input type="submit" value="Login" />
    </form>
  );
};

export default Login;
