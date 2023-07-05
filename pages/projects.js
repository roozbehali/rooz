import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { Text, Flex, Grid, Center, GridItem, Spacer, ButtonGroup, Button } from '@chakra-ui/react'

import { Navbar } from '@/components/navbar'


export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
    </div>
  )
}
