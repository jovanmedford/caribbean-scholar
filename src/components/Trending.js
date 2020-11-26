/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

export default function Trending() {
    return(
        <div sx={{
            verticalAlign: 'top',
            display: ['none', 'block'],
            gridRow: '1/2',
            gridColumn: '4',
            borderTop: '3px solid',
            borderRight: '3px solid',
            borderColor: 'text',
            backgroundColor: 'background',
            color:'text',
              h4: {
                textAlign: 'center'
              },
              ul: {
                display: 'block',
                fontSize: '16px',
                width: ['80%','80%','65%'],
                margin: '0 auto'
              },
    
              li: {
                margin: '0.5rem 0'
              }
          }}>
            <h4>Trending Topics</h4>
            <ul>
              <li>PRODUCTIVITY</li>
              <li>CAREER</li>
              <li>MATH</li>
              <li>PHYSICS</li>
              <li>HOME ECON</li>
            </ul>
            <Link to='/filter'>See all</Link>
          </div>
    )
}