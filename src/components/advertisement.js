/** @jsx jsx */
import { jsx } from 'theme-ui'
import Ad from '../img/bim.webp'

export default function Advertisement() {
    return(
        <img src={Ad} sx={{
            display: 'block',
            width: ['60%', '100%'],
            margin: '0 auto',
            gridColumn: '4',
            gridRow: '2/3'
          }}/>
    )
}
