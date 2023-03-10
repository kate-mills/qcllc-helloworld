import * as React from 'react'
/*https://docs.pmnd.rs/react-three-fiber/getting-started/examples#basic-examples*/

import Navbar from './navbar'
import { Box } from '@chakra-ui/react'

import { HomeHeader, Banner } from '../utils'
import Footer from './sfooter'
const Layout = ({ children, ...rest }) => {
  const { hero } = rest
  return (
    <>
      <Navbar />
      {!!hero ? (
        <HomeHeader img={hero}>
          <Banner />
        </HomeHeader>
      ) : null}

      <Box as="main">{children}</Box>
      <Footer />
    </>
  )
}

export default Layout
