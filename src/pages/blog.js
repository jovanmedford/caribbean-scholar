/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui'
import Header from '../components/header'
import BlogHomepageHero from '../components/blogHomepageHero'
import Cta from '../components/cta'
import PostPreview from '../components/PostPreview'
import Trending from '../components/Trending'
import Advertisement from '../components/advertisement'
import { graphql } from 'gatsby'
import Footer from '../components/footer'

export default function Blog( {data} ) {
  const [colorMode, setColorMode] = useColorMode()
  setColorMode('dark')
  return (
    <div>
      <Header />
      <BlogHomepageHero />  
      <section sx={{
        display: ['block','grid'],
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridTemplateRows: 'repeat(3, 1fr)',
        gridGap: '5px',
        width: ['100%','96%','80%'],
        margin: '0 auto',
        height: ['auto', '39rem']
      }}>
      <Advertisement />
      <PostPreview info={data.featured.nodes}/>
      </section>

    <Cta />

    <section className='copy' sx={{
      margin: '5rem auto',
      width: ['96%', '96%','80%']
      }}>
      <h3>Find real <span sx=
      {{
        color:'cta', 
        fontSize: ['2','3'],
        display: 'inline-block'
        }}>
          answers</span> to your questions.</h3>
      <span>Read detailed info on course material and everything related to your future.</span>
    </section>

    <section className='top-posts' sx={{
      margin: '1rem auto',
      width: ['96%','96%','80%']
  }}>
      <h2 sx={{fontWeight: 'semibold'}}>Top Posts</h2>
      <PostPreview info={data.topPost.nodes}/>
    </section>
    
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