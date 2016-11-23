import React from 'react';

const Movie = ({ movie }) => {
  const poster = 'https://image.tmdb.org/t/p/w500/';
  const placeholder = 'http://www.popcorn.sg/assets/app/images/placeholder-movieimage.png';
  return (
    <div className='movie'>
      <img width='250' src={movie.poster_path ? poster + movie.poster_path : placeholder} />
      <div className='movie__title'>{movie.title}</div>
      <div className='movie__release-date'>Release Date: {movie.release_date}</div>
      <div className='movie__overview'>{movie.overview}</div>
    </div>
  );
};

Movie.propTypes = {
  movie: React.PropTypes.object.isRequired
};

export default Movie;
