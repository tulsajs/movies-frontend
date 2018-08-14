import React from 'react';
import { Link } from 'react-router-dom';

import { Text, Box } from 'BuildingBlocks';

const baseURL = 'https://image.tmdb.org/t/p/w500/';

export default ({ movie: { id, title, posterPath } }) => (
  <Box width={[1, 1 / 2, 1 / 3, 1 / 4, 1 / 5, 1 / 6]} p={[0, 2, 4]}>
    <Link to={`/${id}`}>
      <img
        style={{ width: '100%' }}
        src={`${baseURL}${posterPath}`}
        alt={title}
      />
    </Link>
    <Text textAlign="center" fontSize={[4, 2]} m={2}>
      <Link to={`/${id}`}>{title}</Link>
    </Text>
  </Box>
);
