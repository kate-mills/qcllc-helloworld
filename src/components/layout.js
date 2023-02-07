import React from 'react'
import PropTypes from 'prop-types'
/* style={{ margin: `0 auto`, maxWidth: '100%', padding: `0 1.0875rem 1.45rem`, }}*/

/*https://docs.pmnd.rs/react-three-fiber/getting-started/examples#basic-examples*/
/*https://developer.hpe.com/blog/using-grommet-with-gatsby/*/

import './layout.css'

import { Header } from './header'
import { Footer } from './footer'

import { Grommet, Box } from 'grommet'
import { grommet } from 'grommet/themes'
import { motion } from 'framer-motion'

const Layout = ({ children }) => {
  return (
    <Grommet
      theme={grommet}
      full
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header />
      <Box as="main" pad="medium" flex overflow="auto">
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: 'tween', duration: 1 }}
        >
          {children}
        </motion.main>
        <Footer />
      </Box>
    </Grommet>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout
