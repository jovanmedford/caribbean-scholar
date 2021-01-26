/** @jsx jsx */
import { jsx } from 'theme-ui'
import Logo from '../img/logopng.png'

export default function Header() {
    return (
        <header sx={{
            backgroundColor: '#0F325A',
            height: '4rem'
        }}>
            <img src={Logo} sx={{
                width: '10rem'
            }}/>
        </header>
    )
}