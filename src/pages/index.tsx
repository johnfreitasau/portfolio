import { ChevronUpIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
  Heading,
  keyframes,
  Stack,
  usePrefersReducedMotion,
} from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { CTA } from '../components/CTA';
import { Container } from '../components/Layout/Container';
import { ProjectsList } from '../components/ProjectsList';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { getProjects } from '../graphql/queries/getProjects';
import { getSkills } from '../graphql/queries/getSkills';
import { ProjectsListProps } from '../components/ProjectsList/types';
import { Skill } from '../graphql/schema';

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

interface PortfolioProps {
  projects: ProjectsListProps;
  skills: Skill;
}

export default function Index({ projects, skills }: PortfolioProps) {
  function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const prefersReducedMotion = usePrefersReducedMotion();

  const heading1Animation = prefersReducedMotion
    ? undefined
    : `${animatedGradientTitle1} 7s ease-in-out infinite`;

  const heading2Animation = prefersReducedMotion
    ? undefined
    : `${animatedGradientTitle2} 7s ease-in-out infinite`;

  const heading3Animation = prefersReducedMotion
    ? undefined
    : `${animatedGradientTitle3} 7s ease-in-out infinite`;

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
          marginTop="-3rem"
        >
          <Heading
            bgGradient="linear(90deg, #007Cf0,#00DFD8)"
            bgClip="text"
            fontSize={['19vw', '8rem', '10rem']}
            lineHeight="1"
            fontWeight="bold"
            letterSpacing="-.06em"
            animation={heading1Animation}
          >
            Hello.
          </Heading>
          <Heading
            bgGradient="linear(90deg,#7928CA,#FF0080)"
            bgClip="text"
            fontSize={['19vw', '8rem', '10rem']}
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
            fontSize={['19vw', '8rem', '10rem']}
            lineHeight="1"
            fontWeight="bold"
            letterSpacing="-.06em"
            animation={heading3Animation}
            textAlign="right"
            isTruncated
          >
            I'm John.
          </Heading>
          <CTA />
        </Stack>
        <About />

        <Skills skills={skills} />

        <Container id="projects" justifyContent="center" paddingTop={20}>
          <ProjectsList projects={projects} />
        </Container>
      </Flex>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getProjects();

  const skills = await getSkills();

  return {
    props: {
      projects,
      skills,
    },
  };
};
