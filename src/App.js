import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./views/Home.jsx";
import DetailContainer from "./containers/DetailContainer.jsx";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/detail" component={DetailContainer} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
