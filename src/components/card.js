/** @jsx jsx */
import { jsx } from 'theme-ui'
import Img from 'gatsby-image'
import { Link } from 'gatsby'


export default function Card(props) {
    return(
        <div className='Card' sx={{
            width: ['80%', '33%'],
            backgroundColor: 'background',
            height: ['17rem'],
            margin: ['1rem auto', '0'],
            overflow: 'hidden'
          }}>

            <Img fluid={props.fluid} sx ={{
              height:'7.5rem',
              width:'100%'
            }}/>

            <div className='card-content' sx={{
              padding: '0.8rem'
              }}>
              <h3 sx={{margin: 0}}>{props.category}</h3>
              <p>{props.title}</p>
              <Link to={`/post/${props.slug}`}
              sx={{
              float:'right',
              color: 'secondary',
              textDecoration: 'none'
              }}>Read Now</Link>
            </div>
          </div>
    )
}