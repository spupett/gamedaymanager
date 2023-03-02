import React from "react";
import { useParams } from "react-router-dom";

const UserGameDayAdHoc = () => {
  const user = useParams();

  console.log(user);

  return (
    <>
      This is where we can type in bgg user names to plan an ad hoc game day. We
      don't need to create a new group, let's just see what games we have
    </>
  );
};

export default UserGameDayAdHoc;
