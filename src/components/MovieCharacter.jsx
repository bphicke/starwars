import React, { Component } from "react";

export default class MovieCharacter extends Component {
  render() {
    return (
      <span onClick={this.props.selectPerson}>{this.props.name + " , "}</span>
    );
  }
}
