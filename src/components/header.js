/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faMoon } from '@fortawesome/free-solid-svg-icons'
import Logo from '../img/logopng.png'
import { useColorMode } from 'theme-ui'
import { Link } from 'gatsby'
import DropdownMenu from './dropdown-menu'

export default function Header() {
  const [colorMode, setColorMode] = useColorMode()
  setColorMode(colorMode === 'home' ? 'light' : colorMode)
    return (
        <header sx={{
            width: ['85%','75%'],
            margin: '3rem auto',
            height: '2rem',
            position: 'relative'
            }}>
            
          <div className='Left' sx={{
              position: 'absolute',
              left: '0',
              top: '50%',
              width: '100%',
               a: {
                  textDecoration: 'none',
                  color: 'text',
                  padding: '0.2rem',
                }
            }}>
              <DropdownMenu/>
              <Link to='/' sx={{
                display:['none','inline-block'],
                }}>
                  Home
              </Link>
              <a href='https://school.thecaribbeanscholar.com/collections' sx={{
                marginLeft: '0.75rem',
                display:['none','inline-block']
                }}>
                  Courses
                </a>
          </div>
          
          <Link to='/blog'>
            <img src={Logo} alt={'Caribbean Scholar'} sx ={{
              width: '10rem',
              position: 'absolute',
              top: '50%',
              left: '50%',
              '-webkit-transform': 'translate(-50%, -50%)'
              }}/>
          </Link>
              <div className='Right' sx={{
                position: 'absolute',
                right: '0',
                top: '50%',

                svg: {
                  ':hover':{
                    cursor: 'pointer'
                }
              }
              }}>
                <Link to='/filter' sx={{color: 'text'}}>
                    <FontAwesomeIcon icon={faSearch} sx={{
                    marginRight: '0.75rem'
                  }}/>
                </Link>
                <FontAwesomeIcon icon={faMoon}
                  onClick={e => {
                    setColorMode(colorMode === 'light' ? 'dark' : 'light')
                  }}
                />
            </div> 
          </header>
    )
}