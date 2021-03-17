/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link, graphql, useStaticQuery } from 'gatsby'

export default function AdditionalPostsList() {
    const data = useStaticQuery(graphql`
    query {
         allWpPost(limit: 3, filter: {section: {name: {eq: "additionalPost"}}}){
            nodes {
            title
            slug
            categories {
              nodes {
                name
              }
            }
            }
          }
    }
`)
    const additionalPosts = data.allWpPost.nodes;
    console.log(additionalPosts)
    return(
        <aside className='additional-posts' sx={{
            display: ['none','block'],
            position: 'relative',
            top: '-60px',
            width: '33%',
            a: {
                fontSize: '1rem',
                fontWeight: 'semibold',
                color: 'text'
            }
        }}>
            <div className="additionl-posts__container" sx={{
                width: '80%',
                marginLeft: '5%'
            }}>
                <h3 sx={{
                    fontSize: '1.3rem',
                    color: '#C8707A',
                    marginBottom: '0.5rem'
                }}>Learning to Learn </h3>
                {additionalPosts.map(post => (
                    <div>
                    <Link to={`/blog/${post.categories.nodes[0].name}/${post.slug}`}> {post.title} </Link>
                    <hr/>
                    </div>
                ))}
                </div>           
        </aside>
    )
}