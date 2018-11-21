import React, { Component } from "react";
import Home from "../views/Home.jsx";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "../actions";
import axios from "axios";

class HomeContainer extends Component {
  updateSearchQuery = e => {
    this.props.actions.searchQueryAction(e.target.value);
  };

  render() {
    return <Home />;
  }
}

const mapStateToProps = state => ({
  searchQuery: state.searchQuery.searchQuery
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
