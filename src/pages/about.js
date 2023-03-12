import React, { useRef } from 'react'
import styled from 'styled-components'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Heading, AspectRatio } from '@chakra-ui/react'
import Layout from '../components/layout'

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance])
}

function Image({ id }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useParallax(scrollYProgress, 300)

  return (
    <section>
      <AspectRatio ref={ref} maxW='400px' w={300} ratio={4/3}>
        <img className="page-img" src={`/${id}.jpg`} alt="" />
      </AspectRatio>
      <Heading
        as={motion.h2}
        style={{ y }}
        className="animated-h2"
        color={'var(--chakra-colors-whiteAlpha-900)'}
        bg={'var(--chakra-colors-uigold-200)'}
    fontSize={'2xl'}
      >{`#00${id}`}</Heading>
    </section>
  )
}

export default function AboutPage() {
  return (
    <Layout>
      <StyledPage>
        {[1, 2, 3, 4, 5].map(image => {
          return <Image key={image} id={image} />
        })}
      </StyledPage>
    </Layout>
  )
}

const StyledPage = styled.div`
  section {
    max-height: 80vh;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 500px;
    scroll-snap-align: end;

    background: var(--chakra-colors-uiblue-300);
    margin-block-end: 40vh;

    h2.animated-h2 {
      margin: 0;
      position: absolute;
      left: calc(50% + 70px);
      position: absolute;
    }
    > div {
      max-height: 50vh;
      position: relative;
      background: var(--white);
      overflow: hidden;
      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`
