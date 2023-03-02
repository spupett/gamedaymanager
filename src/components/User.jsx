import axios from "axios";
import React, { useState, useEffect } from "react";
import { GAMEGROUPMANAGER_GAMES } from "../library/apiconstants";
import ShortGame from "./ShortGame";

const User = ({ user }) => {
  const [favoriteGamesData, setFavoriteGamesData] = useState([]);

  useEffect(() => {
    fetchGames(user.favorites.games);
  }, []);

  const fetchGames = (gameList) => {
    axios
      .post(`${GAMEGROUPMANAGER_GAMES}`, {
        gameList: gameList,
      })
      .then((res) => setFavoriteGamesData(res.data));
  };

  const showFavoriteGames = () => {
    const fav = favoriteGamesData; // so we can sort
    fav.sort((a, b) => {
      return a.name === b.name ? 0 : a.name < b.name ? -1 : 1;
    });
    const shortGames = fav.map((game) => {
      return <ShortGame key={game.bggId} game={game} />;
    });

    return (
      <div>
        <section>Favorite Games:</section>
        {shortGames}
      </div>
    );
  };

  return (
    <div className="user">
      <p>BGG User Name: {user.BGGName}</p>
      <p>First Name: {user.firstName}</p>
      {showFavoriteGames()}
      {/* {favoritePlayers(user.favorites.users)}
      {favoriteGroups(user.favorites.groups)} */}
    </div>
  );
};

export default User;
