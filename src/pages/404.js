import * as React from 'react'
import { Link } from 'gatsby'

import { Text, Stack, Button } from '@chakra-ui/react'
import Layout from '../components/layout'

export default function NotFoundPage() {
  return (
    <Layout>
      <article>
        <Stack p="7" align="center">
          <Text as="h1" align="center" fontSize="6xl">
            We couldn't find this page.
          </Text>
          <Button as={Link} to="/" w="fit-content">
            Back to Home Page
          </Button>
        </Stack>
      </article>
    </Layout>
  )
}
