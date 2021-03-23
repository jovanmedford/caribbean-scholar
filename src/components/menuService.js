/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useState, useEffect, useRef } from 'react'

import DropdownMenu from './dropdown-menu'
import SidebarMenu from './sidebar'

export default function MenuService({type}) {
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
        <section>
                    {type === 1 ? <DropdownMenu container={container} 
                                                state = {state}
                                                handleClick={handleClick}
                                                /> 
                    : <SidebarMenu container={container} 
                                   handleClick={handleClick}
                                   state={state}
                                  />}
        </section>
    )
}