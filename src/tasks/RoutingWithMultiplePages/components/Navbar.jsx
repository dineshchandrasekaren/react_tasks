import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, Outlet } from "react-router-dom";
import { checkAuth, logout, storeAllUsers } from "../redux/slices/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(storeAllUsers());
    dispatch(checkAuth());
  }, [dispatch]);
  const { isAuth, authUser } = useSelector((state) => state.user);

  return (
    <>
      <nav
        className="navbar"
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        <Link to="/">
          <h1>ツ</h1>
        </Link>

        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            listStyle: "none",
          }}
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/about">About</NavLink>
          {!isAuth ? (
            <>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/signup">SignUp</NavLink>
            </>
          ) : (
            <>
              <NavLink
                className="btn"
                to="/login"
                onClick={() => dispatch(logout())}
              >
                Logout({authUser})
              </NavLink>
            </>
          )}
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
