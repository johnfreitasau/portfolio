import React from 'react';
import { Box, Heading, Flex, HStack } from '@chakra-ui/react';
import { HeaderNavigation } from './HeaderNavigation';
import { DarkModeSwitch } from '../../DarkModeSwitch';
import { ResumeButton } from '../../Base/ResumeButton';
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
      <HStack borderBottomWidth={1} width="full">
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" pl={3} letterSpacing={'-.2rem'}>
            .jf
          </Heading>
        </Flex>
        <Flex flexGrow={1}>
          <HeaderNavigation />
        </Flex>
        <Box>
          {/* <ResumeButton /> */}
          <DarkModeSwitch />
        </Box>
      </HStack>
    </Flex>
  );
}
