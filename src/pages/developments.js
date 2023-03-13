import * as React from 'react'
import { graphql } from 'gatsby'
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
              url={data.building.publicURL}
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
    hero: file(relativePath: { eq: "hero.jpg" }) { publicURL }
    building: file(relativePath: { eq: "pic2.jpg" }) { publicURL }
  }
`
