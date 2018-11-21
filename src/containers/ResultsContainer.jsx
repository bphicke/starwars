import React, { Component } from "react";
import Results from "../components/Results.jsx";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "../actions";
import axios from "axios";

class ResultsContainer extends Component {
  render() {
    return (
      <Results
        results={this.props.searchResults}
        people={this.props.peopleRadio}
      />
    );
  }
}

const mapStateToProps = state => ({
  moviesRadio: state.searchType.moviesRadio,
  peopleRadio: state.searchType.peopleRadio,
  searchResults: state.searchResults.searchResults
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultsContainer);
