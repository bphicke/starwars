import React, { Component } from "react";
import Detail from "../views/Detail.jsx";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "../actions";

class DetailContainer extends Component {
  render() {
    return (
      <Detail
        people={this.props.peopleRadio}
        selectedResult={this.props.selectedResult}
      />
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
)(DetailContainer);
