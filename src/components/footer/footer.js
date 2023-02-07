import * as React from 'react'
import Link from '../Link'
import {Text} from 'grommet'

import * as styles from './footer.module.css'

export default function Footer({ title = 'Quality Construction LLC' }) {
  return (
    <footer id={styles['footer']}>
      <Text size="xsmall"> © {new Date().getFullYear()}
        {`, `} <Link to="/" size="xsmall">{title}</Link>
      </Text>
      <Link to="/contact" size="xsmall">Contact Us</Link>
    </footer>
  )
}
