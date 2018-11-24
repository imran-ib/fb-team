import React, { Component } from "react";
import Routes from "../Routes/Routes";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes user={this.props.user} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
