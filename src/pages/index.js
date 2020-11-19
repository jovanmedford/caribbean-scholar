/** @jsx jsx */
import { faBorderNone } from '@fortawesome/free-solid-svg-icons'
import { jsx } from 'theme-ui'
import Header from '../components/header'
import Hero from '../components/hero'
import Ad from '../../static/ad.jpg'
import Image1 from '../../static/spanish.jpg'


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

    <div className='Card' sx={{
      width: '80%',
      backgroundColor: 'white',
      height: '15rem',
      margin: '1rem auto',
      overflow: 'hidden'
    }}>
      <div className='card-image' sx={{
        height:'7.5rem',
        width:'100%',
        backgroundImage: `url(${Image1})`,
        backgroundSize: 'cover'}}>
      </div>
      <div className='card-content'>
        <h3>Spanish</h3>
        <p>50 Spanish Expressions You Must Know Before Taking The Exam</p>
      </div>
    </div>
  </div>
  )
}
