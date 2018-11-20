import React, { Component } from "react";

const resultsContainerStyle = {
  width: "582px",
  height: "582px",
  borderRadius: "4px",
  boxShadow: "0 1px 2px 0 rgba(132, 132, 132, 0.75)",
  backgroundColor: "#ffffff",
  marginTop: "30px",
  marginRight: "auto"
};

export default class Results extends Component {
  render() {
    return (
      <div style={resultsContainerStyle}>
        <div>Results</div>
      </div>
    );
  }
}
