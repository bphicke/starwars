import React, { Component } from "react";
import Header from "../components/Header.jsx";

const backgroundStyle = {
  width: "auto",
  height: "900px",
  backgroundColor: "#ededed"
};
const container = {
  display: "flex"
};

export default class Detail extends Component {
  render() {
    return (
      <div style={backgroundStyle}>
        <Header />
      </div>
    );
  }
}
