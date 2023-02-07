import * as React from 'react'
/*https://docs.pmnd.rs/react-three-fiber/getting-started/examples#basic-examples*/

import { motion } from 'framer-motion'

import './layout.css'

import { Header } from './header'
import { Footer } from './footer'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: '100%',
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: 'tween', duration: 1 }}
        >
          {children}
        </motion.main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
