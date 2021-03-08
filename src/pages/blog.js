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
      <h1 sx={{
        fontSize: 1,
        marginTop: '4rem',
        textAlign: 'center',  
      }}>
         Caribbean Scholar Blog
      </h1>
      <BlogHomepageHero />  
      <PostPreview info={data.featured.nodes}/>
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
  }}>
      <h2 sx={{
        fontWeight: 'semibold',
        width: ['96%','96%','80%'],
        margin: '0 auto'
        }}>Top Posts</h2>
      <PostPreview info={data.topPost.nodes}/>
    </section>
    
    
    <Footer />
  </div>
  )
}


export const query = graphql`

query {
  featured: allWpPost(limit: 2, filter: {section: {name: {eq: "featured"}}}){
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
        fluid {
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