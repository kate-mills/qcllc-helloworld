import * as React from 'react'
import { Link } from 'gatsby'

import {
  Flex,
  Box,
  Spacer,
  Heading,
  Button,
  ButtonGroup,
} from '@chakra-ui/react'

export default function Header() {
  return (
    <Flex
      p="4"
      as="header"
      minWidth="max-content"
      alignItems="center"
      gap="2"
      boxShadow="xs"
    >
      <Box p="2"><Heading size="md" color="#33333354"><Link to="/">qcllc</Link>
    </Heading>
      </Box>
      <Spacer />
      <ButtonGroup gap="2">
        <Button as={Link} to="/contact" colorScheme={"blackAlpha"} size="sm">
          Contact
        </Button>
        <Button as={Link} to="/developments" colorScheme={'blackAlpha'} size="sm">
          Developments
        </Button>
      </ButtonGroup>
    </Flex>
  )
}
