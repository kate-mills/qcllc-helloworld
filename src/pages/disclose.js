import React from 'react'
import { useDisclosure, Button, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, Box, Stack, } from '@chakra-ui/react'

import Layout from '../components/layout'
const DisclosePage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Layout>
      <Button onClick={onOpen}>Open Drawer</Button>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px" fontSize="1rem">
            QUALITY CONSTRUCTION LLC
          </DrawerHeader>
          <DrawerBody>
            <Stack spacing={3}>
              <Box fontSize="md" as={'address'} mt={1}>
                <p>1650 ZANKERS RD STE 230</p>
                <p>SAN JOSE, CA 95112</p>
              </Box>
              <Box fontSize="md" as={'a'} href={'tel:+14086398516'}>
                (408) 639-8516{' '}
              </Box>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Layout>
  )
}

export default DisclosePage
