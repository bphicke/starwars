import React, { Component } from "react";

const headerStyle = {
  width: '1440px',
  height: '50px',
  boxShadow: '0 2px 0 0 var(--white)',
  backgroundColor: '#ffffff'
};

export default class Header extends Component {
  render() {
    return (
      <div style={headerStyle}>
        <div>
          SWStarter
        </div>
      </div>);
  }
}
