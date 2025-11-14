import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ navLink }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "10px",
        alignItems: "center",
      }}
    >
      <h1>Logo</h1>
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          listStyle: "none",
        }}
      >
        {navLink.map(({ label, link }) => (
          <li>
            <Link to={link}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
