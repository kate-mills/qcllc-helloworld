import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

import { VStack, Box, StackDivider } from '@chakra-ui/react'

export default function Home({ data }) {
  return (
    <Layout hero={data.hero}>
      <article>
        <VStack
          divider={<StackDivider borderColor="gray.200" />}
          spacing={4}
          align="stretch"> 
            <Box h="30px"/>
            <Box h="30px"/>
        </VStack>

        <VStack
          divider={<StackDivider borderColor="gray.200" />}
          spacing={2}
          align="stretch"> 
          <Box h="auto" bg="themeblue.100">Let us help you bring your vision to life.
            <Link to="/contact">Schedule a consultation with our team today.</Link>
    </Box>
        </VStack>
      </article>
    </Layout>
  )
}

export const query = graphql`
  {
    file(relativePath: { eq: "hero.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    hero: file(relativePath: { eq: "hero.jpg" }) {
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
