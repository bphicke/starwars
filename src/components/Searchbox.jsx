import React, { Component } from "react";

export default class Searchbox extends Component {
  render() {
    return (
      <div style={searchContainerStyle}>
        <div style={whatAreYouSearchingFor}>What are you searching for?</div>
        <div style={inputs}>
          <span>
            <input
              type="radio"
              style={radioSelected}
              onChange={this.props.selectPeople}
              checked={this.props.peopleRadio}
            />
            <label style={labels}>People</label>
          </span>
          <span>
            <input
              type="radio"
              style={radioSelected}
              onChange={this.props.selectMovies}
              checked={this.props.moviesRadio}
            />
            <label style={labels}>Movies</label>
          </span>
        </div>
        <div>
          <input
            type="text"
            style={
              this.props.searchQuery === "" ? inputTextPlaceholder : inputText
            }
            placeholder={"  e.g. Chewbacca, Yoda, Boba Fett"}
            onChange={this.props.updateSearchQuery}
          />
        </div>
        <button
          style={
            this.props.searchQuery === ""
              ? searchButtonDisabled
              : searchButtonEnabled
          }
          onClick={this.props.searchAPI}
        >
          {this.props.isLoading ? "SEARCHING..." : "SEARCH"}
        </button>
      </div>
    );
  }
}

const searchContainerStyle = {
  width: "410px",
  height: "230px",
  borderRadius: "4px",
  boxShadow: "0 1px 2px 0 rgba(132, 132, 132, 0.75)",
  backgroundColor: "#ffffff",
  marginTop: "30px",
  marginRight: "30px",
  marginLeft: "auto",
  display: "flex",
  flexDirection: "column"
};
const whatAreYouSearchingFor = {
  width: "380px",
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
const inputs = {
  width: "380px",
  marginTop: "20px",
  marginLeft: "30px"
};
const radioSelected = {
  width: "16px",
  height: "16px",
  backgroundColor: "#0094ff"
};
const labels = {
  verticalAlign: "top",
  width: "51px",
  height: "18px",
  fontFamily: "Montserrat",
  fontSize: "14px",
  fontWeight: "bold",
  fontStyle: "normal",
  fontStretch: "normal",
  lineHeight: "normal",
  letterSpacing: "normal",
  color: "#000000",
  marginRight: "30px",
  marginLeft: "10px"
};
const inputTextPlaceholder = {
  width: "350px",
  height: "40px",
  borderRadius: "4px",
  boxShadow: "inset 0 1px 3px 0 rgba(132, 132, 132, 0.75)",
  borderStyle: "solid",
  borderWidth: "thin",
  backgroundColor: "#ffffff",
  marginLeft: "30px",
  marginTop: "20px",
  fontFamily: "Montserrat",
  fontSize: "14px",
  fontWeight: "bold",
  fontStyle: "normal",
  fontStretch: "normal",
  lineHeight: "normal",
  letterSpacing: "normal",
  color: "#c4c4c4"
};
const inputText = {
  width: "350px",
  height: "40px",
  borderRadius: "4px",
  boxShadow: "inset 0 1px 3px 0 rgba(132, 132, 132, 0.75)",
  borderStyle: "solid",
  borderWidth: "thin",
  backgroundColor: "#ffffff",
  marginLeft: "30px",
  marginTop: "20px",
  fontFamily: "Montserrat",
  fontSize: "14px",
  fontWeight: "bold",
  fontStyle: "normal",
  fontStretch: "normal",
  lineHeight: "normal",
  letterSpacing: "normal",
  color: "#383838"
};
const searchButtonDisabled = {
  width: "350px",
  height: "34px",
  borderRadius: "20px",
  borderStyle: "solid",
  borderColor: "#c4c4c4",
  backgroundColor: "#c4c4c4",
  marginLeft: "30px",
  marginTop: "20px",
  fontSize: "14px",
  fontWeight: "bold",
  fontStyle: "normal",
  fontStretch: "normal",
  lineHeight: "normal",
  letterSpacing: "normal",
  color: "#ffffff"
};
const searchButtonEnabled = {
  width: "350px",
  height: "34px",
  borderRadius: "20px",
  borderStyle: "solid",
  borderColor: "#0ab463",
  backgroundColor: "#0ab463",
  marginLeft: "30px",
  marginTop: "20px",
  fontSize: "14px",
  fontWeight: "bold",
  fontStyle: "normal",
  fontStretch: "normal",
  lineHeight: "normal",
  letterSpacing: "normal",
  color: "#ffffff"
};
