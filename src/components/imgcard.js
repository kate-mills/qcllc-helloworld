import * as React from 'react'
import {Link} from 'gatsby'
import { Stack, CardBody, Heading, Text, CardFooter, Button, Card, Image } from '@chakra-ui/react'

const ImgCard = ({headingText='', bodyText='',buttonText='Contact Us', url='', imgWidth="30%", backgroundColor='inherit'}) => {
  return (
    <Card
      align="stretch"
      direction={{ base: 'column', sm: 'row'}}
      overflow="hidden"
      variant="outline"
      backgroundColor={backgroundColor}>
      <Image
        objectFit="cover"
        maxW={{ base: '100%', sm: imgWidth}}
        src={url || "https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"}
        alt="Caffe Latte"
      />
      <Stack>
        <CardBody>
          <Heading p="3" paddingLeft="0" size="md">{headingText || "heading"}</Heading>
          <Text py="2">
            {bodyText || "Exceeding expectations in every project we undertake"}
          </Text>
        </CardBody>

        <CardFooter>
          <Button as={Link} to="/contact" variant="solid" colorScheme="uigold">
            {buttonText}
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  )
}
export default ImgCard
