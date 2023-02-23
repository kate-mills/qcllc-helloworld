import * as React from 'react'
import {Link} from 'gatsby'
import { Stack, CardBody, Heading, Text, CardFooter, Button, Card, Image } from '@chakra-ui/react'

const ImgCard = (props) => {
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: '100%', sm: '50%' }}
        src={props.url || "https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"}
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody>
          <Heading size="md">{props.heading || "heading"}</Heading>
          <Text py="2">
    {props.body || "Exceeding expectations in every project we undertake"}
          </Text>
        </CardBody>

        <CardFooter>
          <Button as={Link} to="/contact" variant="solid" colorScheme="blue">
            Contact Us
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  )
}
export default ImgCard
