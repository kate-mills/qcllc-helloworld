/*import React from 'react'
import { AnimatePresence } from 'framer-motion'

export const wrapPageElement = ({ element }) => (
  <AnimatePresence wait>{element}</AnimatePresence>
)

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  if (location.action === 'PUSH') {
    window.setTimeout(
      () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }),
      0
    )
  } else {
    const savedPosition = getSavedScrollPosition(location) || [0, 0]
    window.setTimeout(
      () => window.scrollTo({ ...savedPosition, behavior: 'smooth' }),
      0
    )
  }
  return false
}*/
