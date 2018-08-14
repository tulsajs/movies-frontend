import React from 'react';
import { Box } from 'BuildingBlocks';

export default ({ children }) => (
  <Box my="100px" mx="20%" textAlign="left" fontSize={[2, 3, 4]}>
    {children}
  </Box>
);
