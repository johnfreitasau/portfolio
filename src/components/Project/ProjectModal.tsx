import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
  Link,
  Image,
} from '@chakra-ui/react';
import { ImGithub } from 'react-icons/im';

export default function ProjectModal({ isOpen, onClose, project }) {
  console.log('PROJECT:', project);
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {project.title}
          <Link href={project.githubUrl} isExternal>
            <ImGithub />
          </Link>
        </ModalHeader>

        <ModalCloseButton />
        <ModalBody>
          <Text marginBottom="1rem">{project.description}</Text>
          <Text marginBottom="1rem">
            <b>Language:</b> {project.stack.languages}
          </Text>
          <Text marginBottom="1rem">
            <b>Libraries:</b> {project.stack.libraries}
          </Text>
          <Text marginBottom="1rem">
            <b>Framework:</b> {project.stack.framework}
          </Text>
          <b>Preview:</b>
          <Image
            src={project.image?.imagePreviewUrl}
            alt={project.image?.imageAlt}
            width="19rem"
          />
        </ModalBody>

        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
}
