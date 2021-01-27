import {
  Link as ChakraLink,
  Flex,
  Stack,
  Heading,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'

import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
// import { CTA } from '../components/CTA'
import { Footer } from '../components/Footer'

const Index = () => (
  // <Container height="100vh">
  <Container height="100vh">
    <header>
      <h1>John Logo</h1>
      {/* <nav>
        <li><a ref='#'>Home</a></li>
        <li><a ref='#'>About</a></li>
        <li><a ref='#'>Projects</a></li>
        <li><a ref='#'>Journal</a></li>
        <li><a ref='#'>Contact</a></li>
      </nav> */}
      <div className="right">
        <a className="conf">
          {/* <img src="assets/special-button.svg" alt="Special button"/> */}
          <span>Special button</span>
        </a>  

          {/* <img src="assets/avatar.svg" alt="Avatar"/>   */}
      </div>  
    </header>

    {/* <Hero /> */}
    <Flex direction="column">
    <Main maxWidth="104.8rem">
      
      {/* <Flex justifyContent="center" alignItems="center" height="100vh"> */}
      <Stack spacing={6} alignItems="center" marginTop="500px" >
      <Heading
        as="span"
        bgGradient="linear(to-l, #7928CA,#FF0080)"
        bgClip="text"
        fontSize="7xl"
        fontWeight="extrabold"
      >Hi there.</Heading>
      <Heading
        bgGradient="linear(to-l, #7928CA,#FF0080)"
        bgClip="text"
        fontSize="7xl"
        fontWeight="extrabold"
      >Welcome.</Heading>
      <Heading
        bgGradient="linear(to-l, #7928CA,#FF0080)"
        bgClip="text"
        fontSize="7xl"
        fontWeight="extrabold"
      >I'm John.</Heading>
      {/* <Heading fontSize="6vw">{row1}</Heading> */}
      {/* <Heading fontSize="6vw">{row2}</Heading> */}
      {/* <Heading fontSize="6vw">{row3}</Heading> */}
    </Stack>
      {/* <Text>
        Example repository of <Code>Next.js</Code> + <Code>chakra-ui</Code> +{' '}
        <Code>typescript</Code>.
      </Text>

      <List spacing={3} my={0}>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <ChakraLink
            isExternal
            href="https://chakra-ui.com"
            flexGrow={1}
            mr={2}
          >
            Chakra UI <LinkIcon />
          </ChakraLink>
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <ChakraLink isExternal href="https://nextjs.org" flexGrow={1} mr={2}>
            Next.js <LinkIcon />
          </ChakraLink>
        </ListItem>
      </List> */}
    </Main>
    </Flex>

    <DarkModeSwitch />
    <Footer>
      {/* <Text>Next ❤️ Chakra</Text> */}
    </Footer>
    {/* <CTA /> */}
  </Container>
)

export default Index
