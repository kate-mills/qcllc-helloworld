import * as React from 'react'

import { Link } from 'gatsby'
import Logo from '../Logo'

import { Flex, WrapItem, Button } from '@chakra-ui/react'

export const Header = () => {
  return (
    <Flex
      p={5}
      as="header"
      alignItems="center"
      justifyContent="space-between"
      backgroundColor={'var(--chakra-colors-whiteAlpha-500)'}
    >
      <Button p={3} maxW={224} as={Link} to="/" variant="none">
        <Logo color={'#8b8b8b'} />
      </Button>
      <WrapItem flexWrap="wrap">
        <Button
          as={Link}
          to="/contact"
          size="xs"
          colorScheme="blackAlpha"
          variant="ghost"
        >
          {' '}
          Contact{' '}
        </Button>
        <Button
          as={Link}
          to="/developments"
          size="xs"
          colorScheme="blackAlpha"
          variant="ghost"
        >
          Developments
        </Button>
      </WrapItem>
    </Flex>
  )
}
