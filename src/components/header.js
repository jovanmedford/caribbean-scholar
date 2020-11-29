/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faMoon } from '@fortawesome/free-solid-svg-icons'
import Logo from '../img/logopng.png'
import { useColorMode } from 'theme-ui'
import { Link } from 'gatsby'
import DropdownMenu from './DropdownMenu'

export default function Header() {
  const [colorMode, setColorMode] = useColorMode()
    return (
        <div sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '80%',
            margin: '2rem auto 0',
            height: '6rem',
            }}>
              <DropdownMenu />
              
            <Link to='/'><img src={Logo} alt={'Caribbean Scholar'} sx ={{
              width: '10rem',
              marginBottom: '2rem'
              }}/></Link>
              <div className='Right'>
            <Link to='/filter' sx={{color: 'text'}}>
                <FontAwesomeIcon icon={faSearch} sx={{
                marginRight: '0.5rem'
              }}/>
            </Link>
            <FontAwesomeIcon icon={faMoon}
              onClick={e => {
                setColorMode(colorMode === 'default' ? 'dark' : 'default')
              }}
            />
            </div> 
          </div>
    )
}