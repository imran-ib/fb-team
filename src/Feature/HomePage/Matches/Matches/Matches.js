import React, { Component } from "react";

import Tag from "../../../../utills/Tags/Tags";

import Blocks from "./MatchesBlocks";

export class Matches extends Component {
  render() {
    return (
      <div className="home_matches_wrapper" style={{ marginTop: "0px" }}>
        <div className="container">
          <Tag
            background="#0e1731"
            size="50px"
            color="#ffffff"
            font="righteouse"
            padding="5px 10px"
          >
            Matches
          </Tag>
          <Blocks />
          <Tag
            background="#ffffff"
            size="22px"
            color="#0e1731"
            font="righteouse"
            link={true}
            LinkTo="/the_team"
          >
            See more Matches
          </Tag>
        </div>
      </div>
    );
  }
}

export default Matches;
