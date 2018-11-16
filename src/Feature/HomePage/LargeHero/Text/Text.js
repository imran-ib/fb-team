import React, { Component } from "react";

import Number from "./Number";
import RanderText from "./RenderTaxt";
import Player from "./PlayerImage";

import Tags from "../../../../utills/Tags/Tags";

export class Text extends Component {
  render() {
    return (
      <div className="featured_text">
        <Player />
        <Number />
        <RanderText />
      </div>
    );
  }
}

export default Text;
