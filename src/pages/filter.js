/** @jsx jsx */
import { jsx } from 'theme-ui'
import Header from '../components/header'
import { graphql, Link} from 'gatsby'
import ListPostPreview from '../components/ListPostPreview'
import TagsBar from '../components/tags-bar'

export default function Filter({data}) {
  console.log(data.allWpPost.nodes)
    return(
        <div>
          <Header />
          <TagsBar />
          <input sx={{margin: '0 auto', display: 'block'}}></input>
          <ListPostPreview info={data.allWpPost.nodes}/>
        </div>
    )
}

export const query = graphql`
    query {
      allWpPost {
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
        slug
        title
        modified(formatString: "MMMM Do, YYYY")
    }
  }
}
`