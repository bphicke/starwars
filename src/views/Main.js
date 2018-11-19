import React, { Component } from "react";
import Header from "../components/Header.jsx";
import Searchbox from '../components/Searchbox.jsx';

const backgroundStyle = {
  width: 'auto',
  height: '900px',
  backgroundColor: '#ededed'
}

export default class Home extends Component {
  render() {
    return (
      <div style={backgroundStyle}>
        <Header />
        <Searchbox />
      </div>
    );
  }
}
