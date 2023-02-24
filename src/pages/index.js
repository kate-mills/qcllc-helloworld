import * as React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import ImgCard  from '../components/imgcard'

import { Text, OrderedList, ListItem, VStack, Box, StackDivider } from '@chakra-ui/react'

export default function Home({ data }) {
  console.log(data)
  return (
    <Layout hero={data.file.publicURL}>
      <article>
        <Box h="50px"/>
        <VStack
          divider={<StackDivider />}
          spacing={'8'}
          align="stretch"
        > 
          <ImgCard url={data.file.publicURL} imgWidth="40%"headingText={'Exceeding expectations in every project we undertake.'} bodyText={`A list of the construction services you provide and descriptions of each service. This could include new construction, renovations, remodeling, and other company services.`} />

    <Box>
    <Text paddingBottom="2rem" fontSize="2xl">Ideas to get us started.</Text>
<OrderedList spacing="3">
  <ListItem><b>About Us:</b> A brief history of the company, its mission statement, and any relevant background information about the company’s founders and leadership team.</ListItem>
  <ListItem><b>Services:</b> A list of the construction services the company provides, along with descriptions of each service. This could include new construction, renovations, remodeling, and any other services the company offers.</ListItem>
  <ListItem><b>Portfolio:</b> A gallery of the company’s past projects, showcasing the quality of their work and the range of their capabilities.</ListItem>
  <ListItem><b>Testimonials:</b> Quotes or video testimonials from satisfied customers that speak to the quality of the company’s work and their professionalism.</ListItem>
  <ListItem><b>Process:</b> A description of the company’s process for completing a project, from the initial consultation to the final walk-through and follow-up.</ListItem>
  <ListItem><b>Safety and Compliance:</b> A description of the company’s commitment to safety and compliance with relevant laws and regulations.</ListItem>
  <ListItem><b>Contact Information:</b> Clear and easy-to-find contact information, including the company’s phone number, email address, and physical address.</ListItem>
</OrderedList>
    </Box>
          <ImgCard url={data.future.publicURL} imgWidth="40%" headingText={'Building for the future with sustainability in mind'} bodyText={`A brief history of the company, its mission statement, and any relevant background information about the company’s founders and leadership team.`} />

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
    future:file(relativePath: { eq: "future.webp" }) {
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
