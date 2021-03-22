/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import { text } from '@fortawesome/fontawesome-svg-core'


export default function ListCard(props) {
    return(
      <Link to={`/blog/${props.category}/${props.slug}`} sx={{
            marginTop:'0.5rem',
            backgroundColor: 'background',
            height: ['5rem', '8rem'],
            width: '100%',
            position: 'relative',
            overflow: 'hidden',
            color:'text',
            textDecoration: 'none',

      }}>
        <div className='ListCard' sx={{
            display: 'flex',
            alignItems: 'flex-start',
            borderLeft: '2px solid',
            borderLeftColor: 'accent',
            ':hover': {
              borderLeft: '2px solid',
              borderLeftColor: 'secondary',
              cursor: 'pointer'
            }
          }}>

            <div className='card-content' sx={{
              paddingLeft: '0.8rem',
              display: "inline-block",
              
               p: {
                fontsize: '1rem'
               }
              }}>
                <h5 sx={{margin: 0}}>{props.title}</h5>
                <p>{props.category}</p>
                
            </div>
          </div>
     </Link>
    )
}