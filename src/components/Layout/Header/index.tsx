import React from 'react';
import { Box, Heading, Flex, Button } from '@chakra-ui/react';
import { HeaderNavigation } from './HeaderNavigation';

export function Header() {
  return (
    <Flex
      as="header"
      top={0}
      css={{ backdropFilter: 'blur(10px)' }}
      width="full"
      zIndex="docked"
      position="sticky"
      height="64px"
    >
      <Box borderBottomWidth={1} display="flex" width="full">
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" pl={3} letterSpacing={'-.1rem'}>
            jf.
          </Heading>
        </Flex>
        <Box display={{ md: 'flex' }} flexGrow={1} justifyContent="center">
          <HeaderNavigation />
        </Box>
      </Box>
    </Flex>
  );
}
