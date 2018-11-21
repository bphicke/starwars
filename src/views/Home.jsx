import React, { Component } from "react";
import Header from "../components/Header.jsx";
import SearchboxContainer from "../containers/SearchboxContainer.jsx";
import ResultsContainer from "../containers/ResultsContainer.jsx";

export default class Home extends Component {
  render() {
    return (
      <div style={backgroundStyle}>
        <Header />
        <div style={container}>
          <SearchboxContainer />
          <ResultsContainer />
        </div>
      </div>
    );
  }
}

const backgroundStyle = {
  width: "auto",
  height: "900px",
  backgroundColor: "#ededed"
};
const container = {
  display: "flex"
};
