/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui'
import HomeHero from '../components/homeHero'
import Cover from '../img/makealgebra.jpg'
import Owl from '../img/owl.svg'

export default function MakeAlgebraMakeSense() {
    const [colorMode, setColorMode] = useColorMode()
    setColorMode('home')
    return(
        <div>
           <HomeHero copy="Here's Your Guide" tagline='Enjoy!' image={Owl}
                         link='https://drive.google.com/uc?export=download&id=1YW4ljRAgMP4u-Zg7-TGL-d3cXbgR3LZX'  buttonText='Download'/>
            <a href='https://drive.google.com/uc?export=download&id=1YW4ljRAgMP4u-Zg7-TGL-d3cXbgR3LZX'>
            <img src={Cover} sx={{
                display: 'block',
                width: '15rem',
                margin: '5rem auto'
            }}/>
            </a>
        </div>
    )
}