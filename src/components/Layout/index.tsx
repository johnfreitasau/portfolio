import { Flex } from "@chakra-ui/react";

import {Header} from './Header';
import {Container} from './Container';
import {Footer} from '../Footer';


export function Layout({children}) {

  return (
    <Flex
    direction='column'
    minHeight='100vh'
  >
    <Header />

    <Container>
      {children}
    </Container>
    <Footer />
  </Flex>
  )

}
