import * as React from 'react'

import Layout from '../components/layout'
import Map from '../components/map'
import { Stack, Text, Box, Container } from '@chakra-ui/react'
import ScrollingText from '../components/scrolling-text'

export default function Contact() {
  return (
    <Layout>
      <article>
        <Stack>
          <Container maxW={'2xl'}>
            <Map />
            <Box maxW="100%" overflow="hidden" py={4}>
              <Text mb={3} as="h4" fontWeight="semibold" noOfLines={2}>
                QUALITY CONSTRUCTION LLC
              </Text>
              <Box as="address" mb={3}>
                <Text>1650 ZANKERS RD STE 230</Text>
                <Text>SAN JOSE, CA 95112</Text>
              </Box>
              <Text as="a" href="tel:+14086398516">
                (408) 639-8516
              </Text>
            </Box>
          </Container>
        </Stack>
        <Box
          sx={{ overflow: 'hidden' }}
          bg={'gray.200'}>
          <ScrollingText />
        </Box>
      </article>
    </Layout>
  )
}
