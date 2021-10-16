/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"
import LightToggle from "./LightToggle"
import SearchButton from "./SearchButton"
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
        <Link sx={nudge} to="/">
          Home
        </Link>
        <a href="https://school.thecaribbeanscholar.com/collections">Courses</a>
      </div>
      <div sx={logoContainer}>
        <Link to="/blog">
          <Logo />
        </Link>
      </div>
      <div sx={iconContainer}>
        <SearchButton sx={nudge} />
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
  width: ["85%", "75%"],
  margin: "2rem auto",
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
    textDecoration: "none",
  },
}

const iconContainer = {
  marginTop: "1rem",
  display: "flex",
  justifyContent: "right",
  width: flexItemWidth,
  a: {
    color: "text",
  },
}

const nudge = {
  marginRight: "1rem",
}
