import React, { Component } from "react";
import { easePolyOut } from "d3-ease";
import Animate from "react-move/Animate";

export class RenderTaxt extends Component {
  randerFirstText = () => {
    return (
      <Animate
        show={true}
        start={{
          opacity: 0,
          x: 503,
          y: 450
        }}
        enter={{
          opacity: [1],
          x: [273],
          y: [450],
          timing: { duration: 2000, ease: easePolyOut }
        }}
      >
        {({ x, y, opacity }) => (
          <div
            className="featured_first"
            style={{
              opacity,
              transform: `translate(${x}px, ${y}px)`
            }}
          >
            League
          </div>
        )}
      </Animate>
    );
  };

  randerSecondText = () => {
    return (
      <Animate
        show={true}
        start={{
          opacity: 0,
          x: 503,
          y: 586
        }}
        enter={{
          opacity: [1],
          x: [273],
          y: [586],
          timing: { delay: 700, duration: 2000, ease: easePolyOut }
        }}
      >
        {({ x, y, opacity }) => (
          <div
            className="featured_second"
            style={{
              opacity,
              transform: `translate(${x}px, ${y}px)`
            }}
          >
            Championships
          </div>
        )}
      </Animate>
    );
  };

  render() {
    return (
      <div>
        {this.randerFirstText()} {this.randerSecondText()}
      </div>
    );
  }
}

export default RenderTaxt;
