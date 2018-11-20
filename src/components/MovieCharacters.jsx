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
  marginLeft: "100px",
  marginTop: "30px"
};
const divider = {
  width: "322px",
  height: "1px",
  backgroundColor: "#c4c4c4",
  marginLeft: "100px",
  marginTop: "10px"
};
const details = {
  marginTop: "5px",
  marginLeft: "100px",
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
const linkStyle = {
  textDecoration: "none"
};

export default class MovieCharacters extends Component {
  render() {
    return (
      <div>
        <div style={title}>Characters</div>
        <hr style={divider} />
        <div style={details}>
          <a href={"/detail"} style={linkStyle}>
            Luke Skywalker
          </a>
          ,
          <a href={"/detail"} style={linkStyle}>
            Jabba Desiliijic Tiure
          </a>
          ,
          <a href={"/detail"} style={linkStyle}>
            Wedge Antilles
          </a>
          ,
          <a href={"/detail"} style={linkStyle}>
            Jek Tono Porkins
          </a>
          ,
          <a href={"/detail"} style={linkStyle}>
            Raymus Antilles
          </a>
        </div>
      </div>
    );
  }
}
