import * as React from 'react'

import { Link } from 'gatsby'

import { Flex, Box, Spacer, Text, Button, ButtonGroup } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Flex
      p="4"
      as="footer"
      minWidth="max-content"
      alignItems="center"
      gap="2"
      boxShadow="xs"
    backgroundColor={'#f6f6f6'}
    >
      <Box p="2">
        <Text p="2" fontSize="xs">
          © {new Date().getFullYear()}, Quality Construction LLC
        </Text>{' '}
      </Box>
      <Spacer />
      <ButtonGroup gap="2">
        <Button as={Link} to="/contact" size="xs" colorScheme="blackAlpha">
          Contact
        </Button>
        <Button as={Link} to="/developments" size="xs"  colorScheme='blackAlpha'>
          Developments
        </Button>
      </ButtonGroup>
    </Flex>
  )
}
