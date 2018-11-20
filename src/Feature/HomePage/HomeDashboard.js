import React, { Component } from "react";

//Componants
import LargeHero from "./LargeHero/LargeHeroIndex";
import Matches from "./Matches/Matches/Matches";

export class HomeDashboard extends Component {
  render() {
    return (
      <div>
        <LargeHero />
        <Matches />
      </div>
    );
  }
}

export default HomeDashboard;
