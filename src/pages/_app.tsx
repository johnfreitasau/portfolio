import { Global } from '@emotion/react'
import { ChakraProvider } from '@chakra-ui/react'

import theme from '../theme'
import { AppProps } from 'next/app'
import { global } from '../styles/global';
import {Fonts} from '../components/Fonts';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Fonts />
      <Global styles={global} />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
