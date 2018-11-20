import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Main from "./views/Main.jsx";
import Detail from "./views/Detail.jsx";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/detail" component={Detail} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
