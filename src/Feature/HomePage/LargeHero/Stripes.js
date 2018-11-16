import React, { Component } from "react";

import { easePolyOut } from "d3-ease";
import Animate from "react-move/Animate";

export class Stripes extends Component {
  state = {
    stripes: [
      { background: "#98c5e9", left: 120, top: -260, rotate: 25, delay: 200 },
      { background: "#ffffff", left: 360, top: -297, rotate: 25, delay: 600 },
      { background: "#98c5e9", left: 600, top: -498, rotate: 25, delay: 1000 }
    ]
  };

  showStripes = () =>
    this.state.stripes.map((stripe, i) => (
      <Animate
        key={i}
        show={true}
        start={{
          background: "#ffffff",
          left: 0,
          top: 0,
          rotate: 0,
          delay: 0,
          opacity: 0
        }}
        enter={{
          background: [stripe.background],
          timing: { delay: stripe.delay, duration: 400, ease: easePolyOut },

          opacity: [1],
          left: [stripe.left],
          top: [stripe.top],
          rotate: [stripe.rotate],
          delay: [stripe.delay]
          // events: {
          //   end() {
          //     alert("animation is finished");
          //   }
          // }
        }}
      >
        {({ background, opacity, left, top, rotate }) => (
          <div
            className="stripe"
            style={{
              background,
              opacity,
              transform: `rotate(${rotate}deg) translate(${left}px , ${top}px)`
            }}
          />
        )}
      </Animate>
    ));

  render() {
    return <div className="featured_stripes">{this.showStripes()}</div>;
  }
}

export default Stripes;

//#98c5e9
