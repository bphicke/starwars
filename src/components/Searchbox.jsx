import React, { Component } from "react";

const searchContainerStyle = {
  width: "410px",
  height: "230px",
  borderRadius: "4px",
  boxShadow: "0 1px 2px 0 rgba(132, 132, 132, 0.75)",
  backgroundColor: "#ffffff",
  marginTop: "30px",
  marginRight: "30px",
  marginLeft: "auto",
  display: "flex"
};
const whatAreYouSearchingFor = {
  width: "205px",
  height: "18px",
  fontFamily: "Montserrat",
  fontSize: "14px",
  fontWeight: "600",
  fontStyle: "normal",
  fontStretch: "normal",
  lineHeight: "normal",
  letterSpacing: "normal",
  color: "#383838",
  marginLeft: "30px",
  marginTop: "30px"
};
const radioSelected = {
  width: "16px",
  height: "16px",
  backgroundColor: "#0094ff"
};

export default class Searchbox extends Component {
  render() {
    return (
      <div style={searchContainerStyle}>
        <div style={whatAreYouSearchingFor}>What are you searching for?</div>
        <div>
          <td>
            <input type="radio" />
            People
          </td>
          <td>
            <input type="radio" />
            Movies
          </td>
        </div>
      </div>
    );
  }
}
