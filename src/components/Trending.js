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
                textAlign: 'center',
                marginBottom: '2rem'
              },
              ul: {
                display: 'block',
                fontSize: '16px',
                width: '7.5rem',
                margin: '0 auto'
              },
    
              li: {
                margin: '1rem 0',

                ':hover': {
                  textDecoration: 'underline',
                  cursor: 'pointer'
                }
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
          </div>
    )
}