import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { CharacterList } from "../components";
import { loadCharacters } from "../actions";

class CharacterListView extends React.Component {
  componentDidMount() {
    this.props.loadCharacters();
  }

  render() {
    if (this.props.fetching) {
      return (
        <div>
          <h2>Loading...</h2>
          <Loader type="Ball-Triangle" color="#00BFFF" height="90" width="60" />
        </div>
      );
    } else {
      return (
        <div className="CharactersList_wrapper">
          <CharacterList characters={this.props.characters} />
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  fetching: state.charsReducer.fetching
});

export default connect(
  mapStateToProps,
  { loadCharacters }
)(CharacterListView);
