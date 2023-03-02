import React, { useState, useEffect } from "react";
import { useOutletContext, Link } from "react-router-dom";
import ShortGameGrid from "../../../components/ShortGameGrid";
import { GAMEGROUPMANAGER_GAMES } from "../../../library/apiconstants";
import axios from "axios";

const UserGames = () => {
  const { currentUser } = useOutletContext();
  const [gamesData, setGamesData] = useState([]);

  useEffect(() => {
    fetchGames(currentUser.games);
  }, []);

  const fetchGames = (gameList) => {
    axios
      .post(`${GAMEGROUPMANAGER_GAMES}`, {
        gameList: gameList,
      })
      .then((res) => setGamesData(res.data));
  };

  return (
    <section>
      <div>
        <Link to="../">&lt;-</Link>
        <div>Board Game Geek Name: {currentUser.BGGName}</div>
        Games: <ShortGameGrid games={gamesData} />
      </div>
    </section>
  );
};

export default UserGames;
