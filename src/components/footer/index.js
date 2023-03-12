import * as React from 'react'

import { Link } from 'gatsby'
import Logo from '../Logo'

import { Flex, WrapItem, Box, Button } from '@chakra-ui/react'

export const Footer = () => {
  return (
    <Flex
      p={2}
      as="footer"
      alignItems="center"
      justifyContent="space-between"
      boxShadow="xs"
      backgroundColor={'var(--chakra-colors-whiteAlpha-900)'}
      sx={{ position: 'fixed', bottom: '0', left: '0', right: '0' }}
    >
    <Box pl={3}>
      <Logo fixedWidth={'100'} color={'#8b8b8b'} />
    </Box>
      <WrapItem flexWrap="wrap" p={3}>
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
