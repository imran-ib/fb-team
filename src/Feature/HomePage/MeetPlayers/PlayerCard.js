import React, { Component } from "react";
import Animate from "react-move/Animate";
import { easePolyOut } from "d3-ease";

import Otamendi from "../../../Resources/images/players/Otamendi.png";
import Player from "./../../../utills/cards/Player";

class PlayerCard extends Component {
  state = {
    cards: [
      {
        left: 300,
        bottom: 90
      },
      {
        left: 200,
        bottom: 60
      },
      {
        left: 100,
        bottom: 30
      },
      {
        left: 0,
        bottom: 0
      }
    ]
  };

  showcards = () => {
    return this.state.cards.map((card, i) => (
      <Animate
        key={i}
        show={this.props.show}
        start={{
          left: 0,
          bottom: 0
        }}
        enter={{
          left: [card.left],
          bottom: [card.bottom],
          timing: { duration: 1000, ease: easePolyOut }
        }}
      >
        {({ left, bottom }) => {
          return (
            <div
              style={{
                position: "absolute",
                left,
                bottom
              }}
            >
              <Player
                bckImage={Otamendi}
                number="30"
                name="Nicols"
                lastName="otamendi"
              />
            </div>
          );
        }}
      </Animate>
    ));
  };
  render() {
    return <div>{this.showcards()}</div>;
  }
}

export default PlayerCard;
