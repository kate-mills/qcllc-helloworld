import * as React from 'react'

import Layout from '../components/layout'
import Map from '../components/map'
import { Stack, Text, Box } from '@chakra-ui/react'
import ScrollingText from '../components/scrolling-text'


export default function Contact() {
  return (
    <Layout>
      <article>
        <Stack pt={100}>
    <Box mb={5} bg={'var(--chakra-colors-uiblue-300)'} color={'var(--chakra-colors-uiblue-100)'}>
          <ScrollingText/>
    </Box>

    <Box maxW={'lg'} m={50} bg={'var(--chakra-colors-uigold-100)'} color={'var(--chakra-colors-uiblue-100)'}>
          <Map />
    </Box>
          <Box maxW='100%' overflow='hidden' padding={9}  pl={4}>
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
