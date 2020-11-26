/** @jsx jsx */
import { jsx } from 'theme-ui'
import Img from 'gatsby-image'
import { Link } from 'gatsby'


export default function ListCard(props) {
    return(
        <div className='ListCard' sx={{
            width: ['100%','75%','50%'],
            margin: '0 auto 0.5rem auto',
            backgroundColor: 'background',
            height: ['5rem', '8rem'],
            overflow: 'hidden',
            position: 'relative',
            display: 'flex',
            alignItems: 'flex-start'
          }}>

            <Img fluid={props.fluid} sx ={{
              width:'20%',
              height:['5rem', '8rem'],
              display: "inline-block"
            }}/>

            <div className='card-content' sx={{
              padding: '0.8rem',
              display: "inline-block"
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