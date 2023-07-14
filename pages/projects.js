import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { Text, Grid, Center, Stack, Heading, Link } from '@chakra-ui/react'
import { BiLink } from 'react-icons/bi'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'


export default function Home() {
  return (
    <center>
      <Navbar></Navbar>
      <Grid marginTop={100} h='425px' w='1200px' templateRows='repeat(2, 1fr)' templateColumns='repeat(3, 1fr)' gap={10}>

        <Center rowSpan={1} colSpan={1} gap={5}>
          <img width='100px' height='100px' src='frc.png'/>
          <Stack spacing={1} direction='column' align='start'>
            <Heading size='md'>FRC 6070</Heading>
            <Text>
              2023 Season robot:&nbsp;
              <Link as="a" target="_blank" href="https://frc6070.ca" aria-label="FRC" color='gray.500'>ICBM</Link>
            </Text>
          </Stack>
        </Center>

        <Center rowSpan={1} colSpan={1} gap={5}>
          <img width='100px' height='100px' src='beavr.jpg'/>
          <Stack spacing={1} direction='column' align='start'>
            <Heading size='md'>Beavr Labs</Heading>
            <Link as="a" target="_blank" href="https://1bitcoin.ca" aria-label="Beavr" color='gray.500'>1Bitcoin</Link>
          </Stack>
        </Center>

        <Center rowSpan={1} colSpan={1} gap={5}>
          <img width='100px' height='100px' src='evlav.png'/>
          <Stack spacing={1} direction='column' align='start'>
            <Heading size='md'>Hack3</Heading>
            <Link as="a" target="_blank" href="https://devpost.com/software/evlav-detection" aria-label="Evlav" color='gray.500'>Evlav Detection</Link>
          </Stack>
        </Center>

        <Center rowSpan={1} colSpan={1} gap={5}>
          <img width='100px' height='100px' src='markov.png'/>
          <Stack spacing={1} direction='column' align='start'>
            <Heading size='md'>IB Math IA</Heading>
            <Link as="a" target="_blank" href="https://drive.google.com/file/d/1IRmqeznFuIm5pbZcO5da306mM6C2B9rv/view" aria-label="IB" color='gray.500'>Monopoly with Markov Chains</Link>
          </Stack>
        </Center>

      </Grid>
      <Footer></Footer>
    </center>
  )
}

// https://drive.google.com/file/d/1IRmqeznFuIm5pbZcO5da306mM6C2B9rv/view