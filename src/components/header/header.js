import * as React from 'react'

import { Link } from 'gatsby'
import Logo from './logo.js'
import * as styles from './header.module.css'

export default function Header() {
  return (
    <header id={styles['header']}>
      <Link to="/">
        <Logo />
      </Link>
    </header>
  )
}
