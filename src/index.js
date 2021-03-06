import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./Resources/css/app.css";
import App from "./layout/App/App";
import * as serviceWorker from "./serviceWorker";
import { firebase } from "./config/firebase";

firebase.auth().onAuthStateChanged(user => {
  ReactDOM.render(<App user={user} />, document.getElementById("root"));
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
