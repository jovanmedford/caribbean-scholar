/** @jsx jsx */
import { jsx } from 'theme-ui'

export default function Advertisement() {
    return(
        <a href='https://school.thecaribbeanscholar.com/' sx={{
            display: 'block',
            width: ['60%', '100%'],
            padding: '0.8rem',
            margin: '0 auto',
            gridColumn: '4',
            gridRow: '2/3',
            backgroundColor: 'primary',
            height: ['100%', '50%']
            }}>
            <h4 sx={{
                textAlign: 'center',
                color: 'white'
            }}>
                Visit Our School
            </h4>
         </a>        
    )
}
