import React, { Component } from "react";

export default class PersonMovie extends Component {
  render() {
    return (
      <li>
        <a onClick={this.props.selectMovie}>{this.props.film}</a>
      </li>
    );
  }
}
