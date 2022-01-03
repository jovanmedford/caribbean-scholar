/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { Spacing } from "../../utils/spacing"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import SidebarLink from "./SidebarLink"
import Ad from "../../img/pre-algebra.png"

export default function Sidebar({ handleClick, state, container }) {
  return (
    <div className="sidebar">
      <button
        onClick={handleClick}
        sx={{
          display: ["flex", "none"],
          background: "none",
          border: "none",
          color: "white",
          textDecoration: "underline",
          textUnderlineOffset: "3px",
          fontSize: 0,
          marginTop: "1.5rem",
        }}
      >
        Menu
      </button>
      <section
        className="sidebar__content"
        ref={container}
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 10,
          display: [state.display, "none"],
          height: "100vh",
          width: "80%",
          backgroundColor: "#206BC0",
          a: {
            fontSize: "1.5rem",
            textDecoration: "none",
            color: "white",
          },
          overflow: "scroll",
        }}
      >
        <div
          sx={{
            padding: `24px 0 0 ${Spacing.mobile.horizontal.extraLarge}`,
          }}
        >
          <FontAwesomeIcon
            icon={faTimes}
            onClick={handleClick}
            sx={{
              fontSize: "2rem",
              color: "white",
              display: "block",
              marginBottom: `${Spacing.mobile.vertical.medium}`,
            }}
          />
        </div>
        <ul
          sx={{
            padding: `0 
                        ${Spacing.mobile.horizontal.extraLarge}
                        ${Spacing.mobile.vertical.medium}
                        ${Spacing.mobile.horizontal.extraLarge}
                        `,
          }}
        >
          <SidebarLink text="Home" link="/" isInternal={true} />
          <SidebarLink text="About" link="/about" isInternal={true} />
          <SidebarLink text="Blog" link="/blog" isInternal={true} />
          <SidebarLink text="Exam Schedule" link="/exam-schedule/view" isInternal={true} />
          <SidebarLink
            text="Courses"
            link="https://school.thecaribbeanscholar.com/"
            isInternal={false}
          />
        </ul>

        <div
          className="sidebar__ad"
          sx={{
            marginBottom: "1.5rem",
          }}
        >
          <div
            className="sidebar__ad__image-container"
            sx={{
              margin: "0 24px",
            }}
          >
            <a href="https://school.thecaribbeanscholar.com/">
              <img
                src={Ad}
                sx={{
                  margin: "0 auto",
                  maxWidth: "14rem",
                  width: "100%",
                  display: "block",
                }}
              />
            </a>
          </div>
          <h3
            sx={{
              textAlign: "center",
              color: "white",
              fontSize: "20px",
              margin: "24px",
            }}
          >
            Pre-Algebra (v2)
          </h3>
        </div>
      </section>
    </div>
  )
}
