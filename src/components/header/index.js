import * as React from 'react'
import { Link } from 'gatsby'
import Logo from '../Logo'

import {
  Flex,
  Box,
  Spacer,
  Heading,
  Button,
  ButtonGroup,
} from '@chakra-ui/react'

export const Header = ()=> {
  return (
    <Flex
      padding={3}
      as="header"
      minWidth="max-content"
      alignItems="center"
      gap="2"
    >
      <Box p="2"><Heading size="md" color="#8b8b8b"><Link to="/"><Logo fixedWidth="200px"/></Link>
    </Heading>
      </Box>
      <Spacer />
      <ButtonGroup gap="2">
        <Button as={Link} to="/contact" colorScheme={"uigold"} size="xs" variant={'ghost'}>
          Contact
        </Button>
        <Button as={Link} to="/developments" colorScheme={'uigold'} size="xs" variant={'ghost'}>
          Developments
        </Button>
      </ButtonGroup>
    </Flex>
  )
}
