/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useState, useEffect, useRef } from "react"

import DropdownMenu from "./DropdownMenu"
import SidebarMenu from "./Sidebar"

export default function Menu({ type }) {
  const [state, setState] = useState({
    isOpen: false,
    display: "none",
  })

  const handleClick = () => {
    let { isOpen, display } = state
    isOpen = !isOpen
    display = isOpen ? "block" : "none"
    setState({
      isOpen,
      display,
    })
  }

  const handleClickOutside = event => {
    if (container.current && !container.current.contains(event.target)) {
      setState({
        isOpen: false,
        display: "none",
      })
    }
  }

  const container = useRef()
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
  })

  return (
    <React.Fragment>
      {type === "dropdown" ? (
        <DropdownMenu
          container={container}
          state={state}
          handleClick={handleClick}
        />
      ) : (
        <SidebarMenu
          container={container}
          handleClick={handleClick}
          state={state}
        />
      )}
    </React.Fragment>
  )
}
