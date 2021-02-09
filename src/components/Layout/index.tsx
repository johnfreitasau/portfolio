import { Flex } from '@chakra-ui/react';

import { Header } from './Header';
import { Container } from './Container';
import { Footer } from './Footer';

export function Layout({ children }) {
  return (
    <Flex
      direction="column"
      minHeight="100vh"
      // maxW={{ xl: '1200px' }}
      // m="0 auto"
    >
      <Header />
      <Container as="main">{children}</Container>
      <Footer />
    </Flex>
  );
}
