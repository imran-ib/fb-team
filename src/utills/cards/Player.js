import React from "react";

function Player({ bckImage, number, name, lastName }) {
  return (
    <div className="player_card_wrapper">
      <div
        className="player_card_thmb"
        style={{
          background: `#f2f9ff url(${bckImage})`
        }}
      />
      <div className="player_card_nfo">
        <div className="player_card_number">{number}</div>
        <div className="player_card_name">
          <span>{name}</span>
          <span>{lastName}</span>
        </div>
      </div>
    </div>
  );
}

export default Player;
