import * as React from 'react'

import { Link } from 'gatsby'
import Logo from '../Logo'
import { Flex, WrapItem, Button } from '@chakra-ui/react'

import ContactInformationButton from '../ContactInformationButton'

export const Footer = () => {
  return (
    <Flex
      pl={4}
      as="footer"
      alignItems="center"
      justifyContent="space-between"
      boxShadow="xs"
      backgroundColor="whiteAlpha.900"
      sx={{
        position: 'fixed',
        bottom: '0',
        left: '0',
        right: '0',
        backdropFilter: 'blur(5px)',
        backgroundSize: '4px 4px',
      }}
    >
      <WrapItem color={'blackAlpha.200'} maxW={124}>
        <Logo />
      </WrapItem>

      <WrapItem flexWrap="wrap" p={3} color={'blackAlpha.500'}>
        <ContactInformationButton />
        <Button as={Link} to="/developments" size="xs" variant={'none'}>
          Developments
        </Button>
      </WrapItem>
    </Flex>
  )
}
