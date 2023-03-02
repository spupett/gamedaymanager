import React from "react";
import { Tooltip } from "react-tooltip";

const ShortGame = ({ game }) => {
  const tooltipId = `game-data-${game.name}`;

  return (
    <>
      <div className="info-container">
        <a
          href={game.bggLink}
          target="_new"
          data-tooltip-id={tooltipId}
          data-tooltip-delay-show={1000}
        >
          <img
            key={game.bggId}
            className="short-game"
            src={game.thumbnail}
            alt={game.name}
          />
          <Tooltip id={tooltipId} className="info-no-padding">
            <div>
              <p>Playtime: {game.playTime}</p>
              <p>Best Player Count: {game.playerCount.best}</p>
            </div>
          </Tooltip>
        </a>
      </div>
    </>
  );
};

export default ShortGame;
