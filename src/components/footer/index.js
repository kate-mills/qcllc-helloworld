import * as React from 'react'

import { Link } from 'gatsby'
import Logo from '../Logo'
import { Flex, WrapItem, Button } from '@chakra-ui/react'

import ContactBtn from '../ContactBtn'

export const Footer = () => {
  return (
    <Flex
      p={2}
      pl={4}
      as="footer"
      alignItems="center"
      justifyContent="space-between"
      boxShadow="xs"
      backgroundColor="whiteAlpha.600"
      sx={{
        position: 'fixed',
        bottom: '0',
        left: '0',
        right: '0',
        backdropFilter: 'blur(5px)',
        backgroundSize: '4px 4px',
      }}
    >
      <WrapItem color={'whiteAlpha.600'} maxW={124}>
        <Logo />
      </WrapItem>

      <WrapItem flexWrap="wrap" p={3} color={'blackAlpha.500'}>
        <ContactBtn />
        <Button as={Link} to="/developments" size="xs" variant={'none'}>
          Developments
        </Button>
      </WrapItem>
    </Flex>
  )
}
