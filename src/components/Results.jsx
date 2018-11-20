import React, { Component } from "react";
import Result from "./Result.jsx";

const resultsContainerStyle = {
  width: "582px",
  height: "582px",
  borderRadius: "4px",
  boxShadow: "0 1px 2px 0 rgba(132, 132, 132, 0.75)",
  backgroundColor: "#ffffff",
  marginTop: "30px",
  marginRight: "auto"
};
const headerText = {
  width: "71px",
  height: "22px",
  fontFamily: "Montserrat",
  fontSize: "18px",
  fontWeight: "bold",
  fontStyle: "normal",
  fontStretch: "normal",
  lineHeight: "normal",
  letterSpacing: "normal",
  color: "#000000",
  marginLeft: "30px",
  marginTop: "30px"
};
const divider = {
  width: "522px",
  height: "1px",
  backgroundColor: "#c4c4c4"
};
const noMatches = {
  width: "324px",
  height: "35px",
  fontFamily: "Montserrat",
  fontSize: "14px",
  fontWeight: "bold",
  fontStyle: "normal",
  fontStretch: "normal",
  lineHeight: "normal",
  letterSpacing: "normal",
  color: "#c4c4c4",
  marginLeft: "134px",
  marginTop: "211px",
  textAlign: "center"
};
const listStyle = {
  display: "flex"
};

export default class Results extends Component {
  render() {
    console.log(this.props.results);

    return (
      <div style={resultsContainerStyle}>
        <div style={headerText}>Results</div>
        <hr style={divider} />
        <ul style={listStyle}>
          <Result />
        </ul>
        {this.props.results && this.props.results.length ? (
          this.props.results.map((result, index) => {
            return <Result key={index} />;
          })
        ) : (
          <div style={noMatches}>
            <div>There are zero matches.</div>
            <div>Use the form to search for People or Movies.</div>
          </div>
        )}
      </div>
    );
  }
}
