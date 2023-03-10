import React, { useRef } from 'react'
import styled from 'styled-components'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { Heading } from '@chakra-ui/react'
import Layout from '../components/layout'

function useParallax(value, distance) {
  return useTransform(arguments[0], [0, 1], [-300, 300])
}

function Image({ id }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useParallax(scrollYProgress, 300)

  return (
    <section>
      <div ref={ref}>
        <img
          className="page-img"
          src={`/${id}.jpg`}
          alt="A London skyscraper"
        />
      </div>
      <Heading as={motion.h2} style={{ y }}>{`#00${id}`}</Heading>
    </section>
  )
}

export default function AboutPage(props) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <Layout>
      <StyledPage className={props.className}>
        {[1, 2, 3, 4, 5].map(image => (
          <Image key={image} id={image} />
        ))}
        <motion.div className="progress" style={{ scaleX }} />
      </StyledPage>
    </Layout>
  )
}

const StyledPage = styled.div`
  h2 {
    margin: 0;
    left: calc(40% + 130px);
    position: absolute;
  }
  section {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    scroll-snap-align: center;
    perspective: 500px;
    div {
      width: 300px;
      height: 400px;
      position: relative;
      background: var(--white);
      overflow: hidden;
      margin: 20px;
      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        min-width: 100%;
        height: auto;
        object-fit: cover;
      }
    }
  }
  .progress {
    width: 100%;
    position: fixed;
    left: 0;
    right: 0;
    height: 5px;
    background: var(--primary);
    bottom: 225px;
  }
`
