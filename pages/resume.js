import { Center } from '@chakra-ui/react'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'


export default function Home() {
  return (
    <center>
      <Navbar/>
      <Center marginTop={75}>
        <embed src="Roozbeh's resume V1.1.pdf" width={[450]} height={[625]} />
      </Center>
      <Footer/>
    </center>
  )
}
