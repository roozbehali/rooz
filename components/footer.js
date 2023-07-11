import { ButtonGroup, Container, IconButton, Stack, Center } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

export const Footer = () => (
  <Container as="footer" role="contentinfo" paddingTop={100}>
    <Center spacing={{ base: '4', md: '5' }}>
      <Stack justify="space-between" direction="row" align="center">
        <ButtonGroup variant="tertiary">
          <IconButton as="a" target="_blank" href="https://www.linkedin.com/in/roozbehali" aria-label="LinkedIn" icon={<FaLinkedin />} variant='ghost'/>
          <IconButton as="a" target="_blank" href="https://github.com/roozbehali" aria-label="GitHub" icon={<FaGithub />} variant='ghost'/>
          <IconButton as="a" target="_blank" href="https://www.instagram.com/roozbeh.05" aria-label="Instagram" icon={<FaInstagram />} variant='ghost'/>
        </ButtonGroup>
      </Stack>
    </Center>
  </Container>
)