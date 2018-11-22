import React, { Component } from "react";
import Reveal from "react-reveal/Reveal";

import StripePng from "../../../Resources/images/stripes.png";
import PlayerText from "./PlayerText";
import PlayerCard from "./PlayerCard";

class MeetPlayerDashboard extends Component {
  state = {
    show: false
  };
  render() {
    return (
      <Reveal
        fraction={0.7}
        onReveal={() => {
          this.setState({
            show: true
          });
        }}
      >
        <div
          className="home_meetplayers"
          style={{ background: `url(${StripePng})`, margin: "0px" }}
        >
          <div className="container">
            <div className="home_meetplayers_wrapper">
              <div className="home_card_wrapper">
                <PlayerCard show={this.state.show} />
              </div>
              <div className="home_text_wrapper">
                <PlayerText />
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    );
  }
}

export default MeetPlayerDashboard;
