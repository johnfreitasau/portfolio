import { Link as ChakraLink, Button } from '@chakra-ui/react'

import { Container } from './Layout/Container'

export const CTA = () => (
  <Container
    flexDirection="row"
    // position="fixed"
    // bottom="0"
    width="100%"
    maxWidth="48rem"
    py={2}
  >

    <ChakraLink
      isExternal
      href="https://github.com/vercel/next.js/blob/canary/examples/with-chakra-ui-typescript"
      // flexGrow={1}
      // mx={2}
      w="200px" h="50px"
    >
      {/* <Button width="100%" variant="solid" colorScheme="green"> */}
      <Button width="100%" variant="solid" bgColor="#000" color="white" w="200px" h="50px">
        Discover more
      </Button>
    </ChakraLink>
    <ChakraLink isExternal href="https://chakra-ui.com"
    // flexGrow={1} mx={2}
    >
      <Button
        width="100%"
        variant="outline"
        colorScheme="green"
        w="200px" h="50px"
      >
        About me
      </Button>
    </ChakraLink>


  </Container>
)
