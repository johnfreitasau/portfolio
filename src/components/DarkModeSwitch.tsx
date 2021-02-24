import { useColorMode, Button } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  return (
    <Button
      top=".725rem"
      right="1rem"
      ischecked={isDark ? 'true' : 'false'}
      onClick={toggleColorMode}
    >
      {isDark ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};
