import React, { Component } from "react";
import { Switch } from "react-router-dom";
//
// ─── HIGHER ORDER COMPONENT ─────────────────────────────────────────────────────
//

import Layout from "../HOC/Layout";
import HomePage from "../../Feature/HomePage/HomeDashboard";
import { Signin } from "./../../Feature/Auth/SingIn/Signin";
import PrivateRoute from "../../Feature/Auth/AuthRoutes/PrivateRoute/PrivateRoute";
import PublicRoutes from "./../../Feature/Auth/AuthRoutes/PublicRoutes/PublicRoute";

//
// ─── ADMIN ROUTES ───────────────────────────────────────────────────────────────
//
import Dashboard from "./../../Feature/Admin/Dashboard";

export class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <PrivateRoute
            {...this.props}
            exact
            path="/dashboard"
            component={Dashboard}
          />

          <PublicRoutes
            {...this.props}
            path="/sign_in"
            exact
            component={Signin}
          />
          <PublicRoutes {...this.props} path="/" exact component={HomePage} />
        </Switch>
      </Layout>
    );
  }
}

export default Routes;
