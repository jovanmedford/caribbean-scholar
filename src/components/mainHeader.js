/** @jsx jsx */
import { jsx } from "theme-ui"
import {useState, useRef} from "react"
import { Link } from "gatsby"
import Logo from "../img/logopng.png"
import { Spacing } from "../utils/spacing"
import MenuService from "./menus/Menu"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"

export default function MainHeader() {
  const [show, setShow] = useState(false)
  return (
    <header
      onMouseLeave={() => setShow(false)}
      sx={{
        boxShadow: "2px -1px 16px #0f325a",
        zIndex: 1000,
        backgroundColor: "#0F325A",
        padding: [
          "1rem 1.25rem",
          "1rem 3rem",
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
              width: "9em",
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
              a: {
                color: "white",
                fontWeight: "bold",
                textDecoration: "none",
              },
              "a:hover": {
                color: "secondary",
              },
            }}
          >
            <li>
              <Link to="/about">About</Link>
            </li>
            <li 
              onMouseOver={() => setShow(true)}
              sx={{position: "relative"}}
            >
                <Link to="#"> Resources {"  "} </Link>
                <FontAwesomeIcon icon={faAngleDown} />
              {show && <ul sx={
                {
                  position: "absolute",
                  background: "#15467e",
                  top: "3.6rem",
                  color: "white",
                  padding: "2rem 1rem 0 1rem",
                  li: {
                    marginBottom: "1rem"
                  }
                }}>
                <li><Link to="/exam-schedule/view">Exam Schedule</Link></li>
                <li><Link to="/downloadables">Downloadables</Link></li>
              </ul>
              }
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
