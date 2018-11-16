import React, { Component } from "react";

//components
import Text from "./Text/Text";
import Stripes from "./Stripes";

export class LargeHero extends Component {
  render() {
    return (
      <div className="featured_wrapper">
        <Stripes />
        <Text />
      </div>
    );
  }
}

export default LargeHero;
