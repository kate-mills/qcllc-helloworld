import * as React from 'react'

import { Link } from 'gatsby'
import Logo from '../Logo'

import { Flex, WrapItem, Button } from '@chakra-ui/react'
import ContactBtn from '../ContactBtn'

export const Header = () => {
  return (
    <Flex
      py={8}
      px={1}
      as="header"
      alignItems="center"
      justifyContent="space-between"
      backgroundColor={'white'}
      boxShadow="xs"
    >
      <Button color={'gray.500'} p={3} maxW={[124, 200, 250]} as={Link} to="/" variant="none">
        <Logo />
      </Button>
      <WrapItem flexWrap="wrap" px={2}>
        <ContactBtn />
        <Button
          as={Link}
          to="/developments"
          size="xs"
          color={'blackAlpha.500'}
          variant="none"
        >Developments</Button>
      </WrapItem>
    </Flex>
  )
}
