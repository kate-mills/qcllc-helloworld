import * as React from 'react'
/*https://docs.pmnd.rs/react-three-fiber/getting-started/examples#basic-examples*/

import { Header } from './header'
import { Footer } from './footer'
import BgImage  from '../components/backgroundimage'

import { Flex, Spacer, Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'

//import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import './layout.css'

const Layout = ({ children, ...rest }) => {
  const { hero } = rest
  return (
    <Flex direction="column" id="flex-layout">
      <Header />

    {!!hero ?<BgImage image={hero}/>: null }
    
      <Flex direction={['row']}>
        <Spacer />
        <Box
          color="primary"
          w="65%"
          as={motion.main}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: 'tween', duration: 1 }}
        >
          {children}
        </Box>
        <Spacer />
      </Flex>
      <Footer />
    </Flex>
  )
}

export default Layout
