import * as React from 'react'
/*https://docs.pmnd.rs/react-three-fiber/getting-started/examples#basic-examples*/

import { Header } from './header'

import { Footer } from './footer'
import { Box } from '@chakra-ui/react'

import { motion, useScroll, useSpring } from 'framer-motion'
import BgImg from './BgImg'

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
      <Box
        as={motion.main}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        {!!hero ? <BgImg image={hero} /> : null}
        {children}
      </Box>
      <Box bg={'gray.300'} minH={'97px'}>
        <motion.div id="progress" style={{ scaleX }} />
      </Box>
      <Footer />
    </>
  )
}

export default Layout
