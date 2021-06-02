import { Button } from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';
export const ResumeButton = () => {
  return (
    <Button
      colorScheme="twitter"
      leftIcon={<DownloadIcon />}
      marginX="0.5rem"
      right="1rem"
      disabled
    >
      Resume
    </Button>
  );
};
