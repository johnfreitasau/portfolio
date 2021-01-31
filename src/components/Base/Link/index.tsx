import NextLink from 'next/link';
import { Link as ChakraLink } from '@chakra-ui/react';
import { LinkProps } from './tyles';

export function Link ({href, children, ...rest}: LinkProps) {
  return (
    <NextLink href={href}>
      <ChakraLink
        href={href}
        //color={isActive ? colorModeActiveColor : color}
        //fontWeight={usActive ? 700 : 500}
        {...rest}
      >
        {children}
      </ChakraLink>
    </NextLink>
  )
}
