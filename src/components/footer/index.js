import * as React from 'react'

import { Link } from 'gatsby'

import { Flex, WrapItem, Text, Button } from '@chakra-ui/react'

export const Footer = ()=> {
  return (
    <Flex
      p={5}
      as="footer"
      alignItems="center"
      justifyContent="space-between"
      boxShadow="xs"
      backgroundColor={'#f6f6f6'}
    >
        <Text p={3}fontSize="xs">
          © {new Date().getFullYear()}, Quality Construction LLC
        </Text>{' '}
      <WrapItem flexWrap="wrap" p={3}>
          <Button as={Link} to="/contact" size="xs" colorScheme="blackAlpha" variant="ghost"> Contact </Button>
        <Button as={Link} to="/developments" size="xs"  colorScheme='blackAlpha' variant="ghost">Developments</Button>

      </WrapItem>
    </Flex>
  )
}
