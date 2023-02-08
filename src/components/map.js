import * as React from 'react'
import { AspectRatio } from '@chakra-ui/react'

const Map = () => {
  return (
    <AspectRatio ratio={16 / 9}>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d203133.98595434224!2d-121.9561788516929!3d37.29587965524323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcae48af93ff5%3A0xb99d8c0aca9f717b!2sSan%20Jose%2C%20CA!5e0!3m2!1sen!2sus!4v1675812062679!5m2!1sen!2sus"
      />
    </AspectRatio>
  )
}

export default Map
