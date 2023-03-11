import React from 'react'
import { Text, Stack } from '@chakra-ui/react'

export default function Banner({ title, subtitle }) {
  return (
    <Stack mb={'3rem'} textAlign={'center'} color={'white'} maxW={'100vw'}>
      <Text
        fontStyle={'italic'}
        fontSize={['xl', '2xl', '3xl', '5xl']}
        color={'var(--chakra-colors-themegold-100)'}
        as={'h1'}
        noOfLines={'2'}
        textAlign="center"
      >
        {title}
      </Text>
      <Text
        color={'var(--chakra-colors-themegold-100)'}
        fontSize={['sm', 'md', 'xl', '2xl']}
        fontStyle={'italic'}
        textAlign={'center'}
      >
        {`${subtitle}`}
      </Text>
    </Stack>
  )
}

Banner.defaultProps = {
  title: 'Quality Construction',
  subtitle: 'From concept to completion, we deliver excellence in construction',
}
