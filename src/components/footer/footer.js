import * as React from 'react'
import {Link} from 'gatsby'

import * as styles from './footer.module.css'

export default function Footer({ title = 'Quality Construction LLC' }) {
  return(
    <footer id={styles['footer']}>
   <span> © {new Date().getFullYear()}{`, `} <Link to="/">{title}</Link></span>
    <Link to="/contact">Contact Us</Link>
    </footer>
  )
}
