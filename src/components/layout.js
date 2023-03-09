import * as React from 'react'
/*https://docs.pmnd.rs/react-three-fiber/getting-started/examples#basic-examples*/

//import { Header } from './header'
//import { Footer } from './footer'
//import BgImage  from '../components/backgroundimage'


//import { Flex, Spacer, Box } from '@chakra-ui/react'
//import { motion } from 'framer-motion'

import Footer from './sfooter'
import { Box } from '@chakra-ui/react'

import { HomeHeader, Banner, BannerButton } from '../utils'
import { Link } from 'gatsby'

import { createGlobalStyle } from 'styled-components'

import './layout.css'

const Layout = ({ children, ...rest }) => {
  const { hero } = rest
  return (
    <>
      <GlobalStyle />
      {!!hero ? (
        <HomeHeader img={hero}>
          <Banner subtitle="Quality Construction">
            <Link to="/about">
              <BannerButton style={{ margin: '2rem auto' }}>menu</BannerButton>{' '}
            </Link>{' '}
          </Banner>{' '}
        </HomeHeader>
      ) : null}

      <Box as="main">{children}</Box>
      <Footer />
    </>
  )
}

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
main{
  padding-inline: 5rem;
  padding-block-end: 2em;
}
body{ }
a{
  text-decoration:none;
  display: contents;
}
`

export default Layout
