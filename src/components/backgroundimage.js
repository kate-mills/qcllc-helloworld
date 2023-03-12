import React from 'react'
import { Parallax } from 'react-parallax'
import { Stack, Text } from '@chakra-ui/react'

export default function BgImg({ image, title }) {
  return (
      <Parallax
        strength={-400}
        bgImage={image}
        renderLayer={percentage => {
          return (
            <div
              style={{
                position: 'absolute',
                backgroundColor: `rgb(236 201 75/ ${percentage * .5})`,
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
        <Stack className="bgimg" minH={['30vh', '35vh', '40vh', '50vh']}>
          <Text as="h2" fontSize={['lg','xl', '2xl', '5xl']} noOfLines={4}>
            {title ||
              `From concept to completion, we deliver excellence in construction`}
          </Text>
        </Stack>
      </Parallax>
  )
}
