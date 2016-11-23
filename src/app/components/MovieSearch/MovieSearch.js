import React, { Component } from 'react';

export default class MovieSearch extends Component {
  queryMovies (event) {
    event.preventDefault();

    if (this.refs.search.value !== '') {
      this.props.actions.queryMovies(this.refs.search.value);
    }
  }

  render () {
    return (
      <form onSubmit={::this.queryMovies}>
        <input type='text' ref='search' placeholder='Search for Movie' />
        <button type='submit'>Search</button>
      </form>
    );
  }
}

MovieSearch.propTypes = {
  actions: React.PropTypes.object.isRequired
};
