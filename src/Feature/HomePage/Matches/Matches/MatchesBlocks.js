import React, { Component } from "react";
import { firebaseMatches } from "../../../../config/firebase";
import { firebaseLooper } from "../../../../utills/helper";
import { reverseArray } from "../../../../utills/helper";

//components
import Block from "../../../../utills/Matches/MatchesBlock";

export class MatchesBlocks extends Component {
  state = {
    matches: []
  };

  componentDidMount() {
    firebaseMatches
      .limitToLast(6)
      .once("value")
      .then(Snapshot => {
        const matches = firebaseLooper(Snapshot);
        this.setState({
          matches: reverseArray(matches)
        });
      });
  }
  showMatches = matches =>
    matches
      ? matches.map(match => (
          <div key={match.id} className="item">
            <div className="wrapper">
              <Block match={match} />
            </div>
          </div>
        ))
      : null;

  render() {
    return (
      <div className="home_matches">{this.showMatches(this.state.matches)}</div>
    );
  }
}

export default MatchesBlocks;
