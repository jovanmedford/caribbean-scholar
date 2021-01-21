/** @jsx jsx */
import { jsx } from 'theme-ui'
import Img from 'gatsby-image'
import { Link } from 'gatsby'


export default function Card(props) {
    return(
      <Link to={`/blog/${props.category}/${props.slug}`} sx={{
        width: ['80%', '33.33%'],
        backgroundColor: 'background',
        height: ['17rem', '15rem'],
        margin: ['1rem auto', '0'],
        overflow: 'hidden',
        position: 'relative',
        color: 'text',
        textDecoration: 'none'
      }}>
        <div className='Card' sx={{
          backgroundColor: 'muted',
          boxShadow: '0px 0px 0px',
            ':hover': {
              cursor: 'pointer',
              backgroundColor: 'primary',
            }
          }}>

            <Img fluid={props.fluid} sx ={{
              height:'7.5rem',
              width:'100%'
            }}/>

            <div className='card-content' sx={{
              padding: '0.8rem',
              minHeight: '8rem',
                p: {
                  marginTop: '0',
                }
              }}>
              <h3 sx={{margin: 0}}>{props.category}</h3>
              <p>{props.title}</p>
            </div>
          </div>
      </Link>
    )
}