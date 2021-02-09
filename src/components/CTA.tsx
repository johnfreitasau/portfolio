import { Link as ChakraLink, Button } from '@chakra-ui/react';

import { Container } from './Layout/Container';

export const CTA = () => (
  <Container
    py={2}
    display="flex"
    justifyContent="center"
    justifyItems="center"
  >
    {/* <ChakraLink
      isExternal
      href="https://github.com/vercel/next.js/blob/canary/examples/with-chakra-ui-typescript"
      flexGrow={1}
      mx={2}
      v
      w="200px"
      h="50px"
      _hover={{ textDecoration: 'none' }}
    >
      <Button
        width="100%"
        variant="solid"
        bgColor="#000"
        color="white"
        w="200px"
        h="50px"
      >
        Discover more
      </Button>
    </ChakraLink> */}
    <ChakraLink
      isExternal
      href="https://chakra-ui.com"
      _hover={{ textDecoration: 'none' }}
      // flexGrow={1} mx={2}
    >
      <Button bg="transparent" border="1px" w="200px" h="50px">
        Discover more ->
      </Button>
    </ChakraLink>
  </Container>
);
