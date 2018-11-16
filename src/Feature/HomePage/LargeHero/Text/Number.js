import React, { Component } from "react";

import { easePolyOut } from "d3-ease";
import Animate from "react-move/Animate";

export class Number extends Component {
  animateNumber = () => {
    return (
      <Animate
        show={true}
        start={{
          rotate: 0,
          opacity: 0
        }}
        enter={{
          opacity: [1],
          rotate: [360],
          timing: { delay: 1000, duration: 2000, ease: easePolyOut }
        }}
      >
        {({ rotate, opacity }) => (
          <div
            className="number"
            style={{
              opacity,
              transform: ` rotateY(${rotate}deg) `
            }}
          >
            3
          </div>
        )}
      </Animate>
    );
  };
  render() {
    return <div className="featured_number">{this.animateNumber()}</div>;
  }
}

export default Number;
