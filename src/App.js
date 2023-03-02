import "./App.css";
import "react-tooltip/dist/react-tooltip.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";
import UserDetail from "./components/UserLayout";
import UserGames from "./pages/user/games/UserGames";
import UserGroups from "./pages/user/groups/UserGroups";
import UserGroupNew from "./pages/user/groups/UserGroupNew";
import UserGroupEdit from "./pages/user/groups/UserGroupEdit";
import UserGameDay from "./pages/user/gameday/UserGameDay";
import UserGameDayGroup from "./pages/user/gameday/UserGameDayGroup";
import UserGameDayAdHoc from "./pages/user/gameday/UserGameDayAdHoc";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="user/:bggUserName" element={<UserDetail />}>
          <Route path="games" element={<UserGames />} />
          <Route path="groups" element={<UserGroups />}>
            <Route index element={<UserGroupNew />} />
            <Route path="edit" element={<UserGroupEdit />} />
          </Route>
          <Route path="gameday" element={<UserGameDay />}>
            <Route index element={<UserGameDayGroup />} />
            <Route path="adhoc" element={<UserGameDayAdHoc />} />
          </Route>
        </Route>
        <Route path="*" element={<p>Path not resolved</p>} />
      </Route>
    </Routes>
  );
}

export default App;
