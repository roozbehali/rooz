import React, { useState, useEffect } from 'react'
import { Box, Text } from '@chakra-ui/react'
import { Navbar } from '../components/navbar'

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
      <Navbar></Navbar>
      <Box w='600px' h='350' m={50}>
        <img src={images[currentIndex]}/>
      </Box>
      <Text fontSize='5xl' as='s' fontWeight='bold'>Roozbeh Ali</Text>
    </center>
  )
}
