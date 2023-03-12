import React from 'react'
import styled from 'styled-components'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import { motion, useScroll, useSpring } from 'framer-motion'
import Logo from '../images/qclogo'

const Footer = () => {
  const icons = [
    {
      id: 0,
      icon: <FaFacebook className="icon facebook-icon" />,
      path: `https://www.facebook.com`,
    },
    {
      id: 1,
      icon: <FaTwitter className="icon twitter-icon" />,
      path: `https://www.twitter.com`,
    },
    {
      id: 2,
      icon: <FaInstagram className="icon instagram-icon" />,
      path: `https://www.instagram.com`,
    },
  ]
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })
  return (
    <FooterWrapper>
      <motion.div className="progress" style={{ scaleX }} />
      <div className="title">
        <Logo id="footer-logo" />
      </div>
      <div className="icons">
        {icons.map(item => {
          return (
            <a href={item.path} key={item.id}>
              {item.icon}
            </a>
          )
        })}
      </div>
    </FooterWrapper>
  )
}
const FooterWrapper = styled.footer`
  /*padding: 1rem 0 2rem;*/
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  background-size: 4px 4px;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  -moz-backdrop-filter: blur(3px);
  background-color: var(--chakra-colors-blackAlpha-800);

  .progress {
    position: fixed;
    left: 0;
    right: 0;
    bottom: calc(100% + 2px);
    width: 100%;
    height: 5px;
    background: var(--chakra-colors-uigold-200);
  }
  /*.icons { width: 10rem; display: flex; justify-content: space-between; margin: 0 auto; } .icon { color: var(--chakra-colors-blackAlpha-900); font-size: 1.3rem; transition: all 0.5s ease-in-out; &:hover { color: var(--chakra-colors-uigold-400); } }*/
  .icon{ display:none; }
  svg#footer-logo {
    max-width: 100px;
    margin: 0 auto;
    color: var(--chakra-colors-blackAlpha-900);
    /*padding: 1rem 1rem; margin: 0 auto 2rem auto;*/
  }
`

export default Footer
