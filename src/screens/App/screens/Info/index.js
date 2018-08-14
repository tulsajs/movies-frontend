import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import MovieTitle from 'MovieTitle';
import MovieOverview from 'MovieOverview';
import BackButton from 'BackButton';

const GET_MOVIE = gql`
  query GetMovie($id: ID!) {
    movie(id: $id) {
      adult
      backdropPath
      id
      originalLanguage
      originalTitle
      overview
      popularity
      posterPath
      releaseDate
      title
      video
      voteAverage
      voteCount
    }
  }
`;

const baseURL = 'https://image.tmdb.org/t/p/original/';

export default class Info extends Component {
  render() {
    return (
      <Query query={GET_MOVIE} variables={{ id: this.props.match.params.id }}>
        {({ loading, error, data: { movie } }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;

          return (
            <div>
              <img
                style={{ 'object-fit': 'cover', width: '100%', height: '50vh' }}
                src={`${baseURL}${movie.backdropPath || movie.posterPath}`}
                alt={movie.title}
              />
              <MovieTitle>{movie.title}</MovieTitle>
              <BackButton />
              <MovieOverview>{movie.overview}</MovieOverview>
            </div>
          );
        }}
      </Query>
    );
  }
}
