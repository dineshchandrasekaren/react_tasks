import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  checkAuth,
  isAuthenticatedCheck,
  login,
  signUp,
} from "../redux/slices/userSlice";
const initialState = {
  username: "",
  email: "",
  password: "",
};
const Auth = () => {
  const allUsers = useSelector((state) => state.user.allUsers);
  const dispatch = useDispatch();
  const isLogin = useLocation().pathname === "/login";
  const navigate = useNavigate();
  const [credential, setCredential] = useState(initialState);
  useEffect(() => {
    if (isAuthenticatedCheck()) {
      navigate("/");
    } else {
      checkAuth();
    }
  }, [navigate]);
  const handleChange = ({ target }) => {
    const { id, value } = target;
    setCredential((p) => ({ ...p, [id]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = credential.email.trim();
    const password = credential.password.trim();
    const user =
      allUsers.find(
        (all) => all.email === email && all.password === password
      ) || undefined;

    if (isLogin) {
      if (user) {
        dispatch(login(user));
        navigate("/");
      } else {
        alert("Please enter correct email and password.");
      }
    } else {
      const username = credential.username.trim();
      if (username && email && password) {
        if (user) {
          return alert("User already exist");
        }
        dispatch(signUp({ username, email, password }));
        navigate("/login");
      } else {
        alert("Please enter username, email and password.");
      }
    }
  };
  return (
    <div style={{ maxWidth: "200px" }}>
      <h2>{isLogin ? "Login" : "SignUp"}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <>
            <input
              type="text"
              id="username"
              onChange={handleChange}
              placeholder="Your Name"
              value={credential.username}
            />
            <br />
          </>
        )}
        <input
          type="email"
          id="email"
          onChange={handleChange}
          value={credential.email}
          placeholder="Your Email"
        />
        <br />
        <input
          type="password"
          id="password"
          onChange={handleChange}
          value={credential.password}
          placeholder="Your Password"
        />
        <br />
        <button type="submit">{isLogin ? "Login" : "SignUp"}</button>
      </form>
      <p>
        {"Click here to "}
        <Link
          to={isLogin ? "/signup" : "/login"}
          style={{ textAlign: "center" }}
        >
          {isLogin ? " SignUp" : " Login"}
        </Link>
      </p>
    </div>
  );
};

export default Auth;
