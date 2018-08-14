import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Box } from 'BuildingBlocks';
import { Link } from 'react-router-dom';

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
    console.log(this.props);
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
              <Box
                border="3px solid"
                textAlign="center"
                position="absolute"
                width={1 / 2}
                top={['48%']}
                color="#2B2D42"
                bg="rgba(237, 242, 244, 1)"
                left="0"
                right="0"
                fontSize={[2, 3, 4]}
                mx="auto"
                borderRadius="2.5"
                p={2}>
                {movie.title}
              </Box>
              <Box
                border="3px solid"
                textAlign="center"
                position="absolute"
                top="20px"
                color="#2B2D42"
                bg="rgba(237, 242, 244, 1)"
                left="20px"
                fontSize={[1]}
                borderRadius="2.5"
                py={2}
                px={3}>
                <Link style={{ textDecoration: 'none' }} to="/">
                  Back
                </Link>
              </Box>
              <Box my="100px" mx="20%" textAlign="left" fontSize={[2, 3, 4]}>
                {movie.overview}
              </Box>
            </div>
          );
        }}
      </Query>
    );
  }
}
