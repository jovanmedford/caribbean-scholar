/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import Logo from "../img/logopng.png"
import { Spacing } from "../utils/spacing"
import MenuService from "../utils/menuService"

export default function mainHeader() {
  return (
    <header
      sx={{
        backgroundColor: "#0F325A",
        padding: [
          `${Spacing.mobile.vertical.small} ${Spacing.mobile.horizontal.large}`,
          `${Spacing.desktop.vertical.medium} ${Spacing.desktop.horizontal.large}`,
          `${Spacing.desktop.vertical.medium} ${Spacing.desktop.horizontal.large}`,
        ],
        position: ["sticky", "static"],
        top: 0,
        width: "100%",
      }}
    >
      <div
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link to="/">
          <img
            src={Logo}
            sx={{
              width: "11em",
            }}
          />
        </Link>
        <div sx={{}}>
          <MenuService type={0} />
          <ul
            sx={{
              display: ["none", "flex"],
              justifyContent: "space-between",
              li: {
                display: ["none", "block"],
                margin: "0 0.5rem",
              },
              "a:hover": {
                color: "secondary",
              },
            }}
          >
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/resources">Resources</Link>
            </li>
            <li>
              <a href="https://school.thecaribbeanscholar.com/collections">
                Courses
              </a>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
