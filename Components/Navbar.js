import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <h3 className="logo"> Logo </h3>

        <ul className="nav-links">
          <Link to="Trip" style={{ textDecoration: "none" }}>
            <li>Trip</li>
          </Link>
          <Link to="Tip" style={{ textDecoration: "none" }}>
            <li>Үзвэл зохихуйц газар</li>
          </Link>

          <Link to="SignUp" style={{ textDecoration: "none" }}>
            <li>Бүртгүүлэх</li>
          </Link>
          <Link to="Login" style={{ textDecoration: "none" }}>
            <li>Нэвтрэх</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
