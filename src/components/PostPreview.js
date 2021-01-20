/** @jsx jsx */
import { jsx } from 'theme-ui'
import Card from './card'

export default function PostPreview(props) {
    return (
        <div sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gridColumn: '1/4'
        }}>
            {props.info.map(post => (
                <Card category={post.categories.nodes[0].name} 
                      title={post.title} slug={post.slug} 
                      fluid={post.featuredImage.node.localFile.childImageSharp.fluid}/>
            ))}
        </div>
    );
}





