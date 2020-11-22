/** @jsx jsx */
import { jsx } from 'theme-ui'
import Header from '../components/header'
import Hero from '../components/hero'
import Card from '../components/card'
import Cta from '../components/cta'
import Ad from '../../static/ad.jpg'

/*Images*/
import Image1 from '../../static/spanish.jpg'
import geo from '../../static/geo.jpg'
import bim from '../../static/bim.webp'


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


export default function BlogHome() {
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

    <Card post={spanishPost}/>
    <Card post={geoPost}/>
    <Card post={bimPost}/>

    <Cta />
  </div>
  )
}
