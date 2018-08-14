import React from 'react';

import { Box } from 'BuildingBlocks';
import { Link } from 'react-router-dom';

export default () => (
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
);
