import React, { Component } from "react";

//Componants
import LargeHero from "./LargeHero/LargeHeroIndex";
import Matches from "./Matches/Matches/Matches";
import MeetPlayerDashboard from "./MeetPlayers/MeetPlayerDashboard";
import PromotionDashboard from "./Promotion/PromotionDashboard";

export class HomeDashboard extends Component {
  render() {
    return (
      <div>
        <LargeHero />
        <Matches />
        <MeetPlayerDashboard />
        <PromotionDashboard />
      </div>
    );
  }
}

export default HomeDashboard;
