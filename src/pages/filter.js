/** @jsx jsx */
import { jsx } from 'theme-ui'
import Header from '../components/header'
import { graphql } from 'gatsby'
import ListPostPreview from '../components/ListPostPreview'
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
          <input placeholder='Search a topic' onChange={handleInputChange} sx={{
            margin: '0.5rem auto 2rem auto', 
            width: '80%',
            height: '2rem',
            border: '0.1rem solid',
            borderRadius: '6px',
            paddingLeft: '1rem',
            backgroundColor: 'white',
            background: 'none',
            maxWidth: '25rem'
            }}></input>
          <ListPostPreview info={posts}/>
        </div>
    )
}

export const query = graphql`
    query {
      allWpPost(filter: {section: {name: {ne: "company"}}}) {
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