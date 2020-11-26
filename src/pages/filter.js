/** @jsx jsx */
import { jsx } from 'theme-ui'
import Header from '../components/header'
import { graphql, Link} from 'gatsby'
import ListPostPreview from '../components/ListPostPreview'

export default function Filter({data}) {
  console.log(data.allWpPost.nodes)
    return(
        <div>
          <Header />
          <input></input>
          <ListPostPreview info={data.allWpPost.nodes}/>
        </div>
    )
}

export const query = graphql`
    query {
      allWpPost {
            ...PreviewInformation
        }
    }
`