import { ButtonGroup, Container, IconButton, Stack, Center } from '@chakra-ui/react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiDevpost } from 'react-icons/si'

export const Footer = () => (
  <Container as="footer" role="contentinfo" paddingTop={100} paddingBottom={1}>
    <Center spacing={{ base: '4', md: '5' }}>
      <Stack justify="space-between" direction="row" align="center">
        <ButtonGroup variant="tertiary">
          <IconButton as="a" target="_blank" href="https://www.linkedin.com/in/roozbehali" aria-label="LinkedIn" icon={<FaLinkedin />} variant='ghost'/>
          <IconButton as="a" target="_blank" href="https://github.com/roozbehali" aria-label="GitHub" icon={<FaGithub />} variant='ghost'/>
          <IconButton as="a" target="_blank" href="https://devpost.com/R00ZT3R" aria-label="Devpost" icon={<SiDevpost />} variant='ghost'/>
        </ButtonGroup>
      </Stack>
    </Center>
  </Container>
)