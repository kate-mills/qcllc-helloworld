import * as React from 'react'
import { AspectRatio } from '@chakra-ui/react'

const Map = () => {
  return (
    <AspectRatio ratio={16 / 9} borderRadius="lg" borderWidth="1px">
      <iframe
        title="Google Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.715073056929!2d-121.91189738446329!3d37.37291824294994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcbf322a530d3%3A0x85461fdf40f9ccc7!2sGoble%20Building%2C%201650%20Zanker%20Rd%2C%20San%20Jose%2C%20CA%2095112!5e0!3m2!1sen!2sus!4v1677195673663!5m2!1sen!2sus"
      />
    </AspectRatio>
  )
}
export default Map
