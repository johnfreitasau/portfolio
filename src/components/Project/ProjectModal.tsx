import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Text,
  Link,
  Image,
  Box,
  VStack,
  Badge,
} from '@chakra-ui/react';
import { useMemo } from 'react';
import { ImGithub } from 'react-icons/im';
import { SiTypescript, SiJavascript } from 'react-icons/si';

export function ProjectModal({ isOpen, onClose, project }) {
  const frontendStackDetails = useMemo(() => {
    if (project.frontendStackDetails) {
      return project.frontendStackDetails?.split(',');
    }
  }, []);

  const backendStackDetails = useMemo(() => {
    if (project.backendStackDetails) {
      return project.backendStackDetails?.split(',');
    }
  }, []);

  const mobileStackDetails = useMemo(() => {
    if (project.mobileStackDetails) {
      return project.mobileStackDetails?.split(',');
    }
  }, []);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{project.title}</ModalHeader>

        <ModalCloseButton />
        <ModalBody>
          <VStack mb="1rem">
            <Text marginBottom="1rem">{project.description}</Text>

            <Image
              src={project.image?.imagePreviewUrl}
              alt={project.image?.imageAlt}
              width="19rem"
            />
            {frontendStackDetails && <b>Frontend</b>}
            <Box>
              {frontendStackDetails?.map((frontendStackDetail) => (
                <Badge
                  borderRadius="full"
                  px="2"
                  colorScheme="blue"
                  variant="subtle"
                  mr={1}
                  key={frontendStackDetail}
                >
                  {frontendStackDetail}
                </Badge>
              ))}
            </Box>

            {backendStackDetails && <b>Backend</b>}
            <Box>
              {backendStackDetails?.map((backendStackDetail) => (
                <Badge
                  borderRadius="full"
                  px="2"
                  colorScheme="cyan"
                  variant="subtle"
                  mr={1}
                  key={backendStackDetail}
                >
                  {backendStackDetail}
                </Badge>
              ))}
            </Box>

            {mobileStackDetails && <b>Mobile</b>}
            <Box>
              {mobileStackDetails?.map((mobileStackDetail) => (
                <Badge
                  borderRadius="full"
                  px="2"
                  colorScheme="purple"
                  variant="subtle"
                  mr={1}
                  key={mobileStackDetail}
                >
                  {mobileStackDetail}
                </Badge>
              ))}
            </Box>

            <Text marginBottom="1rem">
              <VStack>
                <b>Developed in</b>
                {project.language === 'TypeScript' && (
                  <SiTypescript size={35} />
                )}
                {project.language === 'JavaScript' && (
                  <SiJavascript size={35} />
                )}
              </VStack>
            </Text>
            <Text>
              <b>Find out more about this project at</b>
            </Text>
            <Link href={project.githubUrl} isExternal>
              <ImGithub size={25} />
            </Link>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
