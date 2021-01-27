/** @jsx jsx */
import { jsx } from 'theme-ui'

export default function Advertisement() {
    return(
        <div sx={{
            display: 'block',
            width: ['60%', '100%'],
            padding: '0.8rem',
            margin: '0 auto',
            gridColumn: '4',
            gridRow: '2/3',
            backgroundColor: 'text',
            height: ['100%', '50%']
        }}>
           <h2 sx={{
               color: 'background',
               textAlign: 'center',
           }}>
               Go to School
           </h2>
        </div>
        
    )
}
