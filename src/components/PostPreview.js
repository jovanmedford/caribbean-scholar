/** @jsx jsx */
import { jsx } from 'theme-ui'
import Card from './card'

export default function PostPreview(props) {
    return (
        <div sx={{
          display: 'flex',
          flexWrap: 'wrap',
          width: ['100%','96%','80%'],
          margin: '2rem auto'
        }}>
            {props.info.map(post => (
                <Card category={post.categories.nodes[0].name} 
                      title={post.title} slug={post.slug} 
                      fluid={post.featuredImage.node.localFile.childImageSharp.fluid}/>
            ))}
        </div>
    );
}





