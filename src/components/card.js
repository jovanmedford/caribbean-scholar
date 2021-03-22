/** @jsx jsx */
import { jsx } from 'theme-ui'
import Img from 'gatsby-image'
import { Link } from 'gatsby'


export default function Card(props) {
    return(
      <Link to={`/blog/${props.category}/${props.slug}`} sx={{
        width: ['80%', '33%'],
        backgroundColor: 'background',
        margin: ['0.5rem auto','0'],
        overflow: 'hidden',
        position: 'relative',
        color: 'text',
        textDecoration: 'none'
      }}>
        <div className='Card' sx={{
          boxShadow: '0px 0px 0px',
            ':hover': {
              cursor: 'pointer',
              backgroundColor:'muteds'
            }
          }}>

            <Img fluid={props.fluid} sx ={{
              height:'12rem',
              width:'100%'
            }}/>

            <div className='card-content' sx={{
              padding: '0.8rem',
              minHeight: '8rem',
                p: {
                  marginTop: '0',
                  fontSize: '1rem'
                }
              }}>
              <p sx={{
                margin: 0,
                color: 'accent'
              }}>{props.category}</p>
              <p sx={{
              }}>{props.title}</p>
            </div>
          </div>
      </Link>
    )
}