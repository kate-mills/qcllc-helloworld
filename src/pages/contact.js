import * as React from 'react'

import Layout from '../components/layout'
import Map from '../components/map'
import { Stack, Text, Box } from '@chakra-ui/react'

export default function Contact() {
  return (
    <Layout>
      <article>
        <Stack className="page-padding-top">
          <Map />
          <Box height="20px" />

          <Box bg="var(--chakra-colors-blackAlpha-100)" maxW='100%' borderWidth='1px' borderRadius='lg' overflow='hidden' padding={4}>
          <Text mb={3} as="h4" fontWeight="semibold" noOfLines={1}>
            QUALITY CONSTRUCTION LLC
          </Text>
          <Box as="address" mb={3}>
            <Text>1650 ZANKERS RD STE 230</Text>
            <Text>SAN JOSE, CA 95112</Text>
          </Box>
            <Text as="a" href="tel:+14086398516">(408) 639-8516</Text>
    </Box>
        </Stack>
      </article>
    </Layout>
  )
}
