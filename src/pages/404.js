import * as React from 'react'
import { Link } from 'gatsby'

import { Box, Text, Stack, Button } from '@chakra-ui/react'
import Layout from '../components/layout'

export default function NotFoundPage() {
  return (
    <Layout>
      <article>
        <Stack  className="page-padding-top" align="center">
          <Text as="h1" align="center" fontSize="6xl">
            Sorry - we couldn't find this page.
          </Text>
          <Box m="0 auto" pt={9}>
          <Button colorScheme="blackAlpha" as={Link} to="/" w="fit-content">
            Back to Home Page
          </Button>
          </Box>
        </Stack>
      </article>
    </Layout>
  )
}
