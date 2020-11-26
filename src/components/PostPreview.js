/** @jsx jsx */
import { jsx } from 'theme-ui'
import Card from './card'
import { graphql, useStaticQuery } from 'gatsby'

export default function PostPreview(props) {
    const data = useStaticQuery(graphql`
    query {
        allWpPost(filter: {tags: {nodes: {elemMatch: {name: {eq: "Top Post"}}}}}) {
          nodes {
            categories {
              nodes {
                name
              }
            }
            author {
              node {
                firstName
                lastName
              }
            }
            title
            slug
            modified(formatString: "MMMM Do, YYYY")
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
      }
`)
    
    console.log(data)

    return (
        <div>
            {data.allWpPost.nodes.map(post => (
                <Card category={post.categories.nodes[0].name} 
                      title={post.title} slug={post.slug} 
                      fluid={post.featuredImage.node.localFile.childImageSharp.fluid}/>
            ))}
        </div>
    );
}





