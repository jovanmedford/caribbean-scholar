/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { Link } from 'gatsby'
import Overlay from './Overlay'

export default function DropdownMenu() {
  const [state, setState] = useState({
    isOpen: false,
    display: 'none'
  })

  const handleClick = () => {
    let { isOpen, display } = state;
    isOpen = !isOpen;
    display = isOpen ? 'block' : 'none';   
    setState({
      isOpen,
      display
    })
  }

    return (
        <div className='Left'>
              <FontAwesomeIcon icon={faAlignJustify} onClick={handleClick} 
              sx={{
                display: ['inline-block','none'],
                ':hover':{
                  cursor: 'pointer',
                  color: 'accent'
                }}}/>
                <nav sx={{
                  position: 'absolute',
                  zIndex: '5',
                  display: state.display, 
                  fontSize: '1rem',
                  color: 'text',
                  backgroundColor: 'muted',
                  width: ['80%','70%','65'],
                  padding: '0.5rem 0 0 0',
                  borderRadius: '2px',
                  listStyle: 'none',
                  boxShadow: '1px 1px 2px 1px grey',

                    li: {
                      width: '100%',
                      paddingLeft: '0.5rem',
                      fontWeight: '500',

                      ':hover': {
                        cursor: 'pointer',
                        borderLeft: '3px solid'
                      }
                    }
                }}>
                    <li><Link to='/'>Home</Link></li>
                    <li><a href='https://jovan-s-school-e0e3.thinkific.com/'>Go to Course Page</a></li>
                </nav>
              </div>
    )
}