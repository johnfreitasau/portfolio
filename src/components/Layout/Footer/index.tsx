import { Box, Heading, Flex } from '@chakra-ui/react';

export function Footer() {
  return (
    <Flex
      as="footer"
      // bottom={0}

      // width="full"
      // zIndex="docked"
      // position="sticky"
      // height="64px"
      // flexShrink={0}
      width="full"
      marginTop="auto"
      direction="column"
      borderTopWidth={1}
      css={{ background: '#333' }}
    >
      <Box borderTopWidth={1} display="flex" width="full">
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" pl={3} letterSpacing={'-.1rem'}>
            Footer
          </Heading>
        </Flex>

        <Box
          display={{ md: 'flex' }}
          flexGrow={1}
          justifyContent="center"
        ></Box>
      </Box>
    </Flex>
  );
}
