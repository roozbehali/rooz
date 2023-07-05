import { Text, Flex, Link } from '@chakra-ui/react'

import { Navbar } from '@/components/navbar'

export default function Home() {
  return (
    <center>
      <Navbar></Navbar>
      <Flex m={200} w={700} bgColor='ghostwhite' borderRadius={10}>
        <Text m={10} align='left'>Hi, I'm Roozbeh. I'm enrolled in Computer Engineering
          at the University of Waterloo, in my 1A term. Before that,
          I was a high schooler in the IB DP at Glenforest SS. I'm always
          looking for new opportunities and people to meet. This website serves as a 
          simple, unobtrusive walk through memory lane for me. You can reach me at 
          <Link color='gray' href="mailto:roozbeh.ali.2005@gmail.com"> roozbeh.ali.2005@gmail.com </Link> 
          for any inquiries.
        </Text>
      </Flex>
    </center>
  )
}
