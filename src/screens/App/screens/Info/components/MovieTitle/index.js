import React from 'react';

import { Box } from 'BuildingBlocks';

export default ({ children }) => (
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
    {children}
  </Box>
);
