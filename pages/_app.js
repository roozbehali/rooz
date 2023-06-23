import '@/styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

// const theme = extendTheme({
//     fonts: {
//       heading: `'Helvetica', sans-serif`,
//       body: `'Raleway', sans-serif`,
//     },
// })

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}