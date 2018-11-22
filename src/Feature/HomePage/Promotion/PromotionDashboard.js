import React, { Component } from "react";
import PromotionAnimation from "./PromotionAnimation";

export class PromotionDashboard extends Component {
  render() {
    return (
      <div className="promotion_wrapper">
        <div className="container">
          <PromotionAnimation />
        </div>
      </div>
    );
  }
}

export default PromotionDashboard;
