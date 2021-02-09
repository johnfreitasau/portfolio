import { Container as ChakraContainer, ContainerProps } from '@chakra-ui/react';

export function Container({ children, ...rest }: ContainerProps) {
  return (
    <ChakraContainer maxW="4xl" paddingX={3} {...rest}>
      {children}
    </ChakraContainer>
  );
}
