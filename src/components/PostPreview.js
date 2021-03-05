/** @jsx jsx */
import { jsx } from 'theme-ui'
import Card from './card'

export default function PostPreview(props) {
    return (
        <div sx={{
          display: 'flex',
          justifyContent: 'space-between',
          position: 'relative',
          flexWrap: 'wrap',
          width: ['100%','96%','80%'],
          margin: '4rem auto'
        }}>
            {props.info.map(post => (
                <Card category={post.categories.nodes[0].name} 
                      title={post.title} slug={post.slug} 
                      fluid={post.featuredImage.node.localFile.childImageSharp.fluid}/>
            ))}

            <aside className='more-featured-posts' sx={{
                display: ['none','block'],
                position: 'relative',
                top: '-50px',
                width: '25%',

                p: {
                    fontSize: '1rem',
                    fontWeight: 'semibold'
                }
            }}>
                <h3 sx={{
                    fontSize: '1.3rem',
                    color: '#C8707A',
                    marginBottom: '0.5rem'
                }}>Learning to Learn </h3>
                <p className>Embracing your procrastination habits - becoming consistent</p>
                <hr/>
                <p className>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean.</p>
                <hr/>
                <p className>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean.</p>              

            </aside>
        </div>
    );
}





