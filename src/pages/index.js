import * as React from 'react'
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'

 
export default function Home({ data }) {
  const image = getImage(data.file)

  return (
    <Layout showHero={true} image={image}>
      <article>
        <p>Quisque convallis ligula non magna efficitur tincidunt.</p>
      </article>
    </Layout>
  )
}

export const query = graphql`
  {
    file(relativePath: { eq: "hero.jpg" }) {
      size
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
  }
`
