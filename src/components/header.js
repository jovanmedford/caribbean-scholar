/** @jsx jsx */
import { jsx } from "theme-ui"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faMoon } from "@fortawesome/free-solid-svg-icons"
import { useColorMode } from "theme-ui"
import { Link } from "gatsby"
import Logo from "./Logo"

export default function Header() {
  const [colorMode, setColorMode] = useColorMode()
  setColorMode(colorMode === "home" ? "light" : colorMode)
  return (
    <header sx={headerContainer}>
      <div sx={linkContainer}>
        <Link sx={nudge} to="/home">
          Home
        </Link>
        <a href="https://school.thecaribbeanscholar.com/collections">Courses</a>
      </div>
      <div sx={logoContainer}>
        <Logo />
      </div>
      <div sx={iconContainer}>
        <FontAwesomeIcon sx={nudge} icon={faSearch} />
        <FontAwesomeIcon sx={nudge} icon={faMoon} />
      </div>
    </header>
  )
}

const flexItemWidth = "33.33%"

const headerContainer = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}

const logoContainer = {
  width: "10rem",
}

const linkContainer = {
  a: {
    color: "text",
  },
  marginTop: "1rem",
  width: flexItemWidth,
}

const iconContainer = {
  marginTop: "1rem",
  display: "flex",
  justifyContent: "right",
  width: flexItemWidth,
}

const nudge = {
  marginRight: "1rem",
}
