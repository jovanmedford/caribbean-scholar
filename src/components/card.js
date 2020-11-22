/** @jsx jsx */
import { jsx } from 'theme-ui'



export default function Card(props) {
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
              backgroundImage: `url(${props.post.src})`,
              backgroundSize: 'cover'}}>
            </div>
            <div className='card-content' sx={{
              padding: '0.8rem'
              }}>
              <h3 sx={{margin: 0}}>{props.post.category}</h3>
              <p>{props.post.title}</p>
            </div>
          </div>
    )
}