import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon } from "@fortawesome/free-solid-svg-icons"

export default function ({ handleClick }) {
  return (
    <FontAwesomeIcon
      alt="toggles theme to dark mode"
      icon={faMoon}
      onClick={handleClick}
    />
  )
}
