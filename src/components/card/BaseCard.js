/** @jsx jsx */
import { jsx } from "theme-ui"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export default function Card(props) {
  return (
    <Link sx={cardContainer} to={`/blog/${props.category}/${props.slug}`}>
      <div>
        <GatsbyImage
          image={props.image}
          alt={props.altText}
          sx={{
            height: "12rem",
            width: "100%",
          }}
        />
        <div>
          <p sx={categoryStyle}>{props.category}</p>
          <p sx={titleStyle}>{props.title}</p>
        </div>
      </div>
    </Link>
  )
}

const cardContainer = {
  width: ["80%", "33%"],
  backgroundColor: "background",
  margin: ["0.5rem auto", "0"],
  overflow: "hidden",
  position: "relative",
  color: "text",
  textDecoration: "none",
  ":hover": {
    cursor: "pointer",
    backgroundColor: "muteds",
  },
}

const categoryStyle = {
  margin: 0,
  fontSize: [0, 1],
  color: "accent",
}

const titleStyle = {
  fontSize: [0, 1],
}
