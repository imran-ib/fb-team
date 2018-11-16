import React, { Component } from "react";

//Componants
import LargeHero from "./LargeHero/LargeHeroIndex";

export class HomeDashboard extends Component {
  render() {
    return (
      <div className="bck_blue ">
        <LargeHero />
      </div>
    );
  }
}

export default HomeDashboard;
