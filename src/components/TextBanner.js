/** @jsx jsx */
import { jsx } from "theme-ui"

export default function () {
  return (
    <section sx={sectionStyle}>
      <div sx={contentCOntainer}>
        <h2 sx={headerStyle}>
          Get your algebra journey started the right way.
        </h2>
        <a
          sx={linkStyle}
          href="https://school.thecaribbeanscholar.com/courses/pre-algebra-v2"
        >
          Free course
        </a>
      </div>
    </section>
  )
}

const sectionStyle = {
  backgroundColor: "#0F325A",
  width: ["96%", "96%", "80%"],
  margin: "2.5rem auto",
  borderRadius: "8px",
}

const contentCOntainer = {
  padding: ["1rem 1.5rem", "1.5rem 16.6% 1.5rem 8.3%"],
  display: "flex",
  textAlign: ["center", "left"],
  flexDirection: ["column", "row"],
  justifyContent: "space-between",
}

const headerStyle = {
  fontWeight: "normal",
  color: "white",
  maxWidth: ["100%", "75%"],
  fontSize: [2, 3],
}

const linkStyle = {
  textAlign: "center",
  alignSelf: "center",
  color: "white",
  width: ["100%", "25%"],
  fontSize: 1,
}
