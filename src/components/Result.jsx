import React, { Component } from "react";

const ResultContainerStyle = {
  listStyleType: "none"
};
const buttonStyle = {
  width: "134px",
  height: "34px",
  borderRadius: "17px",
  backgroundColor: "#0ab463",
  borderColor: "#0ab463",
  borderStyle: "solid",
  color: "#ffffff",
  fontFamily: "Montserrat",
  fontSize: "14px",
  fontWeight: "bold",
  fontStyle: "normal",
  fontStretch: "normal",
  lineHeight: "normal",
  letterSpacing: "normal",
  marginLeft: "252px"
};
const nameText = {
  width: "149px",
  height: "20px",
  fontFamily: "Montserrat",
  fontSize: "16px",
  fontWeight: "bold",
  fontStyle: "normal",
  fontStretch: "normal",
  lineHeight: "normal",
  letterSpacing: "normal",
  color: "#000000",
  marginLeft: "-12px"
};
const divider = {
  width: "522px",
  height: "1px",
  backgroundColor: "#c4c4c4",
  marginLeft: "-10px",
  marginTop: "10px"
};

export default class Result extends Component {
  render() {
    return (
      <li style={ResultContainerStyle}>
        <span style={nameText}>
          {this.props.people ? this.props.result.name : this.props.result.title}
        </span>
        <button style={buttonStyle} onClick={this.props.selectResult}>
          SEE DETAILS
        </button>
        <hr style={divider} />
      </li>
    );
  }
}
