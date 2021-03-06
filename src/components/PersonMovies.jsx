import React, { Component } from "react";
import PersonMovieContainer from "../containers/PersonMovieContainer.jsx";

export default class PersonMovies extends Component {
  render() {
    return (
      <div>
        <div style={title}>Movies</div>
        <hr style={divider} />
        <ul style={details}>
          {this.props.selectedResult.filmTitles.map((film, index) => {
            return (
              <PersonMovieContainer
                key={index}
                film={film}
                url={this.props.selectedResult.films[index]}
              />
            );
          })}
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
  marginLeft: "60px",
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
