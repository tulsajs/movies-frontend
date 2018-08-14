import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Flex, Box } from 'BuildingBlocks';
import Search from './components/Search';
import Pagination from './components/Pagination';

import MovieList from 'MovieList';

const GET_MOVIES = gql`
  query MoviesList($query: String, $page: Int) {
    moviesList(query: $query, page: $page) {
      movies {
        id
        title
        posterPath
        backdropPath
      }
      page
      totalPages
    }
  }
`;

export default class Home extends Component {
  state = { search: null, page: 1 };

  updateSearch = search => this.setState({ search, page: 1 });
  updatePage = page => this.setState({ page });

  Wrapper = ({ children }) => (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p={3}>
      {children}
    </Flex>
  );

  render() {
    const { Wrapper } = this;
    return (
      <Wrapper>
        <Search updateSearch={this.updateSearch} />
        <Query
          query={GET_MOVIES}
          variables={{ query: this.state.search, page: this.state.page }}>
          {({ loading, error, data: { moviesList } }) => {
            if (loading) return <Box>Loading...</Box>;
            if (error) return `Error! ${error.message}`;

            return (
              <Fragment>
                <Pagination
                  page={moviesList.page}
                  totalPages={moviesList.totalPages}
                  updatePage={this.updatePage}
                />
                <MovieList movies={moviesList.movies} />
              </Fragment>
            );
          }}
        </Query>
      </Wrapper>
    );
  }
}
