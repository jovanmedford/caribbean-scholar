/** @jsx jsx */
import { jsx } from 'theme-ui'
import ListCard from './ListCard'

export default function ListPostPreview(props) {
    return (
        <div sx={{
          display: 'flex',
          flexWrap: 'wrap',
          width: ['90%','75%','50%'],
          margin: '0 auto'
        }}>
            {props.info.map(post => (
                <ListCard category={post.categories.nodes[0].name} 
                      title={post.title} slug={post.slug} 
                />
            ))}
        </div>
    );
}





