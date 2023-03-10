import React from 'react';
import BackgroundImage from 'react-background-image';

export default function BgImg({image,title}) {
  return (
      <BackgroundImage
        src={image}
        className='bgimg'>
        <h2>{title ||"From concept to completion, we deliver excellence in construction"}</h2>
      </BackgroundImage>
  );
}

