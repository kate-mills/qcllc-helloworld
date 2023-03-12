import * as React from 'react'

import { Link } from 'gatsby'
import Logo from '../Logo'

import { Flex, WrapItem, Button } from '@chakra-ui/react'

export const Header = () => {
  return (
    <Flex
      py={8}
      px={1}
      as="header"
      alignItems="center"
      justifyContent="space-between"
      backgroundColor={'var(--chakra-colors-white)'}
    >
      <Button p={3} maxW={[124, 200, 250]} as={Link} to="/" variant="none">
        {' '}
        <Logo color={'var(--chakra-colors-uigold-500)'} />{' '}
      </Button>
      <WrapItem flexWrap="wrap" px={2}>
        <Button
          as={Link}
          to="/contact"
          size="xs"
          color={'var(--chakra-colors-blackAlpha-600)'}
          variant="none"
        >
          Contact
        </Button>

        <Button
          as={Link}
          to="/developments"
          size="xs"
          color={'var(--chakra-colors-blackAlpha-600)'}
          variant="none"
        >
          Developments
        </Button>
      </WrapItem>
    </Flex>
  )
}
