import React from 'react';
import PropTypes from 'prop-types';

import Movie from './Movie';

const Movies = ({ movies }) => (
  <div className="movies_container">
    {Object.keys(movies).map((key, index) => (
      <Movie key={index} movie={movies[key]} />
    ))}
  </div>
);

export default Movies;

Movies.propTypes = {
  movies: PropTypes.object.isRequired
};
