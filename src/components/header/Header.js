/** @jsx jsx */
import { jsx } from "theme-ui"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faMoon } from "@fortawesome/free-solid-svg-icons"
import LightToggle from "./LightToggle"
import { useColorMode } from "theme-ui"
import { Link } from "gatsby"
import Logo from "../Logo"
import Menu from "../menus/Menu"

export default function Header() {
  const [colorMode, setColorMode] = useColorMode()
  setColorMode(colorMode === "home" ? "light" : colorMode)

  const handleClick = () => {
    setColorMode(colorMode === "light" ? "dark" : "light")
  }

  return (
    <header sx={headerContainer}>
      <Menu type="dropdown" />
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
        <LightToggle sx={nudge} handleClick={handleClick} />
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
  display: ["none", "block"],
  marginTop: "1rem",
  width: flexItemWidth,
  a: {
    color: "text",
  },
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
