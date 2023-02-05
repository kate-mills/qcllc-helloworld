import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

export default function NotFoundPage() {
  return (
    <Layout>
      <article>
        <h2>Oops! <Link to="/">Back to Home Page</Link></h2>
      </article>
    </Layout>
  )
}
