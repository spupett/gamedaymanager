import React from "react";
import ShortGame from "./ShortGame";

const ShortGameGrid = ({ games }) => {
  games.sort((a, b) => {
    return a.name === b.name ? 0 : a.name < b.name ? -1 : 1;
  });
  return (
    <div id="grid">
      {games.map((game) => {
        return <ShortGame key={game.name} game={game} />;
      })}
    </div>
  );
};

export default ShortGameGrid;
