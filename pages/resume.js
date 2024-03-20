import { Center, Text, Link } from '@chakra-ui/react'
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
        <Center marginTop={75}>
          {/* <iframe src="Roozbeh_Ali_Resume.pdf" title='resume' width={[450]} height={[625]}> */}
            <Text my={210}>Your web browser does not support a PDF plugin. Instead, You can view the file&nbsp;
              <Link href="https://drive.google.com/file/d/14e1IR6cuwTlcRdxmpU6uRO8FobJ-rhkj/view?usp=sharing" isExternal color={'gray.400'}>here</Link>.
            </Text>
          {/* </iframe> */}
        </Center>
        <Footer/>
      </center>
    </motion.div>
  )
}
