import React, { Component } from "react";
import Header from "./Header";

const backgroundStyle = {
  width: '1440px',
  height: '900px',
  backgroundColor: '#ededed'
}

export default class Home extends Component {
  render() {
    return (
      <div style={backgroundStyle}>
        <Header />
      </div>
    );
  }
}
