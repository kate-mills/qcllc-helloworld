import * as React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import ImgCard  from '../components/imgcard'

import { VStack, Box, StackDivider } from '@chakra-ui/react'

export default function Home({ data }) {
  console.log(data)
  return (
    <Layout hero={data.file.publicURL}>
      <article>
        <VStack
          divider={<StackDivider borderColor="gray.200" />}
          spacing={4}
          align="stretch"> 
            <Box h="30px"/>
            <Box h="30px"/>
        </VStack>
        <ImgCard url={data.file.publicURL} headingText={'Building for the future with sustainability in mind'}
    bodyText={`About Us: A brief history of the company, its mission statement, and any relevant background information about the company’s founders and leadership team.`}
    />

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
