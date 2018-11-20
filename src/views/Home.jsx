import React, { Component } from "react";
import Header from "../components/Header.jsx";
import Searchbox from '../components/Searchbox.jsx';
import Results from '../components/Results.jsx';

const backgroundStyle = {
  width: 'auto',
  height: '900px',
  backgroundColor: '#ededed'
}
const container = {
  display: 'flex'
}

export default class Home extends Component {
  render() {
    return (
      <div style={backgroundStyle}>
        <Header />
        <div style={container}>
          <Searchbox />
          <Results />
        </div>
      </div>
    );
  }
}
