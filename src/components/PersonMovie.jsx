import React, { Component } from "react";

export default class PersonMovie extends Component {
  render() {
    return (
      <li>
        <div onClick={this.props.selectMovie}>{this.props.film}</div>
      </li>
    );
  }
}
