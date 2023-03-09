import * as React from 'react'
import {Link} from 'gatsby'
import { Stack, CardBody, Heading, Text, CardFooter, Button, Card, Image } from '@chakra-ui/react'


const ImgCard = ({headingText='', bodyText='',buttonText='Contact Us', url='', imgWidth="30%", backgroundColor='inherit', style={}}) => {
  return (
    <Card
      align=""
      direction={{ base: 'column', sm: 'row'}}
      overflow="hidden"
      variant="outline"
      backgroundColor={backgroundColor}>
      <Image
        objectFit="cover"
        maxW={{ base: '100%', sm: imgWidth}}
        src={url || "https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"}
        alt=""
        style={{...style}}
      />
      <Stack direction={'column'} wrap={'wrap'} margin={'auto'}>
        <CardBody>
          <Heading size="md" maxW={'80%'} width={'fit-content'}>{headingText || "heading"}</Heading>
          <Text maxW={'80%'} width={'fit-content'}>
            {bodyText || "Exceeding expectations in every project we undertake"}
          </Text>
        </CardBody>

        <CardFooter pb={100}>
          <Button as={Link} to="/contact" variant="solid">
            {buttonText}
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  )
}
export default ImgCard
