import * as React from 'react'
import { graphql } from 'gatsby'
//import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Card from '../components/card'

import { Stack, Wrap, WrapItem } from '@chakra-ui/react'

export default function Home({ data }) {
  return (
    <Layout>
      <article>
        <Stack className="page-padding-top">
          <Wrap gap={'1'} justify={'space-between'} align="center">
            <WrapItem
              as={Card}
              url={data.hero.publicURL}
              city="Gilroy"
              address="6920 Monterey Rd"
              title="Innovative solutions for modern construction challenges"
              units="200 units"
            />
            <WrapItem
              as={Card}
              url={`https://images.unsplash.com/photo-1524414139215-35c99f80112d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`}
              city={'Davenport'}
              address="41 acres in Davenport FL"
              units={'41 acres'}
            />
          </Wrap>
        </Stack>
      </article>
    </Layout>
  )
}

export const query = graphql`
  {
    hero: file(relativePath: { eq: "hero.jpg" }) {
      publicURL
    }
  }
`
