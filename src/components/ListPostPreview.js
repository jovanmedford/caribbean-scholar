/** @jsx jsx */
import { jsx } from 'theme-ui'
import ListCard from './ListCard'

export default function ListPostPreview(props) {
    return (
        <div sx={{

        }}>
            {props.info.map(post => (
                <ListCard category={post.categories.nodes[0].name} 
                      title={post.title} slug={post.slug} 
                      fluid={post.featuredImage.node.localFile.childImageSharp.fluid}/>
            ))}
        </div>
    );
}





