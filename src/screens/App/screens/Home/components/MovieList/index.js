import React from 'react';

import { Flex } from 'BuildingBlocks';
import Movie from 'Movie';

export default ({ movies }) => (
  <Flex flexWrap="wrap" justifyContent="flex-start">
    {movies.map(movie => (
      <Movie movie={movie} key={movie.id} />
    ))}
  </Flex>
);
