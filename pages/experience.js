import { Text, Grid, Center, Stack, Heading, Link, Tooltip } from '@chakra-ui/react'
import { motion } from "framer-motion"

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'


export default function Home() {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 100 }}>
      <Navbar/>

      <Heading mt={20} ml={[110, 175]}>Organizations</Heading>
      <center>
        <Grid
        h={[600, 175]} w={[400, 1350]} 
        templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
        gap={[10]}
        gridAutoFlow="dense">

          <Center rowSpan={1} colSpan={1} gap={5}>
            <img width='100px' height='100px' src='uwaft.png'/>
            <Stack spacing={1} direction='column' align='start'>
            <Tooltip label='Firmware developer' placement='top-start' bg='whiteAlpha' textColor='black' closeOnClick={false}>
              <Heading size='md'>UWAFT</Heading>
            </Tooltip>
              <Link as="a" target="_blank" href="https://www.uwaft.ca/" aria-label="uwaft" color='gray.500'>Cadillac LYRIQ</Link>
            </Stack>
          </Center>

          <Center rowSpan={1} colSpan={1} gap={5}>
            <img width='100px' height='100px' src='frc.png'/>
            <Stack spacing={1} direction='column' align='start'>
              <Tooltip label='Programming Captain / Driver' placement='top-start' bg='whiteAlpha' textColor='black' closeOnClick={false}>
                <Heading size='md'>FRC 6070</Heading>
              </Tooltip>
              <Text>
                2023 Season robot:&nbsp;
                <Link as="a" target="_blank" href="https://frc6070.ca" aria-label="FRC" color='gray.500'>ICBM</Link>
              </Text>
            </Stack>
          </Center>

          <Center rowSpan={1} colSpan={1} gap={5}>
            <img width='100px' height='100px' src='beavr.jpg'/>
            <Stack spacing={1} direction='column' align='start'>
            <Tooltip label='Frontend developer' placement='top-start' bg='whiteAlpha' textColor='black' closeOnClick={false}>
              <Heading size='md'>Beavr Labs</Heading>
            </Tooltip>
              <Link as="a" target="_blank" href="https://1bitcoin.ca" aria-label="Beavr" color='gray.500'>1Bitcoin</Link>
            </Stack>
          </Center>

        </Grid>
      </center>

      <Heading mt={[20]} ml={[150, 175]}>Projects</Heading>
      <center>
        <Grid
        h={[400, 175]} w={[400, 1300]} 
        templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
        gap={[10]}
        gridAutoFlow="dense">

          <Center rowSpan={1} colSpan={1} gap={5}>
            <img width='100px' height='100px' src='markov.png'/>
            <Stack spacing={1} direction='column' align='start'>
            <Tooltip label='Side project' placement='top-start' bg='whiteAlpha' textColor='black' closeOnClick={false}>
              <Heading size='md'>IB Math IA</Heading>
            </Tooltip>
              <Link as="a" target="_blank" href="https://github.com/roozbehali/markovian_monopoly" aria-label="IB" color='gray.500'>Modelling Monopoly</Link>
            </Stack>
          </Center>

          <Center rowSpan={1} colSpan={1} gap={5}>
            <img width='100px' height='100px' src='evlav.png'/>
            <Stack spacing={1} direction='column' align='start'>
            <Tooltip label='Hackathon win' placement='top-start' bg='whiteAlpha' textColor='black' closeOnClick={false}>
              <Heading size='md'>Hack3</Heading>
            </Tooltip>
              <Link as="a" target="_blank" href="https://devpost.com/software/evlav-detection" aria-label="Evlav" color='gray.500'>Evlav Detection</Link>
            </Stack>

          </Center>
        </Grid>
      </center>
      <Footer/>
    </motion.div>
  )
}