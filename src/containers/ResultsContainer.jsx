import React, { Component } from "react";
import Results from "../components/Results.jsx";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "../actions";
import axios from "axios";

class ResultsContainer extends Component {
  // updateSearchQuery = e => {
  //   this.props.actions.searchQueryAction(e.target.value);
  // };

  // selectPeople = () => {
  //   this.props.actions.peopleRadioAction();
  // };
  // selectMovies = () => {
  //   this.props.actions.moviesRadioAction();
  // };

  // searchAPI = () => {
  //   let peopleOrFilms;
  //   if (this.props.peopleRadio) {
  //     peopleOrFilms = "people";
  //   } else {
  //     peopleOrFilms = "films";
  //   }
  //   let url = `https://swapi.co/api/${peopleOrFilms}/?search=${
  //     this.props.searchQuery
  //   }`;
  //   axios.get(url).then(data => {
  //     this.props.actions.searchResultsAction(data.data.results);
  //   });
  // };

  render() {
    return <Results results={this.props.searchResults} />;
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

// updateSearchQuery={this.updateSearchQuery}
// selectPeople={this.selectPeople}
// selectMovies={this.selectMovies}
// moviesRadio={this.props.moviesRadio}
// peopleRadio={this.props.peopleRadio}
// searchAPI={this.searchAPI}
