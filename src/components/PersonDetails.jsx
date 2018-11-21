import React, { Component } from "react";

export default class PersonDetails extends Component {
  render() {
    return (
      <div>
        <div style={title}>Details</div>
        <hr style={divider} />
        <ul style={details}>
          <li>Birth Year: {this.props.selectedResult.birth_year}</li>
          <li>Gender: {this.props.selectedResult.gender}</li>
          <li>Eye Color: {this.props.selectedResult.eye_color}</li>
          <li>Height: {this.props.selectedResult.height}</li>
          <li>Mass: {this.props.selectedResult.mass}</li>
        </ul>
      </div>
    );
  }
}

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
