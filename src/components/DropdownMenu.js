/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignJustify, faSearch, faMoon } from '@fortawesome/free-solid-svg-icons'
import Overlay from './Overlay'

export default function DropdownMenu() {
    return (
        <div className='Left'>
              <FontAwesomeIcon icon={faAlignJustify}/>
              <Overlay />
                <nav sx={{
                  position: 'absolute',
                  zIndex: '5',
                  top: '6rem',
                  display: 'block', 
                  fontSize: '1.3rem',
                  color: 'background',
                  backgroundColor: 'text',
                  width: ['75%','70%','65'],
                  padding: '0.5rem',
                  borderRadius: '4px',
                  listStyle: 'none',
                  boxShadow: '1px 1px 2px 1px grey',

                    li: {
                      width: '100%',
                      borderBottom: '0.25px solid',
                      borderColor: 'muted',
                      paddingLeft: '1rem',

                      ':hover': {
                        color: 'primary',
                        cursor: 'pointer'
                      }
                    }
                }}>
                    <li>Home</li>
                    <li>Contributors</li>
                    <li>Partners</li>
                    <li sx={{borderStyle: 'none'}}>Go to Course Page</li>
                </nav>
              </div>
    )
}