import React, { Component } from "react";

const headerStyle = {
  width: 'auto',
  height: '50px',
  boxShadow: '0 2px 0 0 #dadada',
  backgroundColor: '#ffffff'
};
const SWStarter = {
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '14px',
  marginBottom: '14px',
  width: '98px',
  height: '22px',
  fontFamily: 'Montserrat',
  fontSize: '18px',
  fontWeight: 'bold',
  fontStyle: 'normal',
  fontStretch: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  color: '#0ab463'
}

export default class Header extends Component {
  render() {
    return (
      <div style={headerStyle}>
        <div style={SWStarter}>
          SWStarter
        </div>
      </div>);
  }
}

