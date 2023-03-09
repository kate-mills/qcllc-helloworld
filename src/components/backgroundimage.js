import React from 'react'
import { Parallax } from 'react-parallax'
import {Stack, Text} from '@chakra-ui/react'

export default function BgImg({ image, title }) {
  return (
    <>
    <Parallax
      strength={-400}
      bgImage={image}
      renderLayer={percentage => {
        return (
          <div
            style={{
              position: 'absolute',
                backgroundColor: `rgb(99 134 172/ ${percentage * .2 })`,
              left: '50%',
              top: '50%',
              borderRadius: '50%',
              transform: 'translate(-50%, -50%)',
              width: percentage * 500,
              height: percentage * 500,
            }}
          />
        )
      }}
    >
    <Stack className="bgimg" minH={'50vh'}>

    <Text as="h2" fontSize={['xl','2xl', '5xl' ]} noOfLines={5}>
        {title ||
            `From concept to completion, we deliver excellence in construction`}
    </Text>
    </Stack>
    </Parallax>
    </>
  )
}
