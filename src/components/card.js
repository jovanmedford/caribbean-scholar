/** @jsx jsx */
import { jsx } from 'theme-ui'
import Img from 'gatsby-image'
import { Link } from 'gatsby'


export default function Card(props) {
    return(
        <div className='Card' sx={{
            width: ['80%', '33%'],
            backgroundColor: 'background',
            height: ['17rem', '15rem'],
            margin: ['1rem auto', '0'],
            overflow: 'hidden',
            position: 'relative'
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
              <Link to={`/blog/${props.category}/${props.slug}`}
              sx={{
              color: 'secondary',
              textDecoration: 'none',
              position: 'absolute',
              bottom: 0,
              right: 1
              }}>Read</Link>
            </div>
          </div>
    )
}