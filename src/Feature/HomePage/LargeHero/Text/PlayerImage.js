import React, { Component } from "react";
import { Animate } from "react-move";
import PlayerImage from "../../../../Resources/images/featured_player.png";

export class Image extends Component {
  palyerAnimate = () => {
    return (
      <Animate
        show={true}
        start={{
          opacity: 0,
          x: 100,
          y: 180
        }}
        enter={{
          opacity: 1,
          x: [500],
          y: [180]
        }}
      >
        {({ opacity, x, y }) => (
          <div
            className="featured_player"
            opacity
            style={{
              background: `url(${PlayerImage})`,
              transform: `translate(${x}px , ${y}px)`
            }}
          />
        )}
      </Animate>
    );
  };
  render() {
    return <div>{this.palyerAnimate()}</div>;
  }
}

export default Image;
