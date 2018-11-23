import React, { Component } from "react";
import PromotionAnimation from "./PromotionAnimation";
import { Enroll } from "./Enroll/Enroll";

export class PromotionDashboard extends Component {
  render() {
    return (
      <div className="promotion_wrapper">
        <div className="container">
          <PromotionAnimation />
          <Enroll />
        </div>
      </div>
    );
  }
}

export default PromotionDashboard;
