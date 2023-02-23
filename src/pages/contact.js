import * as React from 'react'

import Layout from '../components/layout'
import Map from '../components/map'
import { Stack, Text } from '@chakra-ui/react'

export default function Contact() {
  return (
    <Layout>
      <article>
        <Map />
        <Stack spacing={3}>
          <Text fontSize="lg">Contact Information</Text>
          <Text fontSize="md">
            Clear and easy-to-find contact information, including phone number,
            email address, and physical address.
          </Text>
        </Stack>
      </article>
    </Layout>
  )
}
