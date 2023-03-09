import * as React from 'react'
import {
  chakra,
  shouldForwardProp,
} from '@chakra-ui/react'


import { motion, isValidMotionProp } from 'framer-motion'

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: prop => isValidMotionProp(prop) || shouldForwardProp(prop),
})

export const ChakraMotionBox = ({children}) => {
  return(
     <ChakraBox
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 360,360, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: 1,
          repeatType: "loop",
        }}
        padding="1"
        bgGradient="linear(to-l, gray, aliceblue)"
        display="flex"
        justifyContent="center"
        alignItems="center"
    margin="0 auto"
      >{children}
      </ChakraBox> 
  )
}
