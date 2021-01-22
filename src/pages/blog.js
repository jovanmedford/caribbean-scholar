/** @jsx jsx */
import { jsx } from 'theme-ui'
import Header from '../components/header'
import Hero from '../components/hero'
import Cta from '../components/cta'
import PostPreview from '../components/PostPreview'
import Trending from '../components/Trending'
import Advertisement from '../components/advertisement'
import { graphql } from 'gatsby'
import Footer from '../components/footer'

export default function BlogHome( {data} ) {
  return (
    <div>
      <Header />      
      <section sx={{
        display: ['block','grid'],
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridTemplateRows: 'repeat(3, 1fr)',
        gridGap: '5px',
        width: ['100%','96%','80%'],
        margin: '0 auto',
        height: ['auto', '39rem']
      }}>
      <Hero />
      <Trending />
      <Advertisement />
      <PostPreview info={data.featured.nodes}/>
      </section>

    <Cta />

    <section className='copy' sx={{
      margin: '2rem auto',
      width: ['96%', '96%','80%']
      }}>
      <h2>Find real <span sx={{color:'cta'}}>answers</span> to your questions</h2>
      <p>Read detailed info on course material and everything related to your future.</p>
    </section>

    <section className='top-posts' sx={{
      margin: '1rem auto',
      width: ['96%','96%','80%']
  }}>
      <h2>Top Posts</h2>
      <PostPreview info={data.topPost.nodes}/>
    </section>

   

    <section className='recently-added' sx={{
      margin: '1rem auto',
      width: ['96%','96%','80%']
  }}>
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
    
    <Cta />
    <Footer />
  </div>
  )
}


export const query = graphql`

query {
  featured: allWpPost(limit: 3, filter: {section: {name: {eq: "featured"}}}){
    ...PreviewInformation
  }

  topPost: allWpPost(limit: 3, filter: {section: {name: {eq: "topPost"}}}){
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