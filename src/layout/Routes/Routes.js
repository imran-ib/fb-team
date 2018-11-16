import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
//Higher Order Component
import Layout from "../HOC/Layout";
import HomePage from "../../Feature/HomePage/HomeDashboard";

export class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact to="/" component={HomePage} />
        </Switch>
      </Layout>
    );
  }
}

export default Routes;
