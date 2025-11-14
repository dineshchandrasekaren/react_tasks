import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

const LoginWithRoute = () => {
  const navLink = [
    {
      label: "Home",
      link: "/",
      element: Home,
    },
    {
      label: "About",
      link: "/about",
      element: About,
    },
    {
      label: "Profile",
      link: "/profile",
      element: Profile,
    },
    {
      label: "Login",
      link: "/login",
      element: Login,
    },
  ];
  return (
    <BrowserRouter>
      <Navbar navLink={navLink} />

      <Routes>
        {navLink.map(({ link, element: Element }) => (
          <Route path={link} element={<Element />} />
        ))}
        <Route path="/profile/:username/:email" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default LoginWithRoute;
