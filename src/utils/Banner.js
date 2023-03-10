import React from 'react'
import { Heading, Text, Stack } from '@chakra-ui/react'

export default function Banner({ title, subtitle}) {
  return (
    <Stack mb={'3rem'} textAlign={'center'} color={'white'} maxW={'100vw'}>
      <Heading
        fontSize={['xl','2xl','3xl', '5xl']}
        as={'h1'}
        noOfLines={'2'}
        textAlign="center">
        {title}
      </Heading>
      <Text
        lineHeight={'normal'}
        fontSize={['2xl', '4xl']}
        fontWeight={'400'}
        fontFamily={'Caveat, cursive'}
        textAlign={'center'}
      >{`${subtitle}`}
      </Text>
    </Stack>
  )
}

Banner.defaultProps = {
  title: 'Quality Construction',
  subtitle: 'From concept to completion, we deliver excellence in construction',
}
