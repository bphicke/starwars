import React, { Component } from "react";
import PersonDetails from "./PersonDetails.jsx";
import PersonMovies from "./PersonMovies.jsx";

const PersonBoxStyle = {
  width: "804px",
  height: "417px",
  borderRadius: "4px",
  boxShadow: "0 1px 2px 0 rgba(132, 132, 132, 0.75)",
  backgroundColor: "#ffffff",
  marginTop: "30px",
  marginLeft: "auto",
  marginRight: "auto"
};
const titleText = {
  width: "322px",
  height: "22px",
  fontFamily: "Montserrat",
  fontSize: "18px",
  fontWeight: "bold",
  fontStyle: "normal",
  fontStretch: "normal",
  lineHeight: "normal",
  letterSpacing: "normal",
  color: "#000000",
  marginTop: "30px",
  marginLeft: "30px"
};
const buttonStyle = {
  width: "187px",
  height: "34px",
  borderRadius: "17px",
  backgroundColor: "#0ab463",
  fontFamily: "Montserrat",
  fontSize: "14px",
  fontWeight: "bold",
  fontStyle: "normal",
  fontStretch: "normal",
  lineHeight: "normal",
  letterSpacing: "normal",
  color: "#ffffff",
  marginLeft: "30px",
  borderStyle: "solid",
  borderColor: "#0ab463"
};
const container = {
  display: "flex"
};

export default class Person extends Component {
  render() {
    return (
      <div style={PersonBoxStyle}>
        <div style={titleText}>Bib Fortuna</div>
        <div style={container}>
          <PersonDetails />
          <PersonMovies />
        </div>
        <button style={buttonStyle}>BACK TO SEARCH</button>
      </div>
    );
  }
}
