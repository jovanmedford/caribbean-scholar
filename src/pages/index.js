/** @jsx jsx */
import { jsx } from 'theme-ui'
import Header from '../components/header'
import Hero from '../components/hero'
import Card from '../components/card'
import Cta from '../components/cta'
import Ad from '../img//ad.jpg'
import PostPreview from '../components/PostPreview'
import { graphql } from 'gatsby'

/*Images*/
import Image1 from '../img/spanish.jpg'
import geo from '../img/geo.jpg'
import bim from '../img/bim.webp'


const spanishPost = {
  src: Image1,
  category: 'Spanish',
  title: '50 Things You Must Know Before The Spanish Exam'
}

const geoPost = {
  src: geo,
  category: 'Geography',
  title: 'Contour Lines By Name and Nature'
}

const bimPost = {
  src: bim,
  category: 'Lifestyle',
  title: 'Studying Abroad From At Home'
}


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
      <Hero />
      <p sx={{
        fontWeight: 'bold',
        fontSize: '1rem',
        marginLeft: '1rem', 
        marginTop: '2rem'
    }}>See All Topics</p>

    <img src={Ad} sx={{
      display: 'block',
      width: '60%',
      margin: '0 auto'
    }}/>

    
    <PostPreview info={data.csec.nodes}/>
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
      <Card post={spanishPost}/>
      <Card post={spanishPost}/>
      <Card post={spanishPost}/>
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