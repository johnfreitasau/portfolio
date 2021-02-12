import { Link as ChakraLink, Button } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

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
      // isExternal
      href="#about"
      _hover={{
        textDecoration: 'none',
      }}
      // flexGrow={1} mx={2}
    >
      <Button
        bg="transparent"
        border="1px"
        w="150px"
        h="150px"
        _hover={{
          transform: 'rotateZ(90deg)',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
        }}
      >
        Discover more
        <ArrowForwardIcon />
      </Button>
    </ChakraLink>
  </Container>
);
