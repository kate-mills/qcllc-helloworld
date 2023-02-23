import * as React from 'react'
import { graphql } from 'gatsby'
//import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Card from '../components/card'

import { Wrap, WrapItem, VStack, Box, StackDivider } from '@chakra-ui/react'


export default function Home({ data }) {
  //const image = getImage(data.file)

  //console.log(data)
  return (
    <Layout>
    {/*<GatsbyImage image={image} alt="Offices built by QCLLC"/>*/}
      <article>


<VStack divider={<StackDivider borderColor='gray.200' />} spacing={4} align='stretch' > <Box h='40px' bg='yellow.200'> Ready to start your dream home? Contact us today to get started!  Don't wait any longer to upgrade your commercial space. Request a free consultation now.  </Box> <Box h='40px' bg='tomato'> Need a reliable and experienced construction team for your next project? Look no further. Call us today.  </Box> <Box h='40px' bg='pink.100'> Get a free estimate on your construction project. Contact us to schedule a consultation.  </Box> <Box h='40px' bg='grey.100'> Let us help you bring your vision to life. Schedule a consultation with our team today.  </Box> </VStack>

    <Wrap gap={'1'} justify={'space-between'} align='center'>
        <WrapItem as={Card} url={data.file.publicURL} />
        <WrapItem as={Card} url={data.file.publicURL} />
        <WrapItem as={Card} url={data.file.publicURL} />
    </Wrap>
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
  }
`
