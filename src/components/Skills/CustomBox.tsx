import React from 'react';
import { Box } from '@chakra-ui/react';

import * as SimpleIcons from 'react-icons/si';

export function CustomBox({ iconName, stackName, size, color }) {
  const icon = React.createElement(SimpleIcons[iconName]);

  return (
    <Box
      d="flex"
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      boxShadow="2xl"
      rounded="xl"
      _hover={{ opacity: 1, transform: 'scale(1.02)' }}
      transition="all 0.5s ease"
      opacity="0.6"
      w="150px"
      h="150px"
      marginX="5px"
    >
      <div style={{ fontSize: size, color: color }}>{icon}</div>
      {stackName}
    </Box>
  );
}
