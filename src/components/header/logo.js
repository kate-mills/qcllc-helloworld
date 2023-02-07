import * as React from 'react'

const Logo = () => {
  return (
    <>
      <svg
        stroke="currentColor"
        fill="darkgrey"
        strokeWidth="0"
        viewBox="0 0 448 512"
        height="2.4em"
        width="2.4em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"></path>
      </svg>

      <svg
        style={{ position: 'relative', right: '.73rem'}}
        stroke="darkgrey"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="2em"
        width="2em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <desc></desc>
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <line x1="3" y1="21" x2="21" y2="21"></line>
        <path d="M5 21v-14l8 -4v18"></path>
        <path d="M19 21v-10l-6 -4"></path>
        <line x1="9" y1="9" x2="9" y2="9.01"></line>
        <line x1="9" y1="12" x2="9" y2="12.01"></line>
        <line x1="9" y1="15" x2="9" y2="15.01"></line>
        <line x1="9" y1="18" x2="9" y2="18.01"></line>
      </svg>
    </>
  )
}

export default Logo
