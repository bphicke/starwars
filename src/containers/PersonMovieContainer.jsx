import React, { Component } from "react";
import PersonMovie from "../components/PersonMovie.jsx";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "../actions";
import axios from "axios";

class PersonMovieContainer extends Component {
  selectMovie = () => {
    axios.get(this.props.url).then(async filmData => {
      console.log(filmData);
      let characterNames = await Promise.all(
        filmData.data.characters.map(url =>
          axios.get(url).then(characterData => characterData.data.name)
        )
      );

      filmData.data.characterNames = characterNames;
      console.log(filmData.data);
      this.props.actions.characterToMovie(filmData.data);
    });
  };
  render() {
    console.log(this.props.url);
    return (
      <PersonMovie film={this.props.film} selectMovie={this.selectMovie} />
    );
  }
}

const mapStateToProps = state => ({
  peopleRadio: state.searchType.peopleRadio,
  selectedResult: state.selectedResult.selectedResult
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonMovieContainer);
