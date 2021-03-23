/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { text } from '@fortawesome/fontawesome-svg-core';

export default function BlogHomepageHero() {
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
            cleanExcerpt{
              excerpt
            }
            categories {
                nodes {
                name
                }
            }
            featuredImage {
                node {
                  altText
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
const category = hero.categories.nodes[0].name;
const altText = hero.featuredImage.node.altText;
    return (
    <section sx={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      width: ['100%','96%','80%'],
      margin: '3rem auto 3rem auto'
      }}>
      <Link to={`/blog/${category}/${hero.slug}`}         sx={{
          width: ['100%','50%'],
          backgroundColor: '#FEEED1',
          minHeight: '18rem'
        }}>
        <Img alt={altText} fluid={hero.featuredImage.node.localFile.childImageSharp.fluid} sx={{height:'100%'}}/>
      </Link>
      <div className='post-info' sx={{
          color: 'text',
          width: ['80%', '50%'],
          margin: ['1rem auto', '0'],
          position: 'relative'
          }}>
            <div sx={{
              margin:'0 auto',
              width:['100%','90%']
              
          }}>
          <span sx={{color:'accent'}}>
          {hero.categories.nodes[0].name}
          </span>
            <h2 sx={{
            margin: '0 0 1rem 0',
            fontWeight: '700',
            fontSize: [2,3]
          }}>
            {hero.title}
          </h2>
          <p sx={{
            color:'text',
            fontSize: '1.2rem'
            }}>
            {hero.cleanExcerpt.excerpt}
          </p>
          <p sx={{
            fontSize: 0,
            marginTop: '1rem'
          }}>
            By {hero.author.node.firstName} {hero.author.node.lastName}
          </p>
          </div>
      </div>
    </section>
    )
}