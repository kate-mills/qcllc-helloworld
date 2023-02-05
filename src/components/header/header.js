import * as React from 'react'

import * as styles from './header.module.css'

export default function Header({ title = 'Quality Construction LLC' }) {
  return (
    <header id={styles['header']}>
      <span>{title}</span>
    </header>
  )
}
