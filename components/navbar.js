import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { Center, Flex, Text, Spacer, Button, ButtonGroup} from '@chakra-ui/react'

export const Navbar = () => {
  const [hover, setHover] = useState(false)
  const router = useRouter()

  //mouse state based on hover
  useEffect(() => {
    document.body.style.cursor = hover ? 'pointer' : 'auto'
  }, [hover])

  return (
    <div>
      <Head>
        <title>Roozbeh Ali</title>
        <link rel="shortcut icon" href="/persian.ico"></link>
      </Head>

      <Flex color='white'>
        <Center w='110px' h='70px'>
          <Text onClick={() => router.push('/')} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)} color={hover ? 'black' : 'gray'} fontWeight='bold'>
          روزبه<sup>TM</sup>
          </Text>
        </Center>
        <Spacer/>
        <Flex minWidth='max-content' alignItems='center' gap='2' margin='5'>
          <ButtonGroup gap='2'>
            <Button onClick={() => router.push('/about')} colorScheme='blackAlpha' size='sm' variant='ghost'>About</Button>
            <Button onClick={() => router.push('/experience')} colorScheme='blackAlpha' size='sm' variant='ghost'>Experience</Button>
            <Button onClick={() => router.push('/resume')} colorScheme='blackAlpha' size='sm' variant='ghost'>Resume</Button>
          </ButtonGroup>
        </Flex>
      </Flex>
    </div>
  )
}