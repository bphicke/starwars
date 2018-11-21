import React, { Component } from "react";
import MovieCharacterContainer from "../containers/MovieCharacterContainer.jsx";

export default class MovieCharacters extends Component {
  render() {
    return (
      <div>
        <div style={title}>Characters</div>
        <hr style={divider} />
        <div style={details}>
          {this.props.selectedResult.characterNames.map((name, index) => {
            return (
              <MovieCharacterContainer
                key={index}
                name={name}
                url={this.props.selectedResult.characters[index]}
              />
            );
          })}
        </div>
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
