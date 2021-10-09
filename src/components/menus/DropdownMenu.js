/** @jsx jsx */
import { jsx } from "theme-ui"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"

export default function DropdownMenu({
  handleClick,
  state,
  container,
  className,
}) {
  return (
    <div
      sx={{ width: "33.33%", marginTop: "1rem", display: ["block", "none"] }}
      className={className}
      ref={container}
    >
      <FontAwesomeIcon
        icon={faAlignJustify}
        onClick={handleClick}
        sx={{
          ":hover": {
            cursor: "pointer",
            color: "accent",
          },
        }}
      />
      <nav
        sx={{
          position: "absolute",
          zIndex: "5",
          top: "3.5rem",
          display: [state.display, "none"],
          fontSize: "1rem",
          color: "text",
          backgroundColor: "muted",
          width: ["80%", "70%", "65"],
          padding: "0.5rem 0 0.5rem 0",
          borderRadius: "2px",
          listStyle: "none",

          li: {
            width: "100%",
            paddingLeft: "0.5rem",
            fontWeight: "500",
          },
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="https://school.thecaribbeanscholar.com/collections">
            Go to Course Page
          </a>
        </li>
      </nav>
    </div>
  )
}
