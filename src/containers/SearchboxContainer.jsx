import React, { Component } from "react";
import Searchbox from "../components/Searchbox.jsx";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "../actions";
import axios from "axios";

class SearchboxContainer extends Component {
  updateSearchQuery = e => {
    this.props.actions.searchQueryAction(e.target.value);
  };

  selectPeople = () => {
    this.props.actions.peopleRadioAction();
  };
  selectMovies = () => {
    this.props.actions.moviesRadioAction();
  };

  render() {
    console.log("moviesRadio", this.props.moviesRadio);
    console.log("peopleRadio", this.props.peopleRadio);
    return (
      <Searchbox
        updateSearchQuery={this.updateSearchQuery}
        selectPeople={this.selectPeople}
        selectMovies={this.selectMovies}
        moviesRadio={this.props.moviesRadio}
        peopleRadio={this.props.peopleRadio}
      />
    );
  }
}

const mapStateToProps = state => ({
  searchQuery: state.searchQuery.searchQuery,
  moviesRadio: state.searchType.moviesRadio,
  peopleRadio: state.searchType.peopleRadio
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchboxContainer);
