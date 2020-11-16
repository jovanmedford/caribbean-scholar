/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignJustify, faSearch, faMoon } from '@fortawesome/free-solid-svg-icons'
import Logo from '../../static/logopng.png'
export default function Home() {
  return <div>
    <FontAwesomeIcon icon={faAlignJustify}/>
    <img src={Logo} sx ={{width: '10%'}}/>
    <FontAwesomeIcon icon={faSearch}/>
    <FontAwesomeIcon icon={faMoon}/>
  </div>
}
