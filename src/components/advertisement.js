/** @jsx jsx */
import { jsx } from 'theme-ui'

export default function Advertisement() {
    return(
        <a href='https://school.thecaribbeanscholar.com/' sx={{
            display: 'inline-block',
            width: ['60%', '100%'],
            padding: '0.8rem',
            margin: '0 auto',
            gridColumn: '4',
            gridRow: '2/3',
            backgroundColor: 'text',
            height: ['100%', '50%']
            }}>
            <h4 sx={{
                textAlign: 'center',
                color: 'background'
            }}>
                Online School
            </h4>
         </a>        
    )
}
