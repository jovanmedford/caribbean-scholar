/** @jsx jsx */
import { jsx } from 'theme-ui'
import Header from '../components/header'
import { graphql, Link} from 'gatsby'
import ListPostPreview from '../components/ListPostPreview'
import TagsBar from '../components/tags-bar'
import { useState } from 'react'

export default function Filter(props) {
  const { data } = props
  const allPosts = data.allWpPost.nodes;
  const [state, setState] = useState({
    filteredPosts: [],
    query: ''
  })

    const handleInputChange = (event) => {
    const query = event.target.value 

    const filteredPosts = allPosts.filter(post => {
      const category = post.categories.nodes[0].name;
      const title = post.title;
      return (
        title.toLowerCase().includes(query.toLowerCase()) ||
        category.toLowerCase().includes(query.toLowerCase()) 
        )
      })

      setState({
        query,
        filteredPosts})
  }

    const { filteredPosts, query} = state
    const hasSearchResults = filteredPosts && query !== ""
    const posts = hasSearchResults ? filteredPosts : allPosts 

    
    return(
        <div>
          <Header />
          <TagsBar />
          <input onChange={handleInputChange} sx={{margin: '0 auto', display: 'block'}}></input>
          <ListPostPreview info={posts}/>
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