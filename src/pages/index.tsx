import {
  Link as ChakraLink,
  Flex,
  Stack,
  Heading,
  Text,
  Button,
  Box,
  Image,
  List,
  ListIcon,
  ListItem,
  keyframes,
  usePrefersReducedMotion,
} from '@chakra-ui/react';
import { CheckCircleIcon, ChevronUpIcon, LinkIcon } from '@chakra-ui/icons';

import { Container } from '../components/Layout/Container';
import { Main } from '../components/Main';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { CTA } from '../components/CTA';
// import { Footer } from '../components/Footer';

import { ProjectsList } from '../components/ProjectsList';
import { GetStaticProps } from 'next';
import { getProjects } from '../graphql/queries/getProjects';
import { Footer } from '../components/Layout/Footer';

const animatedGradientTitle1 = keyframes`
  0%, 16.667%, 100% {
    opacity: 1;
  }

  33.333%, 83.333% {
    opacity: 0;
  }
`;

const animatedGradientTitle2 = keyframes`
	0%, 16.667%, 66.667%, 100% {
    opacity:0
  }

	33.333%, 50% {
		opacity: 1;
	}
`;

const animatedGradientTitle3 = keyframes`
	0%, 50%, 100% {
		opacity: 0;
	}

	66.667%, 83.333% {
		opacity: 1;
	}
`;

const Index = ({ projects }) => {
  function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const prefersReducedMotion = usePrefersReducedMotion();

  const heading1Animation = prefersReducedMotion
    ? undefined
    : `${animatedGradientTitle1} 10s ease-in-out infinite`;

  const heading2Animation = prefersReducedMotion
    ? undefined
    : `${animatedGradientTitle2} 10s ease-in-out infinite`;

  const heading3Animation = prefersReducedMotion
    ? undefined
    : `${animatedGradientTitle3} 10s ease-in-out infinite`;

  return (
    <Container height="100vh">
      <Button
        position="fixed"
        h="45px"
        w="45px"
        backgroundColor="brimson"
        right="50px"
        bottom="50px"
        ta="center"
        lh="45px"
        z-index={9999}
        borderRadius="6px"
        cursor="pointer"
        // opacity={0}
        pointer-event="none"
        transition="all 0.3s ease"
        onClick={scrollTop}
      >
        <ChevronUpIcon />
      </Button>

      <Flex direction="column">
        <Main
          maxWidth="104.8rem"
          flex="1"
          alignItems="center"
          justifyContent="center"
          p="5.6rem 2.4rem"
          marginLeft="2rem"
        >
          {/* <Flex justifyContent="center" alignItems="center" height="100vh"> */}
          <Stack spacing={6} alignItems="center" marginTop="330px">
            <Heading
              bgGradient="linear(90deg, #007Cf0,#00DFD8)"
              bgClip="text"
              fontSize="9vw"
              lineHeight="1"
              fontWeight="bold"
              letterSpacing="-.06em"
              animation={heading1Animation}
            >
              Hi there.
            </Heading>
            <Heading
              bgGradient="linear(90deg,#7928CA,#FF0080)"
              bgClip="text"
              fontSize="9vw"
              lineHeight="1"
              fontWeight="bold"
              letterSpacing="-.06em"
              animation={heading2Animation}
            >
              Welcome.
            </Heading>
            <Heading
              bgGradient="linear(90deg, #ff4d4d,#f9cb28)"
              bgClip="text"
              fontSize="9vw"
              lineHeight="1"
              fontWeight="bold"
              letterSpacing="-.06em"
              animation={heading3Animation}
              textAlign="right"
            >
              I'm John.
            </Heading>
          </Stack>
          <CTA />
          <Text
            mt="6.4rem"
            fontSize="1.25rem"
            fontWeight="normal"
            letterSpacing="-0.02rem"
            textAlign="center"
          >
            Hello! I'm full-stack developer. I'm working as SR Systems Engineer
            at @Canon Oceania. My learning as a developer today is based on
            creating projects and contributing to the open source community.
          </Text>

          {/* About section start */}
          <section id="about">
            <div id="maxWidth">
              <Heading as="h2" paddingTop={10} textAlign="center" mb="50">
                About me
              </Heading>

              <Box p={4} display={{ md: 'flex' }} alignItems="center">
                {/* <Flex
                  id="about-content"
                  flexWrap="wrap"
                  alignItems="center"
                  justifyContent="space-between"
                > */}
                <Box flexShrink={0} display="flex" justifyContent="center">
                  <Image
                    src="https://avatars.githubusercontent.com/u/44829778?s=460&u=d78ee0395a879c432ea3dbde78dfc3f9bb0d50ac&v=4"
                    alt="me"
                    // boxSize="300px"
                    // objectFit="cover"
                    // borderRadius="15%"
                    borderRadius="lg"
                    width={{ base: 500, sm: 400, md: 300 }}
                  />
                </Box>
                <Box
                  id="column-right"
                  // width="55%"
                  mt={{ base: 4, md: 0 }}
                  ml={{ md: 5 }}
                >
                  <Text fontSize="24px" fontWeight="700">
                    I'm John Freitas
                  </Text>
                  <p>
                    Hello! I'm full-stack developer. I'm working as SR Systems
                    Engineer at @Canon Oceania. My learning as a developer today
                    is based on creating projects and contributing to the open
                    source community.
                  </p>
                </Box>
                {/* </Flex> */}
              </Box>
            </div>
          </section>
          <Box>
            <Heading as="h2" paddingTop={10} textAlign="center" mb="50">
              Skills
            </Heading>
            <p>
              Hello! I'm full-stack developer. I'm working as SR Systems
              Engineer at @Canon Oceania. My learning as a developer today is
              based on creating projects and contributing to the open source
              community.
            </p>
          </Box>

          <ProjectsList projects={projects} />

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
              <ChakraLink
                isExternal
                href="https://nextjs.org"
                flexGrow={1}
                mr={2}
              >
                Next.js <LinkIcon />
              </ChakraLink>
            </ListItem>
          </List>
        </Main>
      </Flex>

      <DarkModeSwitch />

      {/* <Footer><Text>Next ❤️ Chakra</Text></Footer> */}
    </Container>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  console.log('chegou aqui');

  const projects = await getProjects();

  console.log('PROJECTS:', projects);

  return {
    props: {
      projects,
    },
  };
};
