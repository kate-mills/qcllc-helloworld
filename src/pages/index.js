import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Card from '../components/card'

import { Wrap, WrapItem, VStack, Box, StackDivider } from '@chakra-ui/react'

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
        <Wrap gap={'1'} justify={'space-between'} align="center">
          <WrapItem as={Card} url={data.file.publicURL} />{' '}
          <WrapItem as={Card} url={data.file.publicURL} />{' '}
          <WrapItem as={Card} url={data.file.publicURL} />{' '}
        </Wrap>

        <VStack
          divider={<StackDivider borderColor="gray.200" />}
          spacing={4}
          align="stretch"> 
          <Box h="30px"/> 
          <Box h="auto" bg="themeblue.100">Let us help you bring your vision to life.
            <Link to="/contact">Schedule a consultation with our team today.</Link>
          </Box>
          <Box h="30px"/> 
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
