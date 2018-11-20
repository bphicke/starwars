import React, { Component } from "react";

const title = {
  width: "59px",
  height: "20px",
  fontFamily: "Montserrat",
  fontSize: "16px",
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
  width: "322px",
  height: "1px",
  backgroundColor: "#c4c4c4",
  marginLeft: "30px",
  marginTop: "10px"
};
const details = {
  marginTop: "5px",
  marginLeft: "-10px",
  width: "322px",
  height: "220px",
  fontFamily: "Montserrat",
  fontSize: "14px",
  fontWeight: "normal",
  fontStyle: "normal",
  fontStretch: "normal",
  lineHeight: "normal",
  letterSpacing: "normal",
  color: "#000000",
  listStyle: "none"
};

export default class PersonDetails extends Component {
  render() {
    return (
      <div>
        <div style={title}>Details</div>
        <hr style={divider} />
        <ul style={details}>
          <li>Birth Year: 24BBY</li>
          <li>Gender: male</li>
          <li>Eye Color: black</li>
          <li>Height: 183</li>
          <li>Mass: 84</li>
        </ul>
      </div>
    );
  }
}