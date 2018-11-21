import React, { Component } from "react";
import MovieCharacter from "../components/MovieCharacter.jsx";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "../actions";
import axios from "axios";

class MovieCharacterContainer extends Component {
  selectPerson = () => {
    axios.get(this.props.url).then(async characterData => {
      let filmTitles = await Promise.all(
        characterData.data.films.map(url =>
          axios.get(url).then(filmData => filmData.data.title)
        )
      );

      characterData.data.filmTitles = filmTitles;
      this.props.actions.movieToCharacter(characterData.data);
    });
  };
  render() {
    return (
      <MovieCharacter name={this.props.name} selectPerson={this.selectPerson} />
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
)(MovieCharacterContainer);
