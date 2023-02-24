import * as React from 'react'
import { Box, Badge, Image } from '@chakra-ui/react'

export default function Card(props) {
  const property = {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Front view of modern commercial property.',
    units: 'units available',
    title: 'Commercial units available, 2.5 miles from Disney.',
    formattedPrice: '$1,900.00',
  }

  return (
    <Box maxW="auto" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={props.url || property.imageUrl} alt={property.imageAlt} />
      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="blackAlpha">New</Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >{props.city } &bull; {props.units}
          </Box>
        </Box>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >{props.title || property.title}
        </Box>
        <Box as="span" color="gray.600" fontSize="sm">
          {props.address || props.city || `${property.formattedPrice}/ wk`}
          <Box as="span" color="gray.600" fontSize="sm">
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
