/** @jsx jsx */
import { jsx } from 'theme-ui'
import Card from './card'
import AdditionalPostsList from './additionalPostsList'

export default function PostPreview(props) {
    const postsCount = props.info.length;
    console.log(postsCount)
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
            {postsCount === 2 && <AdditionalPostsList />}
        </div>
    );
}





