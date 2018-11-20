import React, { Component } from "react";

const title = {
  width: "322px",
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
  marginLeft: "30px",
  width: "220px",
  height: "325px",
  fontFamily: "Montserrat",
  fontSize: "14px",
  fontWeight: "normal",
  fontStyle: "normal",
  fontStretch: "normal",
  lineHeight: "normal",
  letterSpacing: "normal",
  color: "#000000"
};

export default class MovieCrawl extends Component {
  render() {
    return (
      <div>
        <div style={title}>Opening Crawl</div>
        <hr style={divider} />
        <div style={details}>
          Luke Skywalker has returned to his home planet of Tatooine in an
          attempt to rescue his friend Han Solo from the clutches of the vile
          gangster Jabba the Hutt.
          <br />
          <br />
          Little does Luke know that the GALACTIC EMPIRE has secretly begun
          construction on a new armored space station even more powerful than
          the first dreaded Death Star.
          <br />
          <br />
          When completed, this ultimate weapon will spell certain doom for the
          small band of rebels struggling to restore freedom to the galaxy...
        </div>
      </div>
    );
  }
}
