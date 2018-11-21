import React, { Component } from "react";
import Header from "../components/Header.jsx";
import Person from "../components/Person.jsx";
import Movie from "../components/Movie.jsx";

export default class Detail extends Component {
  render() {
    return (
      <div style={backgroundStyle}>
        <Header />
        <div style={container}>
          {this.props.people ? (
            <Person selectedResult={this.props.selectedResult} />
          ) : (
            <Movie selectedResult={this.props.selectedResult} />
          )}
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
