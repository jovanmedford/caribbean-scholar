/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect, useRef } from 'react'
import { Link } from 'gatsby'


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

  const handleClickOutside = event => {
    if (container.current && !container.current.contains(event.target)) {
      setState({
        isOpen: false,
        display: 'none'
      })
    }
  }

  const container = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
  })

    return (
        <div className='Left' ref={container}>
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
                  top: '2rem',
                  display: [state.display,'none'], 
                  fontSize: '1rem',
                  color: 'text',
                  backgroundColor: 'muted',
                  width: ['80%','70%','65'],
                  padding: '0.5rem 0 0.5rem 0',
                  borderRadius: '2px',
                  listStyle: 'none',

                    li: {
                      width: '100%',
                      paddingLeft: '0.5rem',
                      fontWeight: '500',
                      }
                }}>
                    <li><Link to='/'>Home</Link></li>
                    <li><a href='https://jovan-s-school-e0e3.thinkific.com/'>Go to Course Page</a></li>
                </nav>
              </div>
    )
}