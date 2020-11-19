/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignJustify, faSearch, faMoon } from '@fortawesome/free-solid-svg-icons'
import Logo from '../../static/logopng.png'

export default function Header() {
    return (
        <div sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '80%',
            margin: '2rem auto 0',
            height: '6rem',
            }}>
              <div className='Left'>
              <FontAwesomeIcon icon={faAlignJustify}/>
              </div>
            <img src={Logo} alt={'Caribbean Scholar'} sx ={{
              width: '10rem',
              marginBottom: '2rem'
              }}/>
              <div className='Right'>
            <FontAwesomeIcon icon={faSearch} sx={{
              marginRight: '0.5rem'
            }}/>
            <FontAwesomeIcon icon={faMoon}/>
            </div> 
          </div>
    )
}