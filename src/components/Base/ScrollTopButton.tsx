import { ChevronUpIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export function ScrollTopButton() {
  const [showScroll, setShowScroll] = useState(false);

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setShowScroll(false);
  }

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
  }, [scrollTop]);

  return (
    <Button
      position="fixed"
      h="45px"
      w="45px"
      right="50px"
      bottom="50px"
      borderRadius="6px"
      cursor="pointer"
      transition="all 0.3s ease"
      opacity=".7"
      onClick={scrollTop}
      style={{
        height: 40,
        opacity: showScroll ? 1 : 0,
        transition: 'all 500ms ease-out',
      }}
      z-index={1}
    >
      <ChevronUpIcon />
    </Button>
  );
}
