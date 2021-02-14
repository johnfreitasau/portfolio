import {
  Flex,
  Stack,
  Heading,
  Text,
  Button,
  Box,
  Image,
  keyframes,
  usePrefersReducedMotion,
} from '@chakra-ui/react';
import { ChevronUpIcon } from '@chakra-ui/icons';

import { Container } from '../components/Layout/Container';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { CTA } from '../components/CTA';

import { ProjectsList } from '../components/ProjectsList';
import { GetStaticProps } from 'next';
import { getProjects } from '../graphql/queries/getProjects';

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

export default function Index({ projects }) {
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
    <Container id="home">
      <Button
        position="fixed"
        h="45px"
        w="45px"
        backgroundColor="brimson"
        right="50px"
        bottom="50px"
        ta="center"
        lh="45px"
        borderRadius="6px"
        cursor="pointer"
        // opacity={0}
        pointer-event="none"
        transition="all 0.3s ease"
        onClick={scrollTop}
        z-index={1}
      >
        <ChevronUpIcon />
      </Button>

      <Flex direction="column">
        <Stack
          spacing={6}
          alignItems="center"
          height="100vh"
          justifyContent="center"
        >
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
          <CTA />
        </Stack>

        <Container id="about" height="100vh" justifyContent="center">
          <div id="maxWidth">
            <Heading
              as="h2"
              paddingTop={10}
              textAlign="center"
              mb="50"
              id="about"
            >
              About me
            </Heading>

            <Box p={4} display={{ md: 'flex' }} alignItems="center">
              <Box flexShrink={0} display="flex" justifyContent="center">
                <Image
                  src="https://avatars.githubusercontent.com/u/44829778?s=460&u=d78ee0395a879c432ea3dbde78dfc3f9bb0d50ac&v=4"
                  alt="me"
                  borderRadius="lg"
                  width={{ base: 500, sm: 400, md: 300 }}
                />
              </Box>
              <Box id="column-right" mt={{ base: 4, md: 0 }} ml={{ md: 5 }}>
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
            </Box>
          </div>
        </Container>

        <Container id="projects" justifyContent="center">
          <ProjectsList projects={projects} />
        </Container>

        <Container id="skills" justifyContent="center">
          <Heading as="h2" paddingTop={10} textAlign="center" mb="50">
            Skills
          </Heading>
          <p>
            Hello! I'm full-stack developer. I'm working as SR Systems Engineer
            at @Canon Oceania. My learning as a developer today is based on
            creating projects and contributing to the open source community.
          </p>
        </Container>
      </Flex>
      {/* <DarkModeSwitch /> */}
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getProjects();

  return {
    props: {
      projects,
    },
  };
};
