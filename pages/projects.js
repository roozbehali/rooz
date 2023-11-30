import { Text, Grid, Center, Stack, Heading, Link } from '@chakra-ui/react'
import { motion } from "framer-motion"

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'


export default function Home() {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 100 }}>
      <center>
        <Navbar/>

        <Grid marginTop={50}
        h={[100, 10]} w={[500, 1250]} 
        templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
        gap={[10]}
        gridAutoFlow="dense">
          <Heading>Organizations</Heading>
        </Grid>

        <Grid marginTop={0} 
        h={[600, 200]} w={[400, 1200]} 
        // templateRows={['repeat(4, 1fr)', 'repeat(3, 1fr)', 'repeat(2, 1fr)']}
        templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
        gap={[10]}
        gridAutoFlow="dense">
          <Center rowSpan={1} colSpan={1} gap={5}>
            <img width='100px' height='100px' src='frc.png'/>
            <Stack spacing={1} direction='column' align='start'>
              <Heading size='md'>FRC 6070</Heading>
              <Text>Programming Captain</Text>
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
              <Text>Frontend developer</Text>
              <Link as="a" target="_blank" href="https://1bitcoin.ca" aria-label="Beavr" color='gray.500'>1Bitcoin</Link>
            </Stack>
          </Center>

          <Center rowSpan={1} colSpan={1} gap={5}>
            <img width='100px' height='100px' src='uwaft.jpg'/>
            <Stack spacing={1} direction='column' align='start'>
              <Heading size='md'>UWAFT</Heading>
              <Text>Firmware developer</Text>
              <Link as="a" target="_blank" href="https://www.uwaft.ca/" aria-label="uwaft" color='gray.500'>Self-driving Cadillac Lyriq</Link>
            </Stack>
          </Center>
        </Grid>

        <Grid marginTop={100}
        h={[100, 10]} w={[500, 1400]} 
        templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
        gap={[10]}
        gridAutoFlow="dense">
          <Heading>Projects</Heading>
        </Grid>
        <Grid marginTop={0} 
        h={[600, 200]} w={[400, 1100]} 
        templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
        gap={[10]}
        gridAutoFlow="dense">
          <Center rowSpan={1} colSpan={1} gap={5}>
            <img width='100px' height='100px' src='markov.png'/>
            <Stack spacing={1} direction='column' align='start'>
              <Heading size='md'>IB Math IA</Heading>
              <Link as="a" target="_blank" href="https://drive.google.com/file/d/1IRmqeznFuIm5pbZcO5da306mM6C2B9rv/view" aria-label="IB" color='gray.500'>Monopoly with Markov Chains</Link>
            </Stack>
          </Center>
          
          <Center rowSpan={1} colSpan={1} gap={5}>
            <img width='100px' height='100px' src='evlav.png'/>
            <Stack spacing={1} direction='column' align='start'>
              <Heading size='md'>Hack3</Heading>
              <Link as="a" target="_blank" href="https://devpost.com/software/evlav-detection" aria-label="Evlav" color='gray.500'>Evlav Detection</Link>
            </Stack>
          </Center>

          {/* <Center rowSpan={1} colSpan={1} gap={5}>
            <img width='100px' height='100px' src='blueprint.jpg'/>
            <Stack spacing={1} direction='column' align='start'>
              <Heading size='md'>Blueprint</Heading>
              <Link as="a" target="_blank" href="https://uwblueprint.org/" aria-label="blueprint" color='gray.500'>Software for those in need</Link>
            </Stack>
          </Center> */}
        </Grid>
        <Footer/>
      </center>
    </motion.div>
  )
}