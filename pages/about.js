import { Text, Flex, Link } from '@chakra-ui/react'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <center>
      <Navbar></Navbar>
      <Flex marginTop={[150, 200]} marginBottom={[94, 149]} w={[375, 400, 500, 600, 700]} bgColor='ghostwhite' borderRadius={10}>
        <Text m={[5, 10]} align='left'>Hi, I'm Roozbeh. I'm enrolled in Computer Engineering
          at the University of Waterloo, in my 1A term. Before that,
          I was a high schooler in the IB DP at Glenforest SS. I'm always
          looking for new opportunities and people to meet. This website showcases
          my favorite projects and myself. You can reach me at&nbsp;
          <Link color='gray' href="mailto:roozbeh.ali.2005@gmail.com">roozbeh.ali.2005@gmail.com</Link>
          &nbsp;for any inquiries.
        </Text>
      </Flex>
      <Footer></Footer>
    </center>
  )
}
