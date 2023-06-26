import { Center } from '@chakra-ui/react'

import { Navbar } from '../components/navbar'


export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Center m='5'>
        <embed src="RA Resume.pdf" width="850px" height="600px" />
      </Center>
    </div>
  )
}
