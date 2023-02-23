import * as React from 'react'
/*https://docs.pmnd.rs/react-three-fiber/getting-started/examples#basic-examples*/

import { Header } from './header'
import { Footer } from './footer'

import { Flex, Spacer, Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'

import './layout.css'

const query = graphql`
  {
    hero: file(relativePath: { eq: "hero.jpg" }) {
      size
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
          layout: FULL_WIDTH
        )
      }
    }
  }
`
const Layout = ({ children, ...rest }) => {
  const { showHero } = rest
  const data = useStaticQuery(query)
  return (
    <Flex direction="column" id="flex-layout">
      <Header />
      {!!showHero ? (
        <GatsbyImage
          image={getImage(data.hero)}
          alt="Property built by Quality Construction LLC"
        />
      ) : null}
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
