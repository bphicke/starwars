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
          {this.props.opening_crawl.map((line, index) => {
            return line.length === 1 ? (
              <React.Fragment key={index}>
                <br />
                <br />
              </React.Fragment>
            ) : (
              <React.Fragment key={index}>
                <div>{line}</div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  }
}
