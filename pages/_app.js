import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import AnimatedCursor from 'react-animated-cursor'

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
      <AnimatedCursor
        innerSize={0}
        outerSize={8}
        outerAlpha={0.2}
        outerScale={4}
        trailingSpeed={5}
        color='0,0,0'
        showSystemCursor='true'
      />
    </ChakraProvider>
  )
}