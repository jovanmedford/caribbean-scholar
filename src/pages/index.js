/** @jsx jsx */
import { jsx } from 'theme-ui'
import Header from '../components/header'
import Hero from '../../static/mattridley.jpg'

export default function BlogHome() {
  return (
    <div>
      <Header />
      <div sx={{position: 'relative'}}>
        <div className='Overlay' sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'black',
            zIndex: '-0.5',
            opacity: '13%'
          }}>
        </div>
        <div className='post-info' sx={{
          position: "absolute",
          padding: '1.5rem',
          color: 'title',
          }}>
          <h1 sx={{
            fontWeight: '700'
          }}>The Complete Guide to Balancing
            Chemical Equations
          </h1>
          <h3>By Carl Edwards<br/>in Chemistry</h3>
        </div>
        <img src={Hero} sx={{
          width: '100%',
          height: '18rem',
          zIndex: '-1'
        }}/>
      </div>
    </div>
  )
}
