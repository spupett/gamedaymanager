import React from "react";
import { Link, NavLink, Outlet, useOutletContext } from "react-router-dom";

const UserGroups = () => {
  const { currentUser } = useOutletContext();

  return (
    <div>
      <Link to="../">&lt;-</Link>
      This is where we'll decide to add or edit groups
      <nav className="group-nav">
        <NavLink to="." end>
          New
        </NavLink>
      </nav>
      <div>
        Groups:{" "}
        {currentUser.favorites.groups.map((group) => {
          return (
            <div key={group.name}>
              <a href={`./edit/${group.name}`}>{group.name}</a>
            </div>
          );
        })}
      </div>
      <Outlet context={currentUser} />
    </div>
  );
};

export default UserGroups;
