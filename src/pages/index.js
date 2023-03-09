import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import ImgCard from '../components/imgcard'

import {
  OrderedList,
  Text,
  ListItem,
  VStack,
  Box,
  StackDivider,
} from '@chakra-ui/react'

export default function Home({ data }) {
  return (
    <Layout hero={data.heroImg.publicURL}>
      <article>
        <Box h="50px" />
        <VStack divider={<StackDivider />} spacing={'8'} align="stretch">
          <ImgCard
             backgroundColor={''}
            url={data.file.publicURL}
            imgWidth='60%'
            headingText={'Building for the future with sustainability in mind'}
            style={{ clipPath: 'polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)'}}
            bodyText={`Below are some ideas to get us started.`}

          />
          <Box>
            <Text fontSize="xl" fontWeight="bold" pb={'0.75rem'}>
              For example, a good website structure for a commercial
              construction company could include the following pages:
            </Text>
            <OrderedList spacing="3">
              <ListItem>
                <b>About Us:</b> A brief history of the company, its mission
                statement, and any relevant background information about the
                company’s founders and leadership team.
              </ListItem>
              <ListItem>
                <b>Services:</b> A list of the construction services the company
                provides, along with descriptions of each service. This could
                include new construction, renovations, remodeling, and any other
                services the company offers.
              </ListItem>
              <ListItem>
                <b>Portfolio:</b> A gallery of the company’s past projects,
                showcasing the quality of their work and the range of their
                capabilities.
              </ListItem>
              <ListItem>
                <b>Testimonials:</b> Quotes or video testimonials from satisfied
                customers that speak to the quality of the company’s work and
                their professionalism.
              </ListItem>
              <ListItem>
                <b>Process:</b> A description of the company’s process for
                completing a project, from the initial consultation to the final
                walk-through and follow-up.
              </ListItem>
              <ListItem>
                <b>Safety and Compliance:</b> A description of the company’s
                commitment to safety and compliance with relevant laws and
                regulations.
              </ListItem>
              <ListItem>
                <b>Contact Information:</b> Clear and easy-to-find contact
                information, including the company’s phone number, email
                address, and physical address.
              </ListItem>
            </OrderedList>
          </Box>
          <ImgCard
    showImg="right"
            url={data.future.publicURL}
            imgWidth="40%"
            headingText={
              'Exceeding expectations in every project we undertake.'
            }
            bodyText={`A brief history of the company, its mission statement, and any relevant background information about the company’s founders and leadership team.`}
          />
        </VStack>
      </article>
    </Layout>
  )
}

export const query = graphql`
  {
    file(relativePath: { eq: "hero-burn.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    future: file(relativePath: { eq: "pic2.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }

    hero: file(relativePath: { eq: "hero-burn.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
          layout: FULL_WIDTH
        )
      }
    }
    heroImg: file(relativePath: { eq: "on-site.jpg" }) {
      publicURL
    }
  }
`
