import {
  Flex,
  Heading,
  keyframes,
  Stack,
  usePrefersReducedMotion,
  Text,
} from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { About } from '../components/About';
import { ScrollTopButton } from '../components/Base/ScrollTopButton';
import { CTA } from '../components/CTA';
import { Container } from '../components/Layout/Container';
import { ProjectsList } from '../components/ProjectsList';
import { SEO } from '../components/SEO';
import { Skills } from '../components/Skills';
import { getProjects } from '../graphql/queries/getProjects';
import { getSkills } from '../graphql/queries/getSkills';

const animatedGradientTitle1 = keyframes`
  0%, 16.667%, 100% {
    opacity: 1;
  }

  33.333%, 83.333% {
    opacity: 0.2;
  }
`;

const animatedGradientTitle2 = keyframes`
	0%, 16.667%, 66.667%, 100% {
    opacity:0.2;
  }

	33.333%, 50% {
    opacity:1;
	}
`;

const animatedGradientTitle3 = keyframes`
	0%, 50%, 100% {
    opacity: 0.2;
	}

	66.667%, 83.333% {
    opacity: 1;
	}
`;

interface PortfolioProps {
  projects: Array<Project>;
  skills: {
    detailedSkills?: Array<DetailedSkill>;
    languageSkills?: Array<LanguageSkill>;
    otherSkills?: Array<OtherSkill>;
  };
}

type Project = {
  id: string;
  title: String;
  githubUrl: string;
  liveUrl?: string;
  image?: {
    id: string;
    imageAlt: string;
    thumbnailUrl?: string;
    imagePreviewUrl?: string;
  };
  description?: String;
  language: String;
  frontendStackDetails: String;
  backendStackDetails: String;
  mobileStackDetails: String;
  publishedDate: Date;
  stacks?: {
    id: string;
    name: String;
  }[];
};

type DetailedSkill = {
  id: string;
  name: string;
  icon: string;
  color: string;
};

type LanguageSkill = {
  id: string;
  name: string;
  icon: string;
  color: string;
};

type OtherSkill = {
  id: string;
  name: string;
  icon: string;
  color: string;
};

export default function Index({ projects, skills }: PortfolioProps) {
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
    <>
      <SEO title="John Freitas" image="boost.png" />
      <Container>
        <ScrollTopButton />

        <Flex direction="column">
          <Stack alignItems="center" mt="10">
            <Heading
              bgGradient="linear(90deg, #007Cf0,#00DFD8)"
              bgClip="text"
              fontSize={['19vw', '6rem', '7rem']}
              lineHeight="1"
              fontWeight="bold"
              letterSpacing="-.11em"
              px="2"
              animation={heading1Animation}
            >
              Hi there
            </Heading>
            <Heading
              bgGradient="linear(90deg,#7928CA,#FF0080)"
              bgClip="text"
              fontSize={['19vw', '6rem', '7rem']}
              lineHeight="1"
              fontWeight="bold"
              letterSpacing="-.11em"
              px="2"
              animation={heading2Animation}
            >
              Welcome
            </Heading>
            <Heading
              bgGradient="linear(90deg, #ff4d4d,#f9cb28)"
              bgClip="text"
              fontSize={['19vw', '6rem', '7rem']}
              fontWeight="bold"
              letterSpacing="-.11em"
              px="2"
              animation={heading3Animation}
              isTruncated
              marginY="4rem"
            >
              I'm John
            </Heading>
            <Text
              textColor="black"
              fontSize={['5vw', '2rem', '2rem']}
              fontWeight="normal"
              letterSpacing="-.06em"
              isTruncated
              marginY="4rem"
            >
              I'm a Software Engineer
            </Text>
            <CTA />
          </Stack>
          <About />

          <Skills skills={skills} />

          <Container id="projects" justifyContent="center" paddingTop={20}>
            <ProjectsList projects={projects} />
          </Container>
        </Flex>
      </Container>
    </>
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
