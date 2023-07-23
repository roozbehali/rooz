import React, { useState, useEffect } from 'react'
import { Box, Text, Center } from '@chakra-ui/react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const images = ['david.png', 'pixelated.png']

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      if(currentIndex == 0) {
        setCurrentIndex(1)
      } else {
        setCurrentIndex(0)
      }
    }, 500)
    
    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <center>
      <Navbar/>
      <Center>
        <Box w={[600]} h={[325, 350]} marginTop={[100, 50]} marginBottom={[75, 125]}>
          <img src={images[currentIndex]}/>
          <Text fontSize='5xl' as='p' fontWeight='bold'>Roozbeh Ali</Text>
        </Box>
      </Center>
      <Footer/>
    </center>
  )
}
