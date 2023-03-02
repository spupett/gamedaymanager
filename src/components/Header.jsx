import React from "react";
import { NavLink, Link } from "react-router-dom";
import redmeeple from "../assets/red-meeple.jpg";

const Header = () => {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <header>
      <Link className="header-brand" to="/">
        Game Day Manager
        <img className="logo" alt="red meeple" src={redmeeple} />
      </Link>
      <nav>
        <NavLink to="signin">Sign In</NavLink>
        <NavLink to="signup">Sign Up</NavLink>
        <NavLink to="user/spuppett">User</NavLink>
      </nav>
    </header>
  );
};

export default Header;
