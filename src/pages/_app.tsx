import { Global } from '@emotion/react'
import { ChakraProvider } from '@chakra-ui/react'

import theme from '../theme'
import { AppProps } from 'next/app'
import { global } from '../styles/global';
import {Fonts} from '../components/Fonts';

import {Layout} from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      {/* <Fonts /> */}
      <Global styles={global} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
