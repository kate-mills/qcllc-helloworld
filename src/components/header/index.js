import * as React from 'react'
import { Link } from 'gatsby'
import ContactInfo from './contact-info'

import {
  Flex,
  Box,
  Spacer,
  Heading,
  Button,
  ButtonGroup,
} from '@chakra-ui/react'

export const Header = () => {
  return (
    <Flex
      padding={3}
      as="header"
      minWidth="max-content"
      alignItems="center"
      gap="2">
      <Box p="2">
        <Heading size="md">
          <Link to="/">qcllc</Link>
        </Heading>
      </Box>
      <Spacer />
      <ButtonGroup gap="2">
    <ContactInfo/>
        <Button
          as={Link}
          to="/developments"
          size="xs"
        >
          Developments
        </Button>
      </ButtonGroup>
    </Flex>
  )
}
