import React, { Component } from "react";
import Result from "../components/Result.jsx";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "../actions";
import axios from "axios";

class ResultContainer extends Component {
  selectResult = async () => {
    if (this.props.peopleRadio) {
      let films = await Promise.all(
        this.props.result.films.map(url =>
          axios.get(url).then(filmData => filmData.data.title)
        )
      );
      this.props.result.filmTitles = films;
    } else {
      let characterNames = await Promise.all(
        this.props.result.characters.map(url =>
          axios.get(url).then(characterData => characterData.data.name)
        )
      );
      this.props.result.characterNames = characterNames;
    }
    this.props.actions.selectedResult(this.props.result);
  };
  render() {
    console.log(this.props.selectedResult);
    return (
      <Result
        result={this.props.result}
        people={this.props.people}
        selectResult={this.selectResult}
      />
    );
  }
}

const mapStateToProps = state => ({
  moviesRadio: state.searchType.moviesRadio,
  peopleRadio: state.searchType.peopleRadio,
  searchResults: state.searchResults.searchResults,
  selectedResult: state.selectedResult.selectedResult
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultContainer);
