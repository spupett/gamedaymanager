import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const UserGameDay = () => {
  return (
    <div>
      This is where we can set up a game day, either with an established group,
      or on the fly
      <nav>
        <NavLink to="." end>
          Group
        </NavLink>
        <NavLink to="adhoc">Ad Hoc</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default UserGameDay;
