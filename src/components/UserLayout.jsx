import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import User from "./User";

import { myUser } from "../library/myuser";

const UserDetail = () => {
  const currentUser = myUser;

  return (
    <>
      <User user={currentUser} />
      <nav className="user-nav">
        <NavLink to="games" end>
          Games
        </NavLink>
        <NavLink to="groups">Groups</NavLink>
        <NavLink to="gameday">Game Day</NavLink>
      </nav>
      <Outlet context={{ currentUser }} />
    </>
  );
};

export default UserDetail;
