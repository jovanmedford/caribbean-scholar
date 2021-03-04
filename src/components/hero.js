/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

export default function Hero() {
  const data = useStaticQuery(graphql`
      query {
        wpPost(section: {name: {eq: "hero"}}) {
            content
            title
            slug
            date(formatString: "YYYY-MM-DD")
            author {
                node {
                firstName
                lastName
                }
            }
            categories {
                nodes {
                name
                }
            }
            featuredImage {
                node {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 1200) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
    }
  `)

const hero = data.wpPost;
console.log(hero);
const category = hero.categories.nodes[0].name;

    return (
    <section sx={{
      position: 'relative',
      width: '100%',
      gridRow: ['1/3', '1/2'],
      gridColumn: ['1/3', '1/4'],
      height: ['18rem', '22rem'],
      display: 'inline-block'
      }}>
      <Link to={`/blog/${category}/${hero.slug}`}>
        <div className='post-info' sx={{
          position: "absolute",
          height: ['18rem', '22rem'],
          padding: '1.5rem',
          color: 'title',
          }}>
          <h1 sx={{
            fontWeight: '700',
            fontSize: ['1.8rem', '2.3rem']
          }}>
            {hero.title}
          </h1>
          <h3 sx={{
            position: 'absolute',
            bottom: '2'
          }}>
            By {hero.author.node.firstName} {hero.author.node.lastName}
            <br/>in {hero.categories.nodes[0].name}
          </h3>
        </div>
        <Img  fluid={hero.featuredImage.node.localFile.childImageSharp.fluid}
        sx={{
          width: '100%',
          height: ['18rem', '22rem'],
          zIndex: '-1'
        }}/>
      </Link>
    </section>
    )
}