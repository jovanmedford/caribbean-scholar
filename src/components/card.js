/** @jsx jsx */
import { jsx } from 'theme-ui'

import Image1 from '../../static/spanish.jpg'

export default function Card() {
    return(
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
            <div className='card-content' sx={{
              padding: '0.8rem'
              }}>
              <h3 sx={{margin: 0}}>Spanish</h3>
              <p>50 Spanish Expressions You Must Know Before Taking The Exam</p>
            </div>
          </div>
    )
}