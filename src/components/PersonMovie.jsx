import React, { Component } from "react";

export default class PersonMovie extends Component {
  render() {
    return (
      <li>
        <a>{this.props.film}</a>
      </li>
    );
  }
}
