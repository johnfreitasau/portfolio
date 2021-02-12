import {
  Link as ChakraLink,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  useDisclosure,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from '@chakra-ui/react';
import { ImGithub } from 'react-icons/im';

export default function ProjectModal({ isOpen, onClose, project }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{project.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {/* <Lorem count={2} /> */}
          {project.description}
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">
            <ImGithub />
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
