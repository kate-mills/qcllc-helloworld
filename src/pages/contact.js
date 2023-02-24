import * as React from 'react'

import Layout from '../components/layout'
import Map from '../components/map'
import { Stack, Text, Box } from '@chakra-ui/react'

export default function Contact() {
  return (
    <Layout>
      <article>
        <Stack paddingTop="7rem">
        <Map />
    <Box height="20px"/>
          <Text lineHeight="tight"as="h4" fontWeight="semibold" noOfLines={1}>
      QUALITY CONSTRUCTION LLC
    </Text>
          <Text as="address"> 1650 ZANKERS RD STE 230 SAN JOSE, CA 95112 </Text>
          <Text as="a" href="tel:+14086398516">(408) 639-8516</Text>
        </Stack>
      </article>
    </Layout>
  )
}
