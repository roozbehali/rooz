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

      <Heading mt={20} ml={[105, 175]} mb={10}>Organizations</Heading>
      <center>
        <Grid
        ml={[15, 125]}
        mb={[10]}
        h={[400, 175]} w={[300, 1300]} 
        templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
        gap={[10]}
        justifyItems='flex-start'>

          <Center rowSpan={1} colSpan={1} gap={5}>
            <img width='100px' height='100px' src='wato.png'/>
            <Stack spacing={1} direction='column' align='start'>
            <Tooltip label='Perception Software Developer' placement='top-start' bg='whiteAlpha' textColor='black' closeOnClick={false}>
              <Heading size='md'>WATonomous</Heading>
            </Tooltip>
              <Link as="a" target="_blank" href="https://www.watonomous.ca/" aria-label="uwaft" color='gray.500'>Eve</Link>
            </Stack>
          </Center>

          <Center rowSpan={1} colSpan={1} gap={5}>
            <img width='100px' height='100px' src='uwaft.png'/>
            <Stack spacing={1} direction='column' align='start'>
            <Tooltip label='Firmware Developer' placement='top-start' bg='whiteAlpha' textColor='black' closeOnClick={false}>
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
            <Tooltip label='Frontend Developer' placement='top-start' bg='whiteAlpha' textColor='black' closeOnClick={false}>
              <Heading size='md'>Beavr Labs</Heading>
            </Tooltip>
              <Link as="a" target="_blank" href="https://1bitcoin.ca" aria-label="Beavr" color='gray.500'>1Bitcoin</Link>
            </Stack>
          </Center>

        </Grid>
      </center>

      <Heading mt={[20, 40]} ml={[145, 175]} mb={[10]}>Projects</Heading>
      <center>
        <Grid
        ml={[15, 125]}
        mb={[20, 10]}
        h={[500, 175]} w={[300, 1300]} 
        templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
        gap={[10]}
        justifyItems='flex-start'>
          <Center rowSpan={1} colSpan={1} gap={5}>
            <img width='100px' height='100px' src='leaf.jpg'/>
            <Stack spacing={1} direction='column' align='start'>
            <Tooltip label='Hackathon Project' placement='top-start' bg='whiteAlpha' textColor='black' closeOnClick={false}>
              <Heading size='md'>DeerHacks</Heading>
            </Tooltip>
              <Link as="a" target="_blank" href="https://devpost.com/software/eco-3c258d" aria-label="Tone" color='gray.500'>Eco</Link>
            </Stack>
          </Center>
          
          <Center rowSpan={1} colSpan={1} gap={5}>
            <img width='100px' height='100px' src='tone3.png'/>
            <Stack spacing={1} direction='column' align='start'>
            <Tooltip label='Hackathon Project' placement='top-start' bg='whiteAlpha' textColor='black' closeOnClick={false}>
              <Heading size='md'>DeltaHacks</Heading>
            </Tooltip>
              <Link as="a" target="_blank" href="https://www.tone.lol/" aria-label="Tone" color='gray.500'>Tone</Link>
            </Stack>
          </Center>

          <Center rowSpan={1} colSpan={1} gap={5}>
            <img width='100px' height='100px' src='evlav.png'/>
            <Stack spacing={1} direction='column' align='start'>
            <Tooltip label='Hackathon Project' placement='top-start' bg='whiteAlpha' textColor='black' closeOnClick={false}>
              <Heading size='md'>Hack3</Heading>
            </Tooltip>
              <Link as="a" target="_blank" href="https://devpost.com/software/evlav-detection" aria-label="Evlav" color='gray.500'>Evlav Detection</Link>
            </Stack>
          </Center>

          <Center rowSpan={1} colSpan={1} gap={5}>
            <img width='100px' height='100px' src='markov.png'/>
            <Stack spacing={1} direction='column' align='start'>
            <Tooltip label='Side Project' placement='top-start' bg='whiteAlpha' textColor='black' closeOnClick={false}>
              <Heading size='md'>IB Math IA</Heading>
            </Tooltip>
              <Link as="a" target="_blank" href="https://github.com/roozbehali/markovian_monopoly" aria-label="IB" color='gray.500'>Monopoly w/ Markov Chains</Link>
            </Stack>
          </Center>

          <Center rowSpan={1} colSpan={1} gap={5}>
            <img width='100px' height='100px' src='doppler2.png'/>
            <Stack spacing={1} direction='column' align='start'>
            <Tooltip label='Side Project' placement='top-start' bg='whiteAlpha' textColor='black' closeOnClick={false}>
              <Heading size='md'>IB Physics IA</Heading>
            </Tooltip>
              <Link as="a" target="_blank" href="https://drive.google.com/file/d/13cESO2HqwMEjIrbsgM08XGWPXSZSKjVU/view?usp=sharing" aria-label="Phys" color='gray.500'>The Doppler Effect</Link>
            </Stack>
          </Center>

          <Center rowSpan={1} colSpan={1} gap={5}>
            <img width='100px' height='100px' src='information.png'/>
            <Stack spacing={1} direction='column' align='start'>
            <Tooltip label='Research Paper' placement='top-start' bg='whiteAlpha' textColor='black' closeOnClick={false}>
              <Heading size='md'>IB Math EE</Heading>
            </Tooltip>
              <Link as="a" target="_blank" href="https://drive.google.com/file/d/1Vfm6vD8n0coqw5QYu1vTFIjh9dL7ofWN/view?usp=sharing" aria-label="information" color='gray.500'>Information Theory in DNN solutions</Link>
            </Stack>
          </Center>

        </Grid>
      </center>
      <Footer/>
    </motion.div>
  )
}