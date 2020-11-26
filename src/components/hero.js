/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

export default function Hero() {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: {eq: "img/mattridley.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
        }
      }
    }
  `
  )
  const source = data.heroImage.childImageSharp.fluid

    return (
    <div sx={{
      position: 'relative',
      width: '100%',
      gridRow: ['1/3', '1/2'],
      gridColumn: ['1/3', '1/4'],
      height: ['18rem', '22rem'],
      display: 'inline-block'
      }}>
        <div className='Overlay' sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'black',
            zIndex: '-0.5',
            opacity: '19%'
          }}>
        </div>
        <div className='post-info' sx={{
          position: "absolute",
          padding: '1.5rem',
          color: 'title',
          }}>
          <h2 sx={{
            fontWeight: '700'
          }}>The Complete Guide to Balancing
            Chemical Equations
          </h2>
          <h3>By Carl Edwards<br/>in Chemistry</h3>
        </div>
        <Img fluid={source} sx={{
          width: '100%',
          height: ['18rem', '22rem'],
          zIndex: '-1'
        }}/>
    </div>
    )
}