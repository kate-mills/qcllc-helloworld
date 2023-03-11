import React, { useRef } from 'react'
import styled from 'styled-components'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from 'framer-motion'
import { wrap } from '@motionone/utils'
import { Text } from '@chakra-ui/react'

function ParallaxText({ children, baseVelocity = 100, numOfChildItems = 8 }) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  })
  const x = useTransform(baseX, v => `${wrap(-20, -45, v)}%`)
  const directionFactor = useRef(1)

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get()

    baseX.set(baseX.get() + moveBy)
  })

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        {[
          ...Array.from({ length: numOfChildItems }, (_, i) => {
            return i + 1
          }),
        ].map(i => {
          return (
            <Text id={i} key={i} fontSize={'5xl'} mr={30}>
              {children}
            </Text>
          )
        })}
      </motion.div>
    </div>
  )
}

export default function ScrollingText({
  heading1 = `(408) 639 - 8516`,
  heading2 = 'Schedule a site visit',
}) {
  return (
    <StyledParallaxText>
      <div>
        <ParallaxText baseVelocity={-5}>{heading2}</ParallaxText>
        <ParallaxText baseVelocity={5}>{heading1}</ParallaxText>
      </div>
    </StyledParallaxText>
  )
}

const StyledParallaxText = styled.section`
  > div {
  }
  .parallax {
    overflow: hidden;
    letter-spacing: -2px;
    text-transform: uppercase;
    margin: 0;
    white-space: nowrap;
    display: flex;
    flex-wrap: nowrap;
    line-height: 0.8;

    .scroller {
      display: flex;
      white-space: nowrap;
      display: flex;
      flex-wrap: nowrap;
    }
  }
`
