import * as React from 'react'
/*https://docs.pmnd.rs/react-three-fiber/getting-started/examples#basic-examples*/

import { Header } from './header'

import BackgroundImage from './backgroundimage'
import { Footer } from './footer'
import { Box } from '@chakra-ui/react'

import { motion, useScroll, useSpring } from 'framer-motion'
//<HomeHeader img={hero}> <Banner /> </HomeHeader>


const Layout = ({ children, ...rest }) => {
  const { hero } = rest
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <>
<Header /> 
      
      {!!hero ? <BackgroundImage image={hero} /> : null}

      <Box as="main">{children}</Box>

      <Box bg={'gray.300'} minH={'113px'}>
        <motion.div id="progress" style={{ scaleX }} />
      </Box>

      <Footer />
    </>
  )
}

export default Layout
