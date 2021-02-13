import { useColorMode, Switch, Button } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  return (
    // <Switch
    //   position="fixed"
    //   top="1rem"
    //   right="1rem"
    //   color="green"
    //   isChecked={isDark}
    //   onChange={toggleColorMode}
    //   zIndex="docked"
    // />
    <Button
      position="fixed"
      top="1rem"
      right="1rem"
      // color="green"
      isChecked={isDark}
      onClick={toggleColorMode}
      zIndex="docked"
    >
      {isDark ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};
