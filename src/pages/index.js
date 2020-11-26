/** @jsx jsx */
import { jsx } from 'theme-ui'
import Header from '../components/header'
import Hero from '../components/hero'
import Cta from '../components/cta'
import PostPreview from '../components/PostPreview'
import Trending from '../components/Trending'
import Advertisement from '../components/Ad'
import { graphql } from 'gatsby'

export default function BlogHome( {data} ) {
  return (
    <div sx={{fontFamily: 'heading',
    ul: {
      padding: '1rem 0',
      width: '95%',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-around'

    },
    li: {
      listStyle: 'none',
      display: 'inline-block',
    }}}>
      <Header />
      <ul>
        <li>Spanish</li>
        <li>Business</li>
        <li>Accounts</li>
        <li>Economics</li>
      </ul>
      
      <div sx={{
        display: ['block','grid'],
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridTemplateRows: 'repeat(3, 1fr)',
        gridGap: '5px',
        width: ['100%','96%','80%'],
        margin: '0 auto',
        height: ['auto', '45rem']
      }}>
      <Hero />
      <Trending />
      <Advertisement />
      <PostPreview info={data.csec.nodes}/>
      </div>

    <Cta />

    <section className='copy' sx={{marginLeft: '1rem'}}>
      <h2>Find real <span sx={{color:'cta'}}>answers</span> to your questions</h2>
      <p>Read detailed info on course material and everything related to your future.</p>
    </section>

    <section className='top-posts' sx={{margin: '1rem'}}>
      <h2>Top Posts</h2>
      <PostPreview info={data.top.nodes}/>
    </section>

    <Cta /> 

    <section className='recently-added' sx={{marginLeft: '1rem'}}>
      <h2>Recently Added</h2>
    </section>

    <button sx={{
      display: 'block',
      margin: '0 auto',
      background: 'none',
      border: 'darkblue 0.5px solid',
      height: '2.5rem',
      width: '8rem'
    }}>Load More...</button>
    <hr></hr>
  </div>
  )
}


export const query = graphql`

query {
  top: allWpPost(filter: {tags: {nodes: {elemMatch: {name: {eq: "Top Post"}}}}}){
    ...PreviewInformation
  }

  csec: allWpPost(filter: {tags: {nodes: {elemMatch: {name: {eq: "CSEC"}}}}}){
    ...PreviewInformation
  }
}

fragment PreviewInformation on WpPostConnection{
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
featuredImage {
  node {
    localFile {
      childImageSharp {
        fluid(maxWidth: 1200) {
          base64
          tracedSVG
          srcWebp
          srcSetWebp
          originalImg
          originalName
        }
        gatsbyImageData
      }
    }
  }
}
}
}
`