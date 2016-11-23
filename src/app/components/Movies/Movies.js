import React, { Component } from 'react';
import Movie from './Movie';

export default class Movies extends Component {
  renderMovies () {
    const { movies } = this.props;
    return Object.keys(movies).map((key, index) => {
      return (
        <Movie key={index} movie={movies[key]} />
      );
    });
  }

  render () {
    return (
      <div className='movies'>
        {this.renderMovies()}
      </div>
    );
  }
}

Movies.propTypes = {
  movies: React.PropTypes.object.isRequired
};
