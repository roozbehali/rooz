import { Center } from '@chakra-ui/react'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'


export default function Home() {
  return (
    <center>
      <Navbar></Navbar>
      <Center marginTop={25}>
        <embed src="RA Resume.pdf" width="450px" height="625px" />
      </Center>
    </center>
  )
}
