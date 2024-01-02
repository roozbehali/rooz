import { Center } from '@chakra-ui/react'
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
          <embed src="Roozbeh's resume (2024).pdf" width={[450]} height={[625]} />
        </Center>
        <Footer/>
      </center>
    </motion.div>
  )
}
