import * as React from 'react'

import { Link } from 'gatsby'
import Logo from '../Logo'
import { Flex, WrapItem, Button } from '@chakra-ui/react'

export const Footer = () => {
  return (
    <Flex
      py={8}
      px={1}
      as="footer"
      alignItems="center"
      justifyContent="space-between"
      boxShadow="xs"
      backgroundColor={'var(--chakra-colors-whiteAlpha-900)'}
      sx={{ position: 'fixed', bottom: '0', left: '0', right: '0' }}
    >
      <Button p={3} maxW={124} as={Link} to="/" variant="none">
        <Logo color={'var(--chakra-colors-uigold-500)'} />
      </Button>
      <WrapItem flexWrap="wrap" p={3}>
        <Button
          as={Link}
          to="/contact"
          size="xs"
          colorScheme="blackAlpha"
          variant="ghost"
        >Contact
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
