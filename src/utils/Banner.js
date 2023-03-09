import React from 'react'
import { Text, Stack } from '@chakra-ui/react'

export default function Banner({ title, subtitle1, subtitle2 }) {
  return (
    <Stack mb={'3rem'} textAlign={'center'} color={'white'} maxW={'100vw'}>
      <Text
        fontSize={['4xl', '5xl']}
        as={'h1'}
        noOfLines={'2'}
        textAlign="center"
      >
        {title}
      </Text>
      <Text
        lineHeight={'normal'}
        fontSize={['2xl', '4xl']}
        fontWeight={'400'}
        fontFamily={'Caveat, cursive'}
        textAlign={'center'}
      >{`${subtitle1}`}
        <br />
        {`${subtitle2}`}
      </Text>
    </Stack>
  )
}

Banner.defaultProps = {
  title: 'Quality Construction',
  subtitle1: 'From concept to completion,',
  subtitle2: 'we deliver excellence in construction',
}
