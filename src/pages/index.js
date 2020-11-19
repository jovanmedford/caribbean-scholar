/** @jsx jsx */
import { faBorderNone } from '@fortawesome/free-solid-svg-icons'
import { jsx } from 'theme-ui'
import Header from '../components/header'
import Hero from '../components/hero'


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
    </div>
  )
}
